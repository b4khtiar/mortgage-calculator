import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
    ]
  },
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
