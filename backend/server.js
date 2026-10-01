import "dotenv/config";
import { createServer } from "node:http";
import cors from "cors";
import express from "express";
import aiRoutes from "./routes/aiRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";
import { createSocketServer } from "./sockets/socketServer.js";
import { aiConfig, getServerSettings } from "./utils/ai.config.js";

// Trust certificates installed in the Windows system store (for example, a
// corporate HTTPS proxy) without disabling TLS verification.
process.env.NODE_USE_SYSTEM_CA ||= aiConfig.server.useSystemCAByDefault ? "1" : "0";

const app = express();
const { port, allowedOrigins } = getServerSettings();
const httpServer = createServer(app);
const io = createSocketServer(httpServer, allowedOrigins);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.set("io", io);
app.use("/api", healthRoutes);
app.use("/api/ai", aiRoutes);

app.use((_request, response) => {
  response.status(404).json({ error: "Route not found" });
});

httpServer.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
