import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber/native'
import * as THREE from 'three'
import { plasmaFragmentShader, plasmaVertexShader } from '../shaders/plasmaShaders'

function OrbMesh({ speaking }) {
  const meshRef = useRef(null)
  const materialRef = useRef(null)
  const speakingRef = useRef(speaking)
  const baseScale = 1

  useEffect(() => {
    speakingRef.current = speaking
  }, [speaking])

  useFrame((state, delta) => {
    const mesh = meshRef.current
    const material = materialRef.current
    if (!mesh || !material) return

    material.uniforms.uTime.value = state.clock.elapsedTime
    mesh.rotation.z -= delta * 0.3

    const targetScale = baseScale * (speakingRef.current
      ? 1 + Math.sin(state.clock.elapsedTime * 4.8) * 0.065
      : 1)
    mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.12)
  })

  return (
    <mesh ref={meshRef} scale={baseScale}>
      {/* Mobile-safe tessellation; the web shader and deformation remain identical. */}
      <icosahedronGeometry args={[0.61, 20]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={plasmaVertexShader}
        fragmentShader={plasmaFragmentShader}
        precision="highp"
        uniforms={{
          uTime: { value: 0 },
        }}
      />
    </mesh>
  )
}

export default function PlasmaOrb({ speaking }) {
  return (
    <Canvas
      style={{ flex: 1 }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 3], fov: 75 }}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => {
        gl.setClearColor('#000000')
        gl.debug.checkShaderErrors = true
      }}
    >
      <OrbMesh speaking={speaking} />
    </Canvas>
  )
}
