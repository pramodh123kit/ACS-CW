import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-helmet-async': ['react-helmet-async'],
        },
      },
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
  // Add the CSP meta tag directly
  html: {
    inject: {
      injectData: {
        cspMeta: '<meta http-equiv="Content-Security-Policy" content="default-src \'self\';">',
      },
    },
  },
});
