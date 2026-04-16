import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './',
  plugins: [],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
           @use "@/styles/variables.scss" as *;
        `,
      },
    },
  },
  build: {
    outDir: 'checkout-ui-custom',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.ts'),
      },
      output: {
        entryFileNames: 'checkout6-custom.js',
        assetFileNames: 'checkout6-custom.[ext]',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
