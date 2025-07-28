import React, { useRef, useMemo } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

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
  rotationSpeed = 0.5
}) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const atmosphereRef = useRef<THREE.Mesh>(null!)
  
  // 加载地球纹理
  const earthTexture = useLoader(TextureLoader, '/textures/earth_daymap.jpg')
  
  // 深圳坐标 (纬度, 经度)
  const shenzhenCoords = { lat: 22.5431, lng: 114.0579 }
  
  // 将经纬度转换为3D坐标
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
  
  // 深圳标记位置
  const shenzhenPosition = useMemo(() => {
    return latLngToVector3(shenzhenCoords.lat, shenzhenCoords.lng, 1.02)
  }, [latLngToVector3])
  
  // 深圳标签位置
  const shenzhenLabelPosition = useMemo(() => {
    return latLngToVector3(shenzhenCoords.lat, shenzhenCoords.lng, 1.15)
  }, [latLngToVector3])
  
  // 动画循环
  useFrame((state, delta) => {
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.y += delta * rotationSpeed * 0.1
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += delta * rotationSpeed * 0.05
    }
  })
  
  // 设置地球初始旋转，让深圳面向屏幕
  const initialRotation = useMemo(() => {
    // 深圳位于东经114.0579度，需要调整旋转让其面向前方
    // 通过实验调整角度，让深圳朝向屏幕
    const shenzhenLongitude = 114.0579
    const shenzhenLatitude = 22.5431
    const rotationX = -(shenzhenLatitude * Math.PI) / 180 + Math.PI / 6 + Math.PI / 6
    const rotationY = -(shenzhenLongitude * Math.PI) / 180 - Math.PI / 2
    return [rotationX, rotationY, 0] as [number, number, number]
  }, [])

  return (
    <group position={position} scale={scale}>
      {/* 地球主体 */}
      <mesh ref={meshRef} rotation={initialRotation}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial 
          map={earthTexture}
          shininess={100}
          specular={new THREE.Color(0x111111)}
        />
        
        {/* 深圳标记点 - 放在地球内部跟随旋转 */}
        <mesh position={[shenzhenPosition.x, shenzhenPosition.y, shenzhenPosition.z]}>
          <sphereGeometry args={[0.015, 16, 16]} />
          <meshBasicMaterial color={0xff4444} />
        </mesh>
        
        {/* 深圳标记发光效果 */}
        <mesh position={[shenzhenPosition.x, shenzhenPosition.y, shenzhenPosition.z]}>
          <sphereGeometry args={[0.025, 16, 16]} />
          <meshBasicMaterial 
            color={0xff4444}
            transparent
            opacity={0.3}
          />
        </mesh>
        
        {/* 深圳标签 - 修复镜面反转并跟随旋转 */}
        <Text
          position={[shenzhenLabelPosition.x, shenzhenLabelPosition.y, shenzhenLabelPosition.z]}
          fontSize={0.08}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.002}
          outlineColor="#000000"
          rotation={[0, Math.PI, 0]}
        >
          深圳
        </Text>
      </mesh>
      
      {/* 大气层 */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[1.05, 32, 32]} />
        <meshBasicMaterial 
          color={0x69b7ff}
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* 发光效果 */}
      <mesh>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshBasicMaterial 
          color={0x69b7ff}
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

export default RealisticGlobe