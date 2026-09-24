import React from 'react'
import { createRoot } from 'react-dom/client'
import PlasmaOrb from './PlasmaOrb'
import VoiceAssistant from './VoiceAssistant'
import './styles.css'

function App() {
  return (
    <main className="orb-only">
      <PlasmaOrb />
      <VoiceAssistant />
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
