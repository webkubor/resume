import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/resume/",
  // publicDir: '/resume/',
  base: process.env.NODE_ENV === "development" ? "/" : "./",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  plugins: [vue()],
})
