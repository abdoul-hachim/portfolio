import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync, readFileSync, writeFileSync } from 'fs'

// Plugin personnalisé pour mettre à jour index.html à la racine avec les assets buildés
const updateRootIndex = () => {
  return {
    name: 'update-root-index',
    writeBundle(options, bundle) {
      try {
        const rootIndexPath = resolve(__dirname, '../index.html')
        
        // Trouver les fichiers JS et CSS générés
        let jsFile = '';
        let cssFile = '';
        
        for (const fileName of Object.keys(bundle)) {
          if (fileName.endsWith('.js') && (fileName.includes('main') || fileName.includes('index'))) {
            jsFile = fileName;
          }
          if (fileName.endsWith('.css')) {
            cssFile = fileName;
          }
        }
        
        // Lire le fichier index.html existant à la racine
        let content = readFileSync(rootIndexPath, 'utf-8')
        
        // Remplacer le script de développement par le script de production
        content = content.replace(
          /<script src="client\/src\/main\.jsx"><\/script>/,
          `<script src="dist/assets/${jsFile}"></script>`
        )
        
        // Supprimer les scripts vides s'il y en a
        content = content.replace(/<script src="dist\/assets\/"><\/script>\s*/g, '')
        
        // Ajouter le CSS s'il existe
        if (cssFile) {
          content = content.replace(
            /<\/head>/,
            `    <link rel="stylesheet" href="dist/assets/${cssFile}">\n  </head>`
          )
        }
        
        // Écrire le fichier mis à jour
        writeFileSync(rootIndexPath, content)
        console.log('✅ index.html à la racine mis à jour avec les assets buildés')
      } catch (error) {
        console.error('❌ Erreur lors de la mise à jour:', error.message)
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), updateRootIndex()],
  publicDir: 'public',
  base: './',
  build: {
    outDir: resolve(__dirname, '../dist'),
    emptyOutDir: true,
    minify: 'terser',
    target: 'es2015', // Support des navigateurs plus anciens
    rollupOptions: {
      input: resolve(__dirname, 'src/main.jsx'), // Point d'entrée direct vers main.jsx
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
