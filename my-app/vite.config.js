import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://molik-molik.github.io/KAZ-NDT-SERVICE.git",
})
