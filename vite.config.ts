import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config();

const port: number = parseInt(process.env.CLIENT_PORT) || 3002;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: port,
    proxy: {
      '/api': `http://server:${process.env.SERVER_PORT}`, // have to use the container name
    }
  }
})
