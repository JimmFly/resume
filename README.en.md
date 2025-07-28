# 🌟 Modern Portfolio Website

[中文](README.md) | **English** | [日本語](README.ja.md)

A modern, interactive AI native portfolio website built with React 18 + TypeScript, featuring immersive parallax scrolling, 3D interactive elements, and AI chatbot integration.

## 🔗 Live Preview

**[🚀 Visit GitHub Pages Deployment](https://jimmfly.github.io/resume/)**

## ✨ Key Features

### 🎨 Visual Experience

- **Immersive Parallax Scrolling**: Multi-layer parallax effects creating depth and immersion
- **3D Interactive Elements**: Interactive 3D Earth model with realistic textures and lighting
- **Smooth Animations**: Framer Motion powered smooth transitions and micro-interactions
- **Modern Dark Theme**: Elegant dark color scheme with gradient accents
- **Fully Responsive**: Perfect adaptation across all devices and screen sizes

### 🚀 User Experience

- **Lightning Fast Loading**: Vite-powered development with optimized production builds
- **Progressive Enhancement**: Graceful degradation for better accessibility
- **Internationalization**: Multi-language support (Chinese, English, Japanese)
- **SEO Optimized**: Semantic HTML structure and meta tag optimization

### 📧 Contact Features

- **Smart Email Integration**: One-click email composition with pre-filled content
- **Social Media Links**: Direct links to professional social platforms
- **Contact Form**: Interactive contact form with validation

### 🤖 AI Chat Assistant

- **OpenAI GPT Integration**: Intelligent conversational AI assistant
- **Streaming Responses**: Real-time response streaming for better UX
- **Usage Limits**: Built-in rate limiting and session management
- **Security Features**: API key protection and input validation

## 🛠️ Tech Stack

### Frontend Framework

- **React 18** - Latest React with Concurrent Features
- **TypeScript** - Type-safe development experience
- **Vite** - Next-generation frontend tooling

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful & consistent icon library

### 3D Graphics

- **Three.js** - Cross-browser 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

### AI Integration

- **LangChain.js** - Framework for developing AI applications
- **OpenAI GPT** - Advanced language model integration

### Internationalization

- **react-i18next** - Internationalization framework
- **i18next** - Internationalization ecosystem

### Development Tools

- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Modern browser with WebGL support
- OpenAI API key (optional, for chatbot functionality)

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/resume-portfolio-optimized.git
   cd resume-portfolio-optimized
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Environment configuration**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your configuration:

   ```env
   # OpenAI API Key (optional)
   VITE_OPENAI_API_KEY=your_openai_api_key_here

   # Email configuration
   VITE_EMAIL_ADDRESS=your.email@example.com

   # Analytics (optional)
   VITE_GA_TRACKING_ID=your_google_analytics_id
   ```

4. **Start development server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

5. **Build for production**

   ```bash
   yarn build
   # or
   npm run build
   ```

6. **Preview production build**
   ```bash
   yarn preview
   # or
   npm run preview
   ```

## 🤖 ChatBot Features

### Core Functionality

- **Intelligent Conversations**: Powered by OpenAI GPT models
- **Streaming Responses**: Real-time response generation
- **Context Awareness**: Maintains conversation context
- **Multi-language Support**: Responds in user's preferred language

### Security & Limits

- **Rate Limiting**: Prevents API abuse with configurable limits
- **Session Management**: Automatic session timeout and cleanup
- **Input Validation**: Sanitizes user input for security
- **Error Handling**: Graceful error handling with user-friendly messages

### Usage Limits

- **Message Limit**: 10 messages per session (configurable)
- **Rate Limit**: 3-second cooldown between requests
- **Session Duration**: 30-minute maximum session length
- **API Protection**: Secure API key handling

## ⚡ Performance Optimization

### Code Splitting

- **React.lazy + Suspense**: Dynamic component loading
- **Route-based splitting**: Optimized bundle sizes
- **Component-level splitting**: Granular loading control

### Bundle Analysis

- **Bundle Analyzer**: `yarn analyze` for bundle size analysis
- **Tree Shaking**: Automatic dead code elimination
- **Asset Optimization**: Optimized images and fonts

### Rendering Optimization

- **React.memo**: Prevents unnecessary re-renders
- **useMemo & useCallback**: Optimized hook usage
- **3D Rendering Optimization**: Efficient Three.js rendering
- **Lazy Loading**: Progressive content loading

### Performance Metrics

- **Lighthouse Score**: 95+ performance score
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **FPS**: Smooth 60fps animations

### Further Optimization Suggestions

- **Image Optimization**: Use WebP format and responsive images
- **Caching Strategy**: Implement service worker for offline support
- **Performance Monitoring**: Add real-time performance tracking

## 🛠️ Development Guide

### Recommended IDE Setup

- **VS Code** with extensions:
  ```
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - Prettier - Code formatter
  - ESLint
  ```

### Code Standards

```bash
# Run code linting
yarn lint

# Auto-fix code formatting
yarn lint:fix

# Type checking
yarn type-check
```

### Git Hooks

```bash
# Pre-commit hooks automatically run lint and format
# Configured with husky and lint-staged
```

### Testing

```bash
# Run unit tests
yarn test

# Run test coverage
yarn test:coverage

# Run E2E tests
yarn test:e2e
```

### Performance Analysis

```bash
# Analyze bundle size
yarn analyze

# Performance audit
yarn audit

# Security audit
yarn audit:security
```

## 🎨 Customization Guide

### Content Customization

1. **Personal Information**

   ```typescript
   // src/constants/index.ts
   export const HERO_CONTENT = {
     greeting: 'Hello, I am',
     name: 'Your Name',
     title: 'Your Title',
     description: 'Your Description',
   }
   ```

2. **Project Data**

   ```typescript
   // src/components/sections/ProjectsSection.tsx
   const projects = [
     {
       title: 'Project Name',
       description: 'Project Description',
       technologies: ['React', 'TypeScript'],
       github: 'https://github.com/username/repo',
       demo: 'https://demo-url.com',
     },
   ]
   ```

3. **Skills Configuration**
   ```typescript
   // src/constants/index.ts
   export const SKILLS_DATA = {
     frontend: ['React', 'TypeScript', 'Tailwind CSS'],
     backend: ['Node.js', 'Python', 'PostgreSQL'],
     tools: ['Git', 'Docker', 'AWS'],
   }
   ```

### Style Customization

1. **Theme Colors**

   ```css
   /* src/index.css */
   :root {
     --primary-color: #your-color;
     --secondary-color: #your-color;
     --accent-color: #your-color;
   }
   ```

2. **Animation Configuration**

   ```typescript
   // src/constants/index.ts
   export const ANIMATION_CONFIG = {
     duration: {
       fast: 0.3,
       normal: 0.5,
       slow: 0.8,
     },
   }
   ```

3. **Parallax Effect Adjustment**
   ```typescript
   // src/constants/index.ts
   export const PARALLAX_CONFIG = {
     elements: {
       slow: 0.2,
       normal: 0.5,
       fast: 0.8,
     },
   }
   ```

### Feature Configuration

1. **ChatBot Configuration**

   ```typescript
   // src/components/ChatBot/ChatBot.tsx
   <ChatBot
     maxMessagesPerSession={10}
     rateLimitMs={3000}
     maxSessionDuration={30}
   />
   ```

2. **3D Effect Parameters**
   ```typescript
   // src/constants/index.ts
   export const GLOBE_CONFIG = {
     rotation: { speed: 0.005 },
     material: { roughness: 0.8 },
   }
   ```

## 🔧 Troubleshooting

### Common Issues

1. **ChatBot Not Working**
   - Check if `VITE_OPENAI_API_KEY` is set in environment variables
   - Verify API key validity and quota
   - Check browser console for error messages

2. **3D Model Not Displaying**
   - Ensure browser supports WebGL
   - Check if hardware acceleration is enabled
   - Verify Three.js dependencies are installed

3. **Build Failures**
   - Clear node_modules and reinstall: `rm -rf node_modules && yarn install`
   - Check Node.js version compatibility (18+)
   - Verify all environment variables are set

4. **Performance Issues**
   - Disable 3D effects on low-end devices
   - Reduce animation complexity
   - Check for memory leaks in browser dev tools

### Debugging Tips

1. **Development Tools**

   ```bash
   # Enable verbose logging
   VITE_DEBUG=true yarn dev

   # Performance profiling
   yarn dev --profile
   ```

2. **Logging**
   ```typescript
   // Enable debug mode in development
   const DEBUG = import.meta.env.VITE_DEBUG === 'true'
   if (DEBUG) console.log('Debug info')
   ```

## 📋 Best Practices

### Code Organization

1. **Component Design Principles**
   - Single Responsibility Principle
   - Composition over inheritance
   - Props interface documentation

2. **File Naming Conventions**
   - PascalCase for components: `MyComponent.tsx`
   - camelCase for utilities: `myUtility.ts`
   - kebab-case for assets: `my-image.png`

3. **Import Order**

   ```typescript
   // 1. React and external libraries
   import React from 'react'
   import { motion } from 'framer-motion'

   // 2. Internal components
   import { MyComponent } from './MyComponent'

   // 3. Utilities and constants
   import { CONSTANTS } from '../constants'

   // 4. Types
   import type { MyType } from '../types'
   ```

### Performance Best Practices

1. **Component Optimization**
   - Use React.memo for expensive components
   - Implement proper dependency arrays in hooks
   - Avoid inline object/function creation in render

2. **Lazy Loading**
   - Implement route-based code splitting
   - Use React.lazy for heavy components
   - Progressive image loading

3. **Resource Optimization**
   - Optimize images (WebP, responsive)
   - Minimize bundle size
   - Use CDN for static assets

### Security Best Practices

1. **Environment Variable Management**
   - Never commit secrets to repository
   - Use different keys for development/production
   - Validate environment variables at startup

2. **API Security**
   - Implement proper rate limiting
   - Validate and sanitize user inputs
   - Use HTTPS in production

## 🏗️ Project Architecture

### Layered Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                       │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│  │   React     │ │   Framer    │ │      Three.js           │ │
│  │ Components  │ │   Motion    │ │    (3D Graphics)        │ │
│  └─────────────┘ └─────────────┘ └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                     Business Layer                          │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│  │   Custom    │ │    State    │ │      AI Integration     │ │
│  │   Hooks     │ │ Management  │ │     (LangChain.js)      │ │
│  └─────────────┘ └─────────────┘ └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                      Data Layer                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────┐ │
│  │ Constants & │ │    i18n     │ │       API Services      │ │
│  │    Types    │ │ Resources   │ │      (OpenAI API)       │ │
│  └─────────────┘ └─────────────┘ └─────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Technical Decisions

#### Why These Technologies?

1. **React 18 + TypeScript**
   - ✅ Strong type support reduces runtime errors
   - ✅ Modern React features (Concurrent Features)
   - ✅ Excellent developer experience and ecosystem

2. **Vite Build Tool**
   - ✅ Lightning-fast dev server startup
   - ✅ Native ES module support
   - ✅ Optimized production builds

3. **Tailwind CSS**
   - ✅ Utility-first design philosophy
   - ✅ Highly customizable
   - ✅ Excellent performance (PurgeCSS)

4. **Framer Motion**
   - ✅ Declarative animation API
   - ✅ Excellent performance
   - ✅ Rich animation features

5. **Three.js + React Three Fiber**
   - ✅ Powerful 3D rendering capabilities
   - ✅ React ecosystem integration
   - ✅ Active community support

6. **LangChain.js + OpenAI**
   - ✅ Modern AI application development framework
   - ✅ Streaming response support
   - ✅ Flexible configuration options

### Detailed Directory Structure

```
src/
├── components/                 # Component directory
│   ├── 3d/                    # 3D related components
│   │   ├── GlobeDemo.tsx      # 3D globe component
│   │   └── RealisticGlobe.tsx # Realistic globe model
│   ├── ChatBot/               # AI chat components
│   │   ├── ChatBot.tsx        # Main chat component
│   │   └── index.ts           # Export file
│   ├── sections/              # Page section components
│   │   ├── HeroSection.tsx    # Hero section
│   │   ├── AboutSection.tsx   # About me
│   │   ├── SkillsSection.tsx  # Skills showcase
│   │   ├── ProjectsSection.tsx # Project showcase
│   │   ├── ExperienceSection.tsx # Work experience
│   │   └── ContactSection.tsx # Contact information
│   └── ui/                    # UI components
│       ├── ParallaxContainer.tsx # Parallax container
│       ├── ErrorBoundary.tsx  # Error boundary
│       └── withErrorBoundary.tsx # HOC
├── hooks/                     # Custom hooks
│   ├── useParallax.ts        # Parallax scrolling
│   ├── useAnimation.ts       # Animation effects
│   └── useInView.ts          # View detection
├── constants/                 # Constants configuration
│   └── index.ts              # Global constants
├── i18n/                     # Internationalization
│   ├── index.ts              # i18n configuration
│   └── locales/              # Language files
│       ├── en.json           # English
│       ├── zh.json           # Chinese
│       └── ja.json           # Japanese
├── types/                    # Type definitions
│   └── index.ts              # Global types
├── utils/                    # Utility functions
│   └── index.ts              # Utility methods
├── assets/                   # Static assets
│   ├── models/               # 3D models
│   └── textures/             # Texture maps
├── App.tsx                   # Main app component
├── main.tsx                  # App entry point
└── index.css                 # Global styles
```

### Data Flow

```
User Interaction
       ↓
  React Components
       ↓
   Custom Hooks
       ↓
  State Management
       ↓
   API Services
       ↓
  External APIs
```

## 📸 Project Screenshots

### Desktop View

- **Hero Section**: Immersive 3D globe with parallax effects
- **About Section**: Professional introduction with skill highlights
- **Projects Section**: Interactive project showcase with hover effects
- **Contact Section**: Elegant contact form with social links

### Mobile View

- **Responsive Design**: Optimized for all screen sizes
- **Touch Interactions**: Mobile-friendly gesture support
- **Performance**: Optimized for mobile devices

### AI ChatBot

- **Intelligent Conversations**: Natural language processing
- **Streaming Responses**: Real-time response generation
- **Multi-language Support**: Responds in user's language

_Note: Add actual screenshots to showcase the visual appeal and functionality_

## 🚀 Deployment

### GitHub Pages

```bash
# Build and deploy to GitHub Pages
yarn build
yarn deploy
```

### Vercel

```bash
# Deploy to Vercel
vercel --prod
```

### Netlify

```bash
# Deploy to Netlify
netlify deploy --prod --dir=dist
```

### Docker

```dockerfile
# Multi-stage build for production
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📝 Changelog

### v2.0.0 (Latest)

- ✨ Added AI chatbot integration
- 🎨 Enhanced 3D globe with realistic textures
- 🌍 Implemented multi-language support
- ⚡ Performance optimizations
- 🔒 Enhanced security features

### v1.0.0

- 🎉 Initial release
- 📱 Responsive design implementation
- 🎭 Parallax scrolling effects
- 💼 Portfolio sections

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Yang Jinfei**

- GitHub: [@jimmfly](https://github.com/jimmfly)
- Email: yangjinfei001@gmail.com
- LinkedIn: [Yang Jinfei](https://linkedin.com/in/yangjinfei)

---

⭐ If you found this project helpful, please give it a star!

🚀 Built with passion and modern web technologies
