import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 3000,
    proxy: {
      '/api': 'http://server:3001', // have to use the container name
    }
  }
})
