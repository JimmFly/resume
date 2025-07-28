import React, { useRef, useMemo } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import { GLOBE_CONFIG } from '../../constants'

interface RealisticGlobeProps {
  position?: [number, number, number]
  scale?: number
  autoRotate?: boolean
  rotationSpeed?: number
}

const RealisticGlobe: React.FC<RealisticGlobeProps> = ({
  position = [0, 0, 0],
  scale = 1,
  autoRotate = true,
  rotationSpeed = 0.5,
}) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const atmosphereRef = useRef<THREE.Mesh>(null!)

  // Load earth texture
  const earthTexture = useLoader(TextureLoader, './textures/earth_daymap.jpg')

  // Shenzhen coordinates (latitude, longitude)
  const shenzhenCoords = {
    lat: GLOBE_CONFIG.shenzhen.latitude,
    lng: GLOBE_CONFIG.shenzhen.longitude,
  }

  // Convert lat/lng to 3D coordinates
  const latLngToVector3 = useMemo(() => {
    return (lat: number, lng: number, radius: number = 1) => {
      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lng + 180) * (Math.PI / 180)

      const x = -(radius * Math.sin(phi) * Math.cos(theta))
      const z = radius * Math.sin(phi) * Math.sin(theta)
      const y = radius * Math.cos(phi)

      return new THREE.Vector3(x, y, z)
    }
  }, [])

  // Shenzhen marker position
  const shenzhenPosition = useMemo(() => {
    return latLngToVector3(shenzhenCoords.lat, shenzhenCoords.lng, 1.02)
  }, [latLngToVector3, shenzhenCoords.lat, shenzhenCoords.lng])

  // Shenzhen label position
  const shenzhenLabelPosition = useMemo(() => {
    return latLngToVector3(shenzhenCoords.lat, shenzhenCoords.lng, 1.15)
  }, [latLngToVector3, shenzhenCoords.lat, shenzhenCoords.lng])

  // Animation loop
  useFrame((_, delta) => {
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.y += delta * rotationSpeed * 0.1
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += delta * rotationSpeed * 0.05
    }
  })

  // Set initial earth rotation to face Shenzhen towards screen
  const initialRotation = useMemo(() => {
    // Shenzhen is at 114.0579° E, adjust rotation to face forward
    // Experimentally adjust angle to face Shenzhen towards screen
    const shenzhenLongitude = GLOBE_CONFIG.shenzhen.longitude
    const shenzhenLatitude = GLOBE_CONFIG.shenzhen.latitude
    const rotationX = -(shenzhenLatitude * Math.PI) / 180 + Math.PI / 6 + Math.PI / 6
    const rotationY = -(shenzhenLongitude * Math.PI) / 180 - Math.PI / 2
    return [rotationX, rotationY, 0] as [number, number, number]
  }, [])

  return (
    <group position={position} scale={scale}>
      {/* Earth main body */}
      <mesh ref={meshRef} rotation={initialRotation}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={earthTexture}
          shininess={GLOBE_CONFIG.material.shininess}
          specular={new THREE.Color(GLOBE_CONFIG.material.specular)}
        />

        {/* Shenzhen marker point - Inside earth to follow rotation */}
        <mesh position={[shenzhenPosition.x, shenzhenPosition.y, shenzhenPosition.z]}>
          <sphereGeometry args={[GLOBE_CONFIG.marker.size, 16, 16]} />
          <meshBasicMaterial color={GLOBE_CONFIG.marker.color} />
        </mesh>

        {/* Shenzhen marker glow effect */}
        <mesh position={[shenzhenPosition.x, shenzhenPosition.y, shenzhenPosition.z]}>
          <sphereGeometry args={[GLOBE_CONFIG.marker.size * 1.67, 16, 16]} />
          <meshBasicMaterial
            color={GLOBE_CONFIG.marker.color}
            transparent
            opacity={GLOBE_CONFIG.marker.glowOpacity}
          />
        </mesh>

        {/* Shenzhen label - Fix mirror inversion and follow rotation */}
        <Text
          position={[shenzhenLabelPosition.x, shenzhenLabelPosition.y, shenzhenLabelPosition.z]}
          fontSize={0.08}
          color='#ffffff'
          anchorX='center'
          anchorY='middle'
          outlineWidth={0.002}
          outlineColor='#000000'
          rotation={[0, Math.PI, 0]}
        >
          Shenzhen
        </Text>
      </mesh>

      {/* Atmosphere */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[1.05, 32, 32]} />
        <meshBasicMaterial color={0x69b7ff} transparent opacity={0.1} side={THREE.BackSide} />
      </mesh>

      {/* Glow effect */}
      <mesh>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshBasicMaterial color={0x69b7ff} transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>
    </group>
  )
}

export default RealisticGlobe
