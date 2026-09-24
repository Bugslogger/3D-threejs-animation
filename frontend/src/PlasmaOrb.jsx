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
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)

    const directionalLight = new THREE.DirectionalLight('#ffffff', 0.75)
    directionalLight.position.set(5, 5, 5)
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.2)
    scene.add(directionalLight, ambientLight)

    // Detail 6 is high-resolution while remaining safe for real-time rendering.
    const geometry = new THREE.IcosahedronGeometry(0.61, 80)
    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader })
    material.uniforms.uTime = { value: 0 }
    const shape = new THREE.Mesh(geometry, material)
    scene.add(shape)

    camera.position.z = 3

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    let frameId
    let time = 0
    const animate = () => {
      material.uniforms.uTime.value = time
      shape.rotation.z -= 0.005
      time += 0.002
      frameId = window.requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    window.addEventListener('resize', resize)
    animate()

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="orb-canvas" />
}
