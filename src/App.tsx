// import React from 'react';

// Import components
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ExperienceSection from './components/sections/ExperienceSection'
import SkillsSection from './components/sections/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ContactSection from './components/sections/ContactSection'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ParallaxContainer from './components/common/ParallaxContainer'
import ChatBot from './components/ChatBot'

function App() {
  // Get OpenAI API Key from environment variables
  const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY

  return (
    <ParallaxContainer>
      <div className='min-h-screen bg-background text-text'>
        <Navbar />
        {/* Main content */}
        <main className='relative z-10'>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
        {/* ChatBot component */}
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
