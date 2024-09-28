import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: 'REACT_APP_',
  server: {
    proxy: {
      '/api': 'https://multistore-ecommerce-app.vercel.app'
    }
  }
})
