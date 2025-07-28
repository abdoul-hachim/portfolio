# 🔄 Dépannage - Cache & MIME Type (main.jsx)

## 🚨 Problème actuel
```
main.jsx:1 Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html"
```

**Cause :** Le navigateur charge encore l'ancien fichier `main.jsx` (développement) au lieu du fichier compilé.

## 🎯 Solutions prioritaires

### **Solution 1 : Cache navigateur** ⭐ **PLUS PROBABLE**

**Actions immédiates :**
1. **Ctrl + F5** (ou Cmd + Shift + R sur Mac) pour forcer le rechargement
2. **Ouvrir les outils développeur** (F12)
3. **Onglet Network** → cocher **"Disable cache"**
4. **Rafraîchir** la page
5. **Mode incognito** pour tester sans cache

### **Solution 2 : Vérification des fichiers uploadés**

**Sur Hostinger File Manager :**
1. **Vérifiez** que `index.html` (racine) contient :
   ```html
   <script type="module" crossorigin src="dist/assets/index.222cb8bc.js?v=1.0"></script>
   ```
   **ET NON PAS :**
   ```html
   <script type="module" src="/src/main.jsx"></script>
   ```

2. **Supprimez** tout fichier `index.html` dans le dossier `dist/` (gardez seulement celui à la racine)

### **Solution 3 : Test direct des fichiers**

**Testez ces URLs directement :**
- `votredomaine.com/index.html` → Doit afficher votre portfolio
- `votredomaine.com/dist/assets/index.222cb8bc.js` → Doit télécharger le JS
- `votredomaine.com/dist/assets/index.17776b04.css` → Doit télécharger le CSS

**Si un fichier retourne 404 :** Le problème est dans la structure des dossiers.

### **Solution 4 : .htaccess de test**

**Remplacez temporairement** votre `.htaccess` par `.htaccess-test` (version ultra-simple) :
- Pas de cache
- Redirections basiques uniquement

### **Solution 5 : Cache serveur Hostinger**

**Dans cPanel Hostinger :**
1. **Recherchez** "Cache" ou "Optimisation"
2. **Videz le cache** du serveur
3. **Désactivez** temporairement la mise en cache

## 🔍 Diagnostic étape par étape

### **Étape 1 : Identifier la source**
1. **F12** → Onglet **Network**
2. **Rafraîchir** la page
3. **Regardez** quelle URL est appelée pour le JS :
   - ✅ `dist/assets/index.222cb8bc.js` → Bon fichier
   - ❌ `src/main.jsx` → Mauvais fichier (cache)

### **Étape 2 : Forcer le bon fichier**
1. **Accédez directement** à : `votredomaine.com/dist/assets/index.222cb8bc.js`
2. **Si ça marche** → Problème de cache/redirection
3. **Si ça ne marche pas** → Problème de structure

### **Étape 3 : Test sans .htaccess**
1. **Renommez** `.htaccess` en `.htaccess-backup`
2. **Testez** : `votredomaine.com/index.html`
3. **Si ça marche** → Problème dans `.htaccess`

## ⚡ Actions rapides (dans l'ordre)

1. **Cache navigateur** - Ctrl+F5 + mode incognito
2. **Vérifier index.html** sur serveur (bons liens vers dist/)
3. **Supprimer cache Hostinger** (cPanel)
4. **Test .htaccess-test** (version simplifiée)
5. **Vérifier structure** des dossiers

---
**🎯 Dans 80% des cas, c'est un problème de cache navigateur !** 