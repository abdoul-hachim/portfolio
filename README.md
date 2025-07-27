# 🌟 Portfolio Personnel - MZE Abdoul-Hachim

Portfolio moderne développé avec React et déployé automatiquement sur Hostinger.

## 🚀 Déploiement Automatique

Ce projet est configuré pour le **déploiement automatique sur Hostinger** :

### ✅ Comment ça fonctionne
1. **Push vers Git** → Hostinger détecte automatiquement les changements
2. **Build automatique** → Hostinger exécute `npm run build`
3. **Copie automatique** → `index.html` est copié à la racine
4. **Site en ligne** → Votre portfolio est accessible immédiatement

### 📁 Structure
```
portfolio/
├── index.html          # ✅ Généré automatiquement (Hostinger)
├── dist/               # ✅ Fichiers build (CSS, JS, images)
├── client/             # 📝 Code source React
├── server/             # 🖥️ API Backend (optionnel)
└── .htaccess           # ⚙️ Configuration serveur
```

## 🛠️ Développement Local

```bash
# Installer les dépendances
cd client
npm install

# Démarrer le serveur de développement
npm start

# Construire pour la production
npm run build
```

## 📋 Scripts Disponibles

| Script | Description |
|--------|-------------|
| `npm start` | Serveur de développement |
| `npm run build` | Build + copie index.html pour Hostinger |
| `npm run deploy` | Alias pour build |

## 🌐 Hostinger - Configuration

### Déploiement Automatique
- ✅ **Activé** : Push Git → Déploiement automatique
- ✅ **Build** : `npm run build` 
- ✅ **Index** : Copié automatiquement à la racine
- ✅ **Assets** : Servis depuis `dist/` via `.htaccess`

### Avantages
- 🔄 **Automatique** : Aucune action manuelle requise
- 🎯 **Simple** : Un seul `git push` suffit
- 🚀 **Rapide** : Build et déploiement optimisés
- 📱 **Responsive** : Portfolio adapté à tous les écrans

## ⚠️ Important

- **Ne jamais committer** `index.html` à la racine (généré automatiquement)
- **Toujours développer** dans le dossier `client/`
- **Les changements** se déploient automatiquement après push

## 🎨 Technologies

- **Frontend** : React + Vite + Tailwind CSS
- **Backend** : Node.js + Express (optionnel)
- **Déploiement** : Hostinger avec Git auto-deploy
- **Optimisation** : Build automatique avec minification

---

✨ **Portfolio optimisé pour Hostinger - Déploiement automatique activé !**
