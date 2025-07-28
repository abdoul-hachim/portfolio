# 🚀 Guide de Déploiement Hostinger - Portfolio React

## 📋 Pré-requis
- Compte Hostinger actif
- Accès cPanel ou File Manager
- Fichiers du projet buildés

## 🔧 Étapes de Déploiement

### 1. Préparation locale
```bash
# Builder le projet
npm run build

# Vérifier que le dossier dist/ contient tous les fichiers
```

### 2. Fichiers à uploader sur Hostinger

**📁 Structure à uploader dans public_html/ :**
```
public_html/
├── index.html              (fichier principal)
├── .htaccess              (redirections et config)
├── dist/                  (dossier complet)
│   ├── assets/
│   │   ├── index.css
│   │   └── index.js
│   ├── images/
│   ├── CV.pdf
│   └── index.html
```

### 3. Upload via File Manager Hostinger

1. **Connexion cPanel**
   - Connectez-vous à votre compte Hostinger
   - Accédez au File Manager

2. **Navigation**
   - Allez dans le dossier `public_html/`
   - Supprimez les fichiers existants si nécessaire

3. **Upload des fichiers**
   - Uploadez le fichier `index.html` (racine)
   - Uploadez le fichier `.htaccess`
   - Uploadez le dossier `dist/` complet avec tous ses sous-dossiers

### 4. Configuration .htaccess (déjà inclus)
Le fichier `.htaccess` est configuré pour :
- ✅ Redirections SPA (Single Page Application)
- ✅ Gestion des assets statiques
- ✅ Compression GZIP
- ✅ Mise en cache optimisée
- ✅ Sécurité renforcée

### 5. Vérification du déploiement

Après upload, vérifiez :
- [ ] Site accessible sur votre domaine
- [ ] Navigation entre pages fonctionne
- [ ] Images et assets se chargent
- [ ] PDF (CV) téléchargeable
- [ ] Design responsive sur mobile

### 6. Commandes utiles

```bash
# Build production
npm run build:production

# Build simple
npm run build

# Démarrage local
npm start
```

### 🔧 Résolution de problèmes

**Problème : Pages ne se chargent pas**
- Vérifiez que le fichier `.htaccess` est présent
- Vérifiez les permissions des fichiers (644 pour les fichiers, 755 pour les dossiers)

**Problème : Assets ne se chargent pas**
- Vérifiez que le dossier `dist/` est complet
- Vérifiez les chemins dans `.htaccess`

**Problème : Erreur 404**
- Vérifiez la configuration des redirections dans `.htaccess`
- Assurez-vous que `index.html` est à la racine

### 📞 Support
En cas de problème, contactez le support Hostinger ou vérifiez les logs d'erreur dans cPanel.

---
**✅ Votre portfolio React est maintenant prêt pour le déploiement sur Hostinger !** 