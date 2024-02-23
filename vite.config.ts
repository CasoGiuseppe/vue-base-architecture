import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@ui': fileURLToPath(new URL('./src/app/ui', import.meta.url)),
      '@shared': fileURLToPath(new URL('./src/app/shared', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/app/router', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/assets/global.scss';`,
      },
    },
  },
})
