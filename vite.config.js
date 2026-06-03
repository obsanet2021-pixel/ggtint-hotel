import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // IMPORTANT: set the base to the repository name when publishing to GitHub Pages
  base: '/ggtint-hotel/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
