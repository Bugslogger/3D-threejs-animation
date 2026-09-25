import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  orbStage: { ...StyleSheet.absoluteFillObject, flex: 1, justifyContent: 'center', alignItems: 'center' },
  overlay: { flex: 1, alignItems: 'center', justifyContent: 'flex-end', padding: 28 },
  title: { color: '#d9ffe1', fontSize: 14, letterSpacing: 4, marginBottom: 8 },
  status: { color: '#39ff61', fontSize: 11, letterSpacing: 3 },
  reply: { color: '#c8ffd3', fontSize: 14, lineHeight: 21, textAlign: 'center', marginTop: 18, maxHeight: 100 },
  error: { color: '#ff8f8f', fontSize: 12, textAlign: 'center', marginTop: 14 },
  micButton: { width: 62, height: 62, borderRadius: 31, borderWidth: 1, borderColor: '#39ff61', backgroundColor: 'rgba(3, 25, 10, 0.9)', alignItems: 'center', justifyContent: 'center', marginTop: 22, shadowColor: '#39ff61', shadowOpacity: 0.45, shadowRadius: 14, elevation: 8 },
  micButtonActive: { backgroundColor: '#185c29', shadowOpacity: 0.9, transform: [{ scale: 1.08 }] },
  micGlyph: { width: 14, height: 24, borderWidth: 2, borderColor: '#9affaa', borderRadius: 8 },
  micStem: { position: 'absolute', width: 2, height: 10, backgroundColor: '#9affaa', bottom: 12 },
})
