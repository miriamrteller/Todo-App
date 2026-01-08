import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom', // 'jsdom' only stackblitz env needs happy-dom
    globals: true,
    setupFiles: './src/setupTests.ts',
    css: true,
  },
})
