import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/experiences': {
        target: 'https://connectlogs-production-23c9.up.railway.app',
        changeOrigin: true,
        secure: false
      },
      '/api/users': {
        target: 'https://connectlogs-production-31ac.up.railway.app',
        changeOrigin: true,
        secure: false
      },
      '/api/tags': {
        target: 'https://triumphant-flexibility-production.up.railway.app',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
