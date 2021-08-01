/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';// vite.config.js
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

const resolve = (relativePath: string) => {
  return path.resolve(__dirname, relativePath)
}
// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  resolve: {
    alias: [
      {
        find: /^@\//,
        replacement: `${resolve('/src')}/`
      }
    ]
  },
  plugins: [vue(), vueJsx()]
});
