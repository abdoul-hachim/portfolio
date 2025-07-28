# 🚀 Guide de Déploiement Hostinger - Portfolio React

## 📋 Pré-requis
- Compte Hostinger actif
- Accès cPanel ou File Manager
- Fichiers du projet buildés

## ⚠️ IMPORTANT - Structure des fichiers
**Un seul fichier `index.html` doit être uploadé : celui à la racine du projet !**

Le build génère automatiquement :
- `index.html` à la racine → **C'est le seul à uploader**
- `dist/index.html` → Ne pas uploader (fichier interne)

## 🔧 Étapes de Déploiement

### 1. Préparation locale
```bash
# Builder le projet
npm run build

# Vérifier les fichiers générés
# ✅ index.html (racine) - liens vers /dist/assets/
# ✅ dist/ (dossier complet)
```

### 2. Fichiers à uploader sur Hostinger

**📁 Structure finale à uploader dans public_html/ :**
```
public_html/
├── index.html              (UNIQUEMENT celui de la racine)
├── .htaccess              (redirections et config)
└── dist/                  (dossier complet)
    ├── assets/
    │   ├── index.css    (Styles optimisés)
    │   └── index.js     (Code React compilé)
    ├── images/       (Toutes vos images)
    ├── CV.pdf        (Votre CV)
    └── vite.svg      (Icône Vite)
```

### 3. Upload via File Manager Hostinger

1. **Connexion cPanel**
   - Connectez-vous à votre compte Hostinger
   - Accédez au File Manager

2. **Navigation**
   - Allez dans le dossier `public_html/`
   - Supprimez les anciens fichiers si nécessaire

3. **Upload des fichiers** ⚠️ **ATTENTION**
   - Uploadez **UNIQUEMENT** le fichier `index.html` de la racine du projet
   - Uploadez le fichier `.htaccess`
   - Uploadez le dossier `dist/` complet avec tous ses sous-dossiers
   - **NE PAS** uploader le `dist/index.html` séparément !

### 4. Configuration .htaccess (déjà inclus)
Le fichier `.htaccess` est configuré pour :
- ✅ Redirections SPA (Single Page Application)
- ✅ Gestion des assets statiques depuis `/dist/`
- ✅ Compression GZIP
- ✅ Mise en cache optimisée
- ✅ Sécurité renforcée

### 5. Vérification du déploiement

Après upload, vérifiez :
- [ ] Site accessible sur votre domaine
- [ ] Navigation entre pages fonctionne
- [ ] Images et assets se chargent depuis `/dist/`
- [ ] PDF (CV) téléchargeable
- [ ] Design responsive sur mobile

### 6. Commandes utiles

```bash
# Build production (génère index.html corrigé à la racine)
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
- Vérifiez que l'`index.html` de la racine pointe vers `/dist/assets/`

**Problème : Erreur 404**
- Vérifiez la configuration des redirections dans `.htaccess`
- Assurez-vous qu'UN SEUL `index.html` est à la racine de `public_html/`

### 📞 Support
En cas de problème, contactez le support Hostinger ou vérifiez les logs d'erreur dans cPanel.

---
**✅ Votre portfolio React est maintenant prêt pour le déploiement sur Hostinger !** 