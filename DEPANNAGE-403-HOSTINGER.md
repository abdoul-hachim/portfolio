# 🚨 Dépannage Erreur 403 Forbidden - Hostinger

## 🔍 Diagnostic de l'erreur 403
L'erreur **"403 Forbidden - Access to this resource on the server is denied!"** peut avoir plusieurs causes sur Hostinger.

## 🛠️ Solutions étape par étape

### **Solution 1 : Simplifier le .htaccess**

1. **Sauvegardez** votre `.htaccess` actuel
2. **Remplacez-le** par le fichier `.htaccess-simple` (version minimaliste)
3. **Testez** votre site

**Commande locale :**
```bash
# Copier la version simplifiée
cp .htaccess-simple .htaccess
```

### **Solution 2 : Vérifier les permissions des fichiers**

Sur Hostinger, les permissions doivent être :
- **Fichiers** : `644` (rw-r--r--)
- **Dossiers** : `755` (rwxr-xr-x)

**Dans File Manager Hostinger :**
1. Sélectionnez tous vos fichiers
2. Clic droit → **Permissions**
3. **Fichiers** : `644`
4. **Dossiers** : `755`

### **Solution 3 : Vérifier la structure des fichiers**

**Structure requise dans `public_html/` :**
```
public_html/
├── index.html          (✅ doit exister et être lisible)
├── .htaccess           (✅ version simplifiée)
└── dist/               (✅ permissions 755)
    ├── assets/         (✅ permissions 755)
    │   ├── *.css       (✅ permissions 644)
    │   └── *.js        (✅ permissions 644)
    └── images/         (✅ permissions 755)
        └── *.jpg/*.png (✅ permissions 644)
```

### **Solution 4 : Test sans .htaccess**

1. **Renommez** temporairement `.htaccess` en `.htaccess-backup`
2. **Testez** si le site charge (sans navigation SPA)
3. Si ça marche → Problème dans `.htaccess`
4. Si ça ne marche pas → Problème de permissions/structure

### **Solution 5 : Vérifier le nom du fichier index**

- Le fichier doit s'appeler **exactement** `index.html` (pas `Index.html` ou autre)
- Il doit être à la **racine** de `public_html/`
- Il doit avoir les **permissions 644**

### **Solution 6 : .htaccess minimaliste de test**

Si rien ne fonctionne, créez un `.htaccess` ultra-simple :

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [QSA,L]
```

## 🔧 Test rapide

1. **Accédez directement** à : `votredomaine.com/index.html`
   - Si ça marche → Problème de réécriture
   - Si ça ne marche pas → Problème de fichier/permissions

2. **Accédez à** : `votredomaine.com/dist/assets/index.css`
   - Si ça marche → Assets OK
   - Si ça ne marche pas → Problème de structure

## 📞 Support Hostinger

Si rien ne fonctionne :
1. Contactez le support Hostinger
2. Mentionnez : "Application React SPA avec .htaccess"
3. Demandez s'il y a des restrictions sur les directives RewriteRule

---
**🎯 Dans 90% des cas, c'est un problème de .htaccess trop complexe ou de permissions incorrectes.** 