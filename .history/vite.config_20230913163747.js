import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/],
      reactivityTransform: true,
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      vueTemplate: true,
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
    }),
  ],
  server: {
    port: 3000,
  },
});