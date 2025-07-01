import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'theme-template/assets',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        'application': resolve(__dirname, 'src/main.js')
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return '[name].liquid';
          }
          return '[name].[ext]';
        }
      }
    },
    cssCodeSplit: false,
    manifest: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});