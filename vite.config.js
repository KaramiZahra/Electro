import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';
import path from 'path';

const currentDir = new URL('.', import.meta.url).pathname;
export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/Electro/',
  resolve: {
    alias: {
      '@': path.resolve(currentDir, './src'),
    },
  },
});
