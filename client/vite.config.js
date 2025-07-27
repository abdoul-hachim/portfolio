import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

// Plugin personnalisé pour copier index.html vers la racine
const copyIndexToRoot = () => {
  return {
    name: 'copy-index-to-root',
    writeBundle() {
      try {
        const distIndexPath = resolve(__dirname, '../dist/index.html')
        const rootIndexPath = resolve(__dirname, '../index.html')
        copyFileSync(distIndexPath, rootIndexPath)
        console.log('✅ index.html copié vers la racine pour Hostinger')
      } catch (error) {
        console.error('❌ Erreur lors de la copie:', error.message)
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyIndexToRoot()],
  publicDir: 'public',
  base: '/',
  build: {
    outDir: resolve(__dirname, '../dist'),
    emptyOutDir: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
})
