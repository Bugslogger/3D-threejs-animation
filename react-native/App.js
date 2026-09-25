import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import OrbScreen from './src/screens/OrbScreen'

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" hidden />
      <OrbScreen />
    </SafeAreaProvider>
  )
}
