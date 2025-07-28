import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import RealisticGlobe from './three/RealisticGlobe'

const GlobeDemo: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center'>
      <div className='w-full max-w-4xl mx-auto p-8'>
        <h1 className='text-4xl font-bold text-white text-center mb-8'>3D 地球演示</h1>

        <div className='h-96 w-full bg-black/20 rounded-lg overflow-hidden'>
          <Canvas camera={{ position: [0, 0, 3], fov: 75 }} gl={{ antialias: true, alpha: true }}>
            <Suspense fallback={null}>
              {/* Ambient lighting */}
              <ambientLight intensity={0.4} />

              {/* Directional light (sunlight) */}
              <directionalLight position={[5, 3, 5]} intensity={1.2} color='#ffffff' />

              {/* Supplementary light source */}
              <pointLight position={[-3, -2, -3]} intensity={0.3} color='#4a90e2' />

              {/* 3D Globe */}
              <RealisticGlobe
                position={[0, 0, 0]}
                scale={1.5}
                autoRotate={true}
                rotationSpeed={0.5}
              />

              {/* Controls */}
              <OrbitControls
                enableZoom={true}
                enablePan={true}
                autoRotate={false}
                minDistance={2}
                maxDistance={8}
              />
            </Suspense>
          </Canvas>
        </div>

        <div className='mt-8 text-center'>
          <p className='text-gray-300 mb-4'>使用鼠标拖拽旋转地球，滚轮缩放</p>
          <div className='flex justify-center space-x-4'>
            <div className='bg-gray-800 px-4 py-2 rounded'>
              <span className='text-cyan-400'>✨ 真实地球纹理</span>
            </div>
            <div className='bg-gray-800 px-4 py-2 rounded'>
              <span className='text-blue-400'>🌍 大气层效果</span>
            </div>
            <div className='bg-gray-800 px-4 py-2 rounded'>
              <span className='text-green-400'>🔄 自动旋转</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobeDemo
