import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vueTsx from '@vitejs/plugin-vue-jsx'
import { join } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vueTsx(),
  ],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
      com: join(__dirname, 'src/components'),
      styl: join(__dirname, 'src/styl'),
      view: join(__dirname, 'src/styl'),
    },
  },
})
