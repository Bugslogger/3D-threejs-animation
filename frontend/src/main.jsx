import React from 'react'
import { createRoot } from 'react-dom/client'
import PlasmaOrb from './PlasmaOrb'
import './styles.css'

function App() {
  return (
    <main className="orb-only">
      <PlasmaOrb />
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
