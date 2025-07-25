import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readFileSync, writeFileSync } from 'fs'

// Plugin personnalisé pour copier l'index.html de la racine
const copyRootIndexPlugin = () => {
  return {
    name: 'copy-root-index',
    writeBundle(options, bundle) {
      // Trouve les fichiers JS et CSS générés
      const jsFile = Object.keys(bundle).find(file => file.endsWith('.js') && file.startsWith('assets/index.'))
      const cssFile = Object.keys(bundle).find(file => file.endsWith('.css') && file.startsWith('assets/index.'))
      
      // Lit l'index.html de la racine et remplace les chemins
      let indexContent = readFileSync(resolve(__dirname, '../index.html'), 'utf-8')
      
      // Remplace le script src par le fichier JS généré
      if (jsFile) {
        indexContent = indexContent.replace(
          '<script type="module" src="./client/src/main.jsx"></script>',
          `<script type="module" crossorigin src="/${jsFile}"></script>`
        )
      }
      
      // Ajoute le CSS généré dans le head
      if (cssFile) {
        indexContent = indexContent.replace(
          '</head>',
          `    <link rel="stylesheet" href="/${cssFile}">\n  </head>`
        )
      }
      
      // Écrit le fichier final
      writeFileSync(resolve(__dirname, '../dist/index.html'), indexContent)
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyRootIndexPlugin()],
  build: {
    outDir: resolve(__dirname, '../dist'),
    emptyOutDir: true,
    // Configuration pour l'hébergement
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
})
