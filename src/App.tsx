// import React from 'react';

// 导入组件
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ParallaxContainer from './components/common/ParallaxContainer'
import ChatBot from './components/ChatBot'

function App() {
  // 从环境变量获取 OpenAI API Key
  const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY

  return (
    <ParallaxContainer>
      <div className='min-h-screen bg-background text-text'>
        <Navbar />
        {/* 主要内容 */}
        <main className='relative z-10'>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
        {/* ChatBot 组件 */}
        <ChatBot
          apiKey={openaiApiKey}
          maxMessagesPerSession={5}
          rateLimitMs={5000}
          maxSessionDuration={15}
        />
      </div>
    </ParallaxContainer>
  )
}

export default App
