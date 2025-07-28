# 🔍 Diagnostic Étape par Étape - Portfolio Hostinger

## 🎯 Plan de diagnostic méthodique

### **Étape 1 : Test HTML basique** ⭐ **COMMENCER ICI**

**Action :** Uploadez et testez `test-simple.html`

**Sur Hostinger :**
1. Uploadez le fichier `test-simple.html` à la racine de `public_html/`
2. Accédez à : `votredomaine.com/test-simple.html`

**Résultats possibles :**
- ✅ **Page colorée s'affiche** → Serveur OK, problème React/JS
- ❌ **Erreur 403/404** → Problème de permissions/structure
- ❌ **Page blanche** → Problème serveur général

---

### **Étape 2 : Test de diagnostic avancé**

**Action :** Uploadez et testez `index-minimal.html`

**Instructions :**
1. Uploadez `index-minimal.html` à la racine
2. Accédez à : `votredomaine.com/index-minimal.html`
3. **Observez les statuts** dans la page

**Cette page va tester :**
- ✅ HTML + CSS → OK
- ❓ JavaScript → Test automatique
- ❓ Accès aux fichiers dist/ → Test fetch automatique

---

### **Étape 3 : Test direct des assets**

**Testez ces URLs directement :**

1. `votredomaine.com/dist/assets/index.222cb8bc.js`
   - ✅ **Fichier se télécharge** → Assets OK
   - ❌ **404** → Structure incorrecte
   - ❌ **403** → Permissions incorrectes

2. `votredomaine.com/dist/assets/index.17776b04.css`
   - ✅ **Fichier se télécharge** → CSS OK
   - ❌ **Erreur** → Problème assets

3. `votredomaine.com/index.html`
   - ✅ **Contenu HTML** → index.html OK
   - ❌ **Erreur** → Problème fichier principal

---

### **Étape 4 : Vérification structure sur Hostinger**

**Dans File Manager Hostinger, vérifiez :**

```
public_html/
├── index.html                    ← Doit exister
├── test-simple.html             ← Test 1
├── index-minimal.html           ← Test 2
├── .htaccess                    ← Configuration
└── dist/                        ← Dossier complet
    ├── assets/
    │   ├── index.222cb8bc.js    ← 361KB
    │   └── index.17776b04.css   ← 33KB
    └── images/
        ├── pp.JPG
        ├── bigProjetLogo.png
        ├── fitmode.png
        └── image1.png
```

---

### **Étape 5 : Diagnostic selon les résultats**

#### **Cas A : test-simple.html fonctionne**
→ **Serveur OK, problème React**
- Tester index-minimal.html
- Vérifier les chemins dans index.html
- Problème probable : assets non trouvés

#### **Cas B : test-simple.html ne fonctionne pas**
→ **Problème serveur/structure**
- Vérifier les permissions (644/755)
- Vérifier le .htaccess
- Contacter support Hostinger

#### **Cas C : Assets 404**
→ **Structure incorrecte**
- Re-upload du dossier dist/
- Vérifier les chemins absolus
- Tester sans .htaccess

#### **Cas D : Assets 403**
→ **Permissions incorrectes**
- Chmod 755 pour dossiers
- Chmod 644 pour fichiers
- Vérifier ownership

---

## 🚀 Actions immédiates (dans l'ordre)

1. **Upload + test** : `test-simple.html`
2. **Upload + test** : `index-minimal.html`
3. **Test direct** : `votredomaine.com/dist/assets/index.222cb8bc.js`
4. **Rapport** : Quels tests passent/échouent

---

**🎯 Commencez par l'étape 1 et rapportez-moi le résultat !** 