import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        cssnano({ preset: 'default' }),
      ]
    },
  },
  build: {
  }
})
