import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlasmaOrb from '../components/PlasmaOrb'
import useJarvisSocket from '../hooks/useJarvisSocket'
import styles from './orbScreenStyles'

export default function OrbScreen() {
  const { connected, speaking, listening, reply, error, toggleListening } = useJarvisSocket()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.orbStage}>
        <PlasmaOrb speaking={speaking} />
      </View>
      <View style={styles.overlay} pointerEvents="box-none">
        <Text style={styles.title}>J.A.R.V.I.S.</Text>
        <Text style={styles.status}>{speaking ? 'SPEAKING' : listening ? 'LISTENING' : connected ? 'ONLINE' : 'CONNECTING'}</Text>
        {reply ? <Text style={styles.reply}>{reply}</Text> : null}
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Pressable
          accessibilityLabel={listening ? 'Stop listening' : 'Start listening'}
          style={[styles.micButton, listening && styles.micButtonActive]}
          onPress={toggleListening}
        >
          <View style={styles.micGlyph} />
          <View style={styles.micStem} />
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
