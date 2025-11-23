# 🎨 Application FINA avec Branding Lausanne Aquatique

## ✅ Modifications effectuées

### 1. **Logos officiels ajoutés**
- ✅ `logo-lausanne-aquatique.png` - Logo officiel PNG
- ✅ `logo-lausanne-aquatique.svg` - Logo officiel SVG
- ✅ Logo affiché en haut de l'application

### 2. **Couleurs officielles appliquées**
- ✅ **Rouge Lausanne Aquatique** : `#E31E24`
- ✅ **Rouge foncé** (pour dégradés) : `#B01519`
- ✅ Appliqué sur :
  - Fond de page (dégradé)
  - Boutons principaux
  - Zone de résultats
  - Bordures de focus
  - Boutons de mode actif
  - Theme color de la PWA

### 3. **Catégorie "4 nages" ajoutée**
- ✅ Option disponible dans le menu des nages
- ✅ Structure JSON créée pour tous les bassins et catégories
- ⚠️ **Temps à compléter** (actuellement à "00:00.00")

## 📋 Structure des distances 4 nages

**Bassin 25m** :
- Homme : 100m, 200m, 400m
- Femme : 100m, 200m, 400m

**Bassin 50m** :
- Homme : 200m, 400m
- Femme : 200m, 400m

## 🎯 Prochaines étapes

### ⚠️ IMPORTANT : Ajouter les temps de base

Ouvrez le fichier `fina-times.json` et remplacez les `"00:00.00"` par les vrais temps FINA pour le 4 nages.

**Emplacements :**
- Lignes 27-31 : Homme 25m
- Lignes 57-60 : Homme 50m
- Lignes 88-92 : Femme 25m
- Lignes 118-121 : Femme 50m

### Exemple de remplacement :

**Avant :**
```json
"4nages": {
  "100": "00:00.00",
  "200": "00:00.00",
  "400": "00:00.00"
}
```

**Après :**
```json
"4nages": {
  "100": "00:50.26",
  "200": "01:50.34",
  "400": "03:56.30"
}
```

## 🚀 Déploiement sur Jelastic

1. **Créer un ZIP** avec tous les fichiers
2. **Upload sur Jelastic** via Deployment Manager
3. **Deploy vers `/`** (racine)
4. **Tester** l'application

## 📱 Fonctionnalités

- ✅ Calcul bidirectionnel (Temps ↔ Points)
- ✅ Catégories Homme/Femme
- ✅ Bassins 25m et 50m
- ✅ Toutes les nages (Libre, Dos, Brasse, Papillon, 4 Nages)
- ✅ PWA installable
- ✅ Mode offline
- ✅ Branding Lausanne Aquatique

## 🎨 Couleurs officielles

**Rouge principal** : `#E31E24`
**Rouge foncé** : `#B01519`
**Noir** : `#000000`
**Blanc** : `#FFFFFF`

## 📦 Fichiers inclus

```
FINA-updated/
├── index.html                      # Interface avec logo et couleurs LA
├── app.js                          # Logique de calcul
├── fina-times.json                 # Temps de base (4 nages à compléter)
├── manifest.json                   # Config PWA (couleurs LA)
├── service-worker.js               # Cache v3
├── logo-lausanne-aquatique.png     # Logo officiel PNG
├── logo-lausanne-aquatique.svg     # Logo officiel SVG
├── icon-192.png                    # Icône PWA 192x192
├── icon-512.png                    # Icône PWA 512x512
├── README.md                       # Documentation
└── INSTRUCTIONS.md                 # Instructions pour temps 4 nages
```

## 🔄 Version du cache

**Version actuelle** : `v3`

Si vous modifiez `fina-times.json`, pensez à incrémenter la version dans `service-worker.js` :
```javascript
const CACHE_NAME = 'fina-calculator-v4'; // Incrémentez
```

---

**Application prête à être déployée !** 🏊‍♂️🎉
