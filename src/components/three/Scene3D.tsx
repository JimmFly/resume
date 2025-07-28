import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import Globe from './Globe'
import Text3D from './Text3D'
import ParticleBackground from '../canvas/ParticleBackground'

interface Scene3DProps {
  className?: string
  showGlobe?: boolean
  showText?: boolean
  showParticles?: boolean
  text?: string
}

export const Scene3D: React.FC<Scene3DProps> = ({
  className = '',
  showGlobe = true,
  showText = true,
  showParticles = true,
  text = '杨晋飞',
}) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          {/* 环境光照 */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color='#60a5fa' />

          {/* 环境贴图 */}
          <Environment preset='night' />

          {/* 3D元素 */}
          {showParticles && <ParticleBackground count={3000} />}
          {showGlobe && <Globe position={[2, 0, 0]} scale={0.8} />}
          {showText && <Text3D text={text} position={[-2, 0, 0]} fontSize={0.5} />}

          {/* 控制器 */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene3D
