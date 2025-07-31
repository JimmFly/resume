import React from 'react';
import ChatBot from './ChatBot';
import ParallaxContainer from './common/ParallaxContainer';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import ExperienceSection from './sections/ExperienceSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';

/**
 * Resume page component that displays the main portfolio content
 */
const ResumePage: React.FC = () => {
  // Get OpenAI API Key from environment variables
  const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

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
  );
};

export default ResumePage;