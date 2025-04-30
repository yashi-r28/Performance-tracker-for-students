import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/chrome-extension/', // Ensures correct path resolution for index.html
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
