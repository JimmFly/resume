import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RealisticGlobe from "../three/RealisticGlobe";
import { HERO_CONTENT, GLOBE_CONFIG, PARALLAX_CONFIG } from '../../constants';
import { useAnimation } from '../../hooks/useAnimation';
import { useMultiLayerParallax } from '../../hooks/useParallax';

const HeroSection = React.memo(() => {
  const { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } = useAnimation();
  const { getLayerStyle } = useMultiLayerParallax([...PARALLAX_CONFIG.layers.hero]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 背景效果 - 添加视差效果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" />
      <div 
        className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        style={getLayerStyle(0)}
      />
      <div 
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        style={getLayerStyle(1)}
      />
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"
        style={getLayerStyle(2)}
      />

      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* 左侧内容 */}
          <motion.div
            className="flex-1"
            variants={fadeInLeft}
            initial="hidden"
            animate="show">
            <motion.p
              className="text-primary font-mono mb-4"
              variants={fadeInUp}>
              {HERO_CONTENT.greeting}
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              variants={fadeInUp}>
              {HERO_CONTENT.name}
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl text-gray-300 mb-8"
              variants={fadeInUp}>
              {HERO_CONTENT.title}
            </motion.h2>

            <motion.p
              className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed"
              variants={fadeInUp}>
              {HERO_CONTENT.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={staggerContainer}>
              {HERO_CONTENT.buttons.map((button, index) => (
                <motion.a
                  key={index}
                  href={button.href}
                  target={button.external ? "_blank" : undefined}
                  rel={button.external ? "noopener noreferrer" : undefined}
                  className={button.primary 
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    : "border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 transform hover:scale-105"
                  }
                  variants={fadeInUp}>
                  {button.text}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* 右侧3D地球 */}
          <motion.div
            className="flex-1 flex justify-center items-center relative"
            variants={fadeInRight}
            initial="hidden"
            animate="show">
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
                    position={GLOBE_CONFIG.position}
                    scale={GLOBE_CONFIG.scale}
                    autoRotate={GLOBE_CONFIG.autoRotate}
                    rotationSpeed={GLOBE_CONFIG.rotationSpeed}
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
          variants={fadeInUp}
          initial="hidden"
          animate="show">
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
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
