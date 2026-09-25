# J.A.R.V.I.S. React Native app

This is a separate Expo mobile client for the existing Socket.IO backend.

## Run

```bash
npm install
npx expo start
```

Automatic microphone listening uses `expo-speech-recognition`, which is a native module. It is not included in Expo Go, so create a development build after installing dependencies:

```bash
npx expo run:android
```

After the first native build, use `npx expo start --dev-client`.

Set the backend address before starting the app:

```bash
EXPO_PUBLIC_SOCKET_URL=http://YOUR_COMPUTER_IP:5000 npx expo start
```

Use your computer's LAN IP on a physical device. `localhost` refers to the phone itself, not the development computer.

The orb is full-screen, uses a Three.js shader, rotates on the Z axis, and expands with a breathing animation while speech is playing.
