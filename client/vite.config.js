import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, readFileSync, writeFileSync } from 'fs'

// Plugin personnalisé pour copier et corriger index.html vers la racine
const copyIndexToRoot = () => {
  return {
    name: 'copy-index-to-root',
    writeBundle() {
      try {
        const distIndexPath = resolve(__dirname, '../dist/index.html')
        const rootIndexPath = resolve(__dirname, '../index.html')
        
        // Lire le contenu du fichier dist/index.html
        let content = readFileSync(distIndexPath, 'utf-8')
        
        // Corriger les chemins pour pointer vers dist/ (chemins relatifs pour Hostinger)
        content = content.replace(/href="\.\//g, 'href="dist/')
        content = content.replace(/src="\.\//g, 'src="dist/')
        content = content.replace(/href="\/assets\//g, 'href="dist/assets/')
        content = content.replace(/src="\/assets\//g, 'src="dist/assets/')
        content = content.replace(/href="\/images\//g, 'href="dist/images/')
        content = content.replace(/src="\/images\//g, 'src="dist/images/')
        
        // S'assurer que les scripts sont dans le body, pas dans le head
        content = content.replace(
          /(<head>[\s\S]*?)(<script[^>]*>[\s\S]*?<\/script>)([\s\S]*?<\/head>)([\s\S]*?)(<div id="root"><\/div>)/,
          '$1$3$4$5\n    $2'
        )
        
        // Retirer type="module" pour la compatibilité hébergeur
        content = content.replace(/type="module"\s*/g, '')
        
        // Ajouter des paramètres de cache-busting
        content = content.replace(/\.js"/g, '.js?v=1.0"')
        content = content.replace(/\.css"/g, '.css?v=1.0"')
        
        // Écrire le fichier corrigé à la racine
        writeFileSync(rootIndexPath, content)
        console.log('✅ index.html copié et corrigé vers la racine pour Hostinger')
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
  base: './',
  build: {
    outDir: resolve(__dirname, '../dist'),
    emptyOutDir: true,
    minify: 'terser',
    target: 'es2015', // Support des navigateurs plus anciens
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        format: 'iife', // Format IIFE au lieu de modules ES6
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM'
        }
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
