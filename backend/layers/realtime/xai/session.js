import WebSocket from "ws";
import { getXaiRealtimeConfig } from "./config.js";
import {
  buildPersonaPrompt,
  currentMode,
  persona,
} from "../../../utils/friday.config.js";

const instructions = `${buildPersonaPrompt(currentMode)}

LIVE VOICE RULES

You are ${persona.displayName}, speaking in real time. Keep responses concise and natural for speech. Never mention internal systems, APIs, JSON, status codes, or implementation details. Use the available menu tool when the user asks about menu items or prices. Do not claim that an order was placed unless a verified tool confirms it.`;

function menuTool() {
  return {
    type: "function",
    name: "get_digimenu_menu",
    description:
      "Read the current Digimenu menu, categories, items, descriptions, availability, and prices.",
    parameters: {
      type: "object",
      properties: {
        taguid: { type: "string", description: "Optional table tag UID." },
        restaurantId: {
          type: "string",
          description: "Optional restaurant ID.",
        },
        tableId: { type: "string", description: "Optional table ID." },
      },
      additionalProperties: false,
    },
  };
}

function audioBuffer(value) {
  if (Buffer.isBuffer(value)) return value;
  if (value instanceof ArrayBuffer) return Buffer.from(new Uint8Array(value));
  if (value instanceof Uint8Array) return Buffer.from(value);
  if (value && value.type === "Buffer" && Array.isArray(value.data))
    return Buffer.from(value.data);
  return null;
}

export function createXaiRealtimeSession({
  onAudioStart,
  onAudio,
  onAudioEnd,
  onError,
  onFunctionCall,
  config = getXaiRealtimeConfig(),
} = {}) {
  if (!config.apiKey) throw new Error("XAI_API_KEY is not configured.");
  const url = new URL(config.baseURL);
  url.searchParams.set("model", config.model);
  const socket = new WebSocket(url, {
    headers: { Authorization: `Bearer ${config.apiKey}` },
  });
  let opened = false;
  let configured = false;
  let greetingSent = false;
  let audioStarted = false;
  let closed = false;
  const pendingAudio = [];
  let pendingAudioBytes = 0;
  const maxPendingAudioBytes = config.inputRate * 2;

  function flushPendingAudio() {
    while (
      pendingAudio.length &&
      configured &&
      socket.readyState === WebSocket.OPEN
    ) {
      socket.send(pendingAudio.shift());
    }
    pendingAudioBytes = 0;
  }

  socket.on("open", () => {
    opened = true;
    socket.send(
      JSON.stringify({
        type: "session.update",
        session: {
          instructions,
          voice: config.voice,
          turn_detection: { type: "server_vad" },
          audio: {
            input: {
              format: { type: "audio/pcm", rate: config.inputRate },
              transport: "binary",
            },
            output: {
              format: { type: "audio/pcm", rate: config.outputRate },
              transport: "binary",
            },
          },
          tools: [menuTool()],
        },
      }),
    );
  });

  socket.on("message", (raw, isBinary) => {
    // ws delivers text frames as Buffers too, so use the explicit isBinary
    // flag. Forwarding JSON event bytes as PCM produces loud static/noise.
    if (isBinary) {
      if (!audioStarted) {
        audioStarted = true;
        onAudioStart?.();
      }
      const audio = audioBuffer(raw);
      if (audio?.length) onAudio?.(audio);
      else onError?.("Invalid binary audio frame received from xAI.");
      return;
    }
    try {
      const event = JSON.parse(raw.toString());

      if (event.type === "response.created") {
        audioStarted = true;
        onAudioStart?.();
      } else if (event.type === "response.done") {
        if (audioStarted) onAudioEnd?.();
        audioStarted = false;
      } else if (event.type === "session.updated") {
        configured = true;
        flushPendingAudio();
        if (!greetingSent) {
          greetingSent = true;
          socket.send(
            JSON.stringify({
              type: "conversation.item.create",
              item: {
                type: "message",
                role: "user",
                content: [
                  {
                    type: "input_text",
                    text: "Greet the guest briefly and invite them to ask for the menu.",
                  },
                ],
              },
            }),
          );
          socket.send(JSON.stringify({ type: "response.create" }));
        }
      } else if (event.type === "response.function_call_arguments.done")
        onFunctionCall?.(event, socket);
      else if (
        event.type === "response.output_audio.delta" ||
        event.type === "response.audio.delta"
      ) {
        if (typeof event.delta === "string") {
          if (!audioStarted) {
            audioStarted = true;
            onAudioStart?.();
          }
          onAudio?.(Buffer.from(event.delta, "base64"));
        }
      } else if (event.type === "error")
        onError?.(
          event.error?.message || event.message || "xAI Realtime error.",
        );
    } catch {
      onError?.("Invalid xAI Realtime event.");
    }
  });
  socket.on("error", (error) =>
    onError?.(error.message || "xAI Realtime connection error."),
  );

  return {
    appendAudio(pcm) {
      if (closed) return;
      const audio = audioBuffer(pcm);
      if (!audio?.length) {
        onError?.("Invalid audio chunk received from the browser.");
        return;
      }
      if (opened && configured && socket.readyState === WebSocket.OPEN) {
        socket.send(audio);
        return;
      }
      if (pendingAudioBytes + audio.length > maxPendingAudioBytes) return;
      pendingAudio.push(audio);
      pendingAudioBytes += audio.length;
    },
    send(event) {
      if (!closed && socket.readyState === WebSocket.OPEN)
        socket.send(JSON.stringify(event));
    },
    close() {
      closed = true;
      if (
        socket.readyState === WebSocket.OPEN ||
        socket.readyState === WebSocket.CONNECTING
      )
        socket.close();
    },
  };
}
