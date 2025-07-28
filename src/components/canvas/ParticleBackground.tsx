import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface ParticleBackgroundProps {
  count?: number
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ count = 5000 }) => {
  const pointsRef = useRef<THREE.Points>(null!)

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      // Random position
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20

      // Random color (blue tones)
      const color = new THREE.Color()
      color.setHSL(0.6 + Math.random() * 0.1, 0.8, 0.5 + Math.random() * 0.3)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return { positions, colors }
  }, [count])

  useFrame(state => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <Points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          args={[particles.positions, 3]}
          attach='attributes-position'
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          args={[particles.colors, 3]}
          attach='attributes-color'
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial size={0.02} vertexColors transparent opacity={0.8} sizeAttenuation />
    </Points>
  )
}

export default ParticleBackground
