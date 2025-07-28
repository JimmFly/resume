import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

interface GlobeProps {
  position?: [number, number, number]
  scale?: number
}

export const Globe: React.FC<GlobeProps> = ({ position = [0, 0, 0], scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null!)

  // Create earth texture
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!
    canvas.width = 512
    canvas.height = 256

    // Create simple earth texture
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop(0, '#1e40af')
    gradient.addColorStop(0.3, '#3b82f6')
    gradient.addColorStop(0.7, '#60a5fa')
    gradient.addColorStop(1, '#93c5fd')

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add some land shapes
    ctx.fillStyle = '#22c55e'
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const radius = Math.random() * 30 + 10
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    return new THREE.CanvasTexture(canvas)
  }, [])

  // Animation rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group position={position}>
      <Sphere ref={meshRef} args={[1, 64, 32]} scale={scale}>
        <meshStandardMaterial map={earthTexture} transparent opacity={0.9} />
      </Sphere>

      {/* Atmosphere effect */}
      <Sphere args={[1.05, 32, 16]} scale={scale}>
        <meshBasicMaterial color='#60a5fa' transparent opacity={0.1} side={THREE.BackSide} />
      </Sphere>

      {/* Glow effect */}
      <Sphere args={[1.1, 32, 16]} scale={scale}>
        <meshBasicMaterial color='#3b82f6' transparent opacity={0.05} side={THREE.BackSide} />
      </Sphere>
    </group>
  )
}

export default Globe
