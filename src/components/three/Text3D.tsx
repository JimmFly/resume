import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

interface Text3DProps {
  text: string
  position?: [number, number, number]
  fontSize?: number
  color?: string
}

export const Text3D: React.FC<Text3DProps> = ({
  text,
  position = [0, 0, 0],
  fontSize = 1,
  color = '#60a5fa',
}) => {
  const textRef = useRef<THREE.Mesh>(null!)

  useFrame(state => {
    if (textRef.current) {
      // 动态光影效果
      const time = state.clock.elapsedTime
      textRef.current.rotation.y = Math.sin(time * 0.5) * 0.1
      textRef.current.position.y = position[1] + Math.sin(time * 2) * 0.1
    }
  })

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={fontSize}
      color={color}
      anchorX='center'
      anchorY='middle'
    >
      {text}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.2}
        metalness={0.8}
        roughness={0.2}
      />
    </Text>
  )
}

export default Text3D
