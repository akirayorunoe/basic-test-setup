/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // 🔥 Cấu hình môi trường DOM
    globals: true, // Hỗ trợ các hàm test như `describe, test`
    setupFiles: './src/test/setup.ts'
  },
})
