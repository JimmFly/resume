import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RealisticGlobe from "../three/RealisticGlobe";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* 左侧内容 */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <motion.p
              className="text-primary font-mono mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}>
              你好，我是
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}>
              杨晋飞
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}>
              前端开发工程师 · 3年经验 · 万有理论科技
            </motion.h2>

            <motion.p
              className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}>
              专注于React技术栈的前端开发工程师，拥有3年丰富经验。熟练掌握TypeScript、GraphQL、Tailwind
              CSS等现代前端技术，参与AFFiNE开源项目开发。擅长构建高质量、可复用的组件库，致力于打造优秀的用户体验。
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}>
              <a
                href="mailto:yangjinfei001@gmail.com"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                联系我
              </a>
              <a
                href="https://github.com/JimmFly"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 transform hover:scale-105">
                GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* 右侧3D地球 */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem]">
              <Canvas
                camera={{ position: [0, 0, 3], fov: 75 }}
                gl={{ antialias: true, alpha: true }}>
                <Suspense fallback={null}>
                  {/* 环境光照 - 增强亮度让整个地球都是白天 */}
                  <ambientLight intensity={1.0} />

                  {/* 补充光源 */}
                  <pointLight
                    position={[-3, -2, -3]}
                    intensity={0.2}
                    color="#4a90e2"
                  />

                  {/* 3D地球 */}
                  <RealisticGlobe 
                   position={[0, 0, 0]} 
                   scale={1.62}
                   autoRotate={true}
                   rotationSpeed={0.15}
                 />

                  {/* 控制器 */}
                  <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    autoRotate={false}
                    minDistance={2}
                    maxDistance={6}
                  />
                </Suspense>
              </Canvas>
            </div>
          </motion.div>
        </div>

        {/* 向下滚动指示器 */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}>
          <a href="#about" className="flex flex-col items-center text-primary">
            <span className="text-sm mb-2">向下滚动</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
