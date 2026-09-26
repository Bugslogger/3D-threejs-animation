import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import fragmentShader from './shaders/plasmaFragment.glsl?raw'
import vertexShader from './shaders/plasmaVertex.glsl?raw'

export default function PlasmaOrb() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' })

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
    renderer.setSize(window.innerWidth, window.innerHeight)

    const directionalLight = new THREE.DirectionalLight('#ffffff', 0.75)
    directionalLight.position.set(5, 5, 5)
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.2)
    scene.add(directionalLight, ambientLight)

    // Detail 6 gives the shader enough vertices without overwhelming the GPU.
    const geometry = new THREE.IcosahedronGeometry(0.61, 50)
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColorBottom: { value: new THREE.Color('#064d40') },
        uColorMiddle: { value: new THREE.Color('#18d878') },
        uColorTop: { value: new THREE.Color('#b5ff45') },
      },
    })
    const shape = new THREE.Mesh(geometry, material)
    scene.add(shape)

    const speakingRef = { current: false }
    const handleSpeechState = (event) => {
      speakingRef.current = Boolean(event.detail?.speaking)
    }
    window.addEventListener('jarvis:speaking', handleSpeechState)

    camera.position.z = 3

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    let frameId
    let time = 0
    let animationSpeed = 0.002 // animtion speed
    const animate = () => {
      material.uniforms.uTime.value = time
      const targetSpeed = speakingRef.current ? 0.008 : 0.002 //change the animation speed based on if AI is speaking or not.
      animationSpeed += (targetSpeed - animationSpeed) * 0.08
      shape.rotation.z -= 0.005 * (animationSpeed / 0.002) // change the rotation speed too

      const breath = speakingRef.current
        ? 1 + Math.sin(time * 7.5) * 0.075
        : 1
      const currentScale = shape.scale.x + (breath - shape.scale.x) * 0.12
      shape.scale.setScalar(currentScale)

      time += animationSpeed
      frameId = window.requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    window.addEventListener('resize', resize)
    animate()

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('jarvis:speaking', handleSpeechState)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="orb-canvas" />
}
