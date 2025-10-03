// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CarmelsWebSite/',  // 👈 important: must match repo name exactly
})
