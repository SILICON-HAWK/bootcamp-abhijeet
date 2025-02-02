import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    target: 'esnext',
  },
  server: {
    open: true,
  },
});
