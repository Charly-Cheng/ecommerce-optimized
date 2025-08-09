import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@features': '/src/features',
      '@context': '/src/context',
      '@auth': '/src/auth',
      '@styles': '/src/styles',
      '@utils': '/src/utils',
      '@store': '/src/store'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-redux': ['@reduxjs/toolkit', 'react-redux'],
          'components-main': [
            './src/components/MainHome.jsx',
            './src/components/MainProductos.jsx',
            './src/components/MainCarritos.jsx',
            './src/components/MainAdmin.jsx'
          ],
          'components-ui': [
            './src/components/Header.jsx',
            './src/components/Nav.jsx',
            './src/components/Footer.jsx',
            './src/components/Gallery.jsx'
          ]
        }
      }
    }
  }
})