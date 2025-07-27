const fs = require('fs');
const path = require('path');

// Chemins
const distIndexPath = path.join(__dirname, '..', 'dist', 'index.html');
const rootIndexPath = path.join(__dirname, '..', 'index.html');

try {
  // Vérifier que le fichier dist/index.html existe
  if (!fs.existsSync(distIndexPath)) {
    console.error('❌ Le fichier dist/index.html n\'existe pas. Le build a-t-il réussi ?');
    process.exit(1);
  }

  // Copier index.html vers la racine
  fs.copyFileSync(distIndexPath, rootIndexPath);
  console.log('✅ index.html copié vers la racine pour Hostinger');

} catch (error) {
  console.error('❌ Erreur lors de la copie de index.html:', error.message);
  process.exit(1);
} 