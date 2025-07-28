import React from 'react';
import { useScrollProgress } from '../../hooks/useParallax';
import { PARALLAX_CONFIG } from '../../constants';

interface ParallaxContainerProps {
  children: React.ReactNode;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ children }) => {
  const scrollProgress = useScrollProgress();
  
  return (
    <div className="relative">
      {/* 全局背景视差元素 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* 星空背景 */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollProgress * 50}px)`,
            background: `
              radial-gradient(2px 2px at 20px 30px, #eee, transparent),
              radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
              radial-gradient(1px 1px at 90px 40px, #fff, transparent),
              radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent),
              radial-gradient(2px 2px at 160px 30px, #ddd, transparent)
            `,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 100px'
          }}
        />
        
        {/* 浮动几何形状 */}
        <div 
          className="absolute top-1/4 left-1/6 w-4 h-4 bg-cyan-400/20 rounded-full"
          style={{
            transform: `translateY(${scrollProgress * PARALLAX_CONFIG.background.slow * 100}px) rotate(${scrollProgress * 360}deg)`
          }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-blue-400/15 rounded-full"
          style={{
            transform: `translateY(${scrollProgress * PARALLAX_CONFIG.background.medium * 100}px) rotate(${-scrollProgress * 180}deg)`
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400/25 rounded-full"
          style={{
            transform: `translateY(${scrollProgress * PARALLAX_CONFIG.background.fast * 100}px) rotate(${scrollProgress * 270}deg)`
          }}
        />
        
        {/* 渐变光晕 */}
        <div 
          className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"
          style={{
            transform: `translateX(-50%) translateY(${scrollProgress * PARALLAX_CONFIG.background.slow * 200}px)`
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-tl from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          style={{
            transform: `translateY(${-scrollProgress * PARALLAX_CONFIG.background.medium * 150}px)`
          }}
        />
      </div>
      
      {/* 主要内容 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxContainer;