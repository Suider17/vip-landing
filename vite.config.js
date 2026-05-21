import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/vip-landing/',
  build: {
    outDir: 'docs',
  },
  plugins: [vue()],
})
