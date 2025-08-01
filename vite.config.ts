import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Set base path for GitHub Pages deployment
  const base =
    mode === 'production' && process.env.GITHUB_ACTIONS
      ? `/${process.env.VITE_BASE_URL || 'resume'}/`
      : '/'

  return {
    plugins: [react()],
    base,
    build: {
      target: 'esnext',
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            three: ['three', '@react-three/fiber', '@react-three/drei'],
            motion: ['framer-motion'],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    server: {
      port: 5173,
      open: true,
    },
    preview: {
      port: 4173,
      open: true,
    },
  }
})
