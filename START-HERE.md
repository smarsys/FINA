# 🚀 DÉMARRAGE RAPIDE - Calculateur FINA v14.3

## 📦 Contenu du ZIP

Vous avez téléchargé l'application complète Calculateur FINA pour Lausanne Aquatique.

**Version :** v14.3-production
**Date :** 24 novembre 2024
**Statut :** ✅ PRÊT POUR PRODUCTION

## 📁 Fichiers inclus

### Fichiers de l'application (à déployer)
- `index.html` - Interface principale
- `app.js` - Logique JavaScript
- `fina-times.json` - Temps de base FINA
- `temps-limites.json` - **228 temps limites officiels** ⭐
- `manifest.json` - Configuration PWA
- `service-worker.js` - Cache et mode offline
- `logo-lausanne-aquatique.png/svg` - Logo
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` - Icônes PWA

### Documentation (pour référence)
- `READY-FOR-PRODUCTION.md` - **⭐ À LIRE EN PREMIER**
- `DEPLOY.md` - Guide de déploiement Jelastic
- `FEATURE-TEMPS-LIMITES.md` - Description fonctionnalité
- `README.md` - Vue d'ensemble
- Et 13 autres fichiers de documentation

## 🎯 3 ÉTAPES POUR DÉPLOYER

### Étape 1 : Tester localement (5 min)

```bash
# Extraire le ZIP
unzip FINA-v14.3-production.zip

# Ouvrir dans le navigateur
cd FINA-updated
open index.html  # ou double-cliquer sur index.html
```

**Tests à faire :**
1. Cliquer sur l'onglet "Temps limites"
2. Sélectionner "Championnat Suisse 25m"
3. Homme, Nage libre, 100m
4. Cliquer "Afficher les temps"
5. ✅ Vérifier l'affichage : `00:53.44 (707 pts)`

### Étape 2 : Créer un ZIP pour Jelastic (2 min)

```bash
cd FINA-updated

# Créer le ZIP de déploiement (sans la doc et .git)
zip -r deploy.zip \
  index.html \
  app.js \
  fina-times.json \
  temps-limites.json \
  manifest.json \
  service-worker.js \
  logo-lausanne-aquatique.png \
  logo-lausanne-aquatique.svg \
  icon-192.png \
  icon-512.png \
  apple-touch-icon.png
```

**OU** si vous voulez tout inclure (avec la documentation) :
```bash
cd FINA-updated
zip -r deploy.zip . -x "*.git*" "*.DS_Store"
```

### Étape 3 : Déployer sur Jelastic (5 min)

1. Aller sur https://app.jelastic.infomaniak.com
2. Cliquer sur **Deployment Manager**
3. Cliquer sur **Upload**
4. Sélectionner `deploy.zip`
5. Cliquer sur **Deploy** → Sélectionner votre environnement
6. Context : `/` (racine)
7. Cliquer sur **Deploy**
8. ✅ Attendre la fin du déploiement

### Vérification en production

1. Ouvrir l'URL de votre application
2. Tester l'onglet "Temps limites"
3. Vérifier sur mobile (iOS/Android)
4. Installer en PWA depuis le mobile
5. Tester le mode offline

## 🏊 Fonctionnalités de l'application

### Onglet 1 : Points → Temps
Calculer le temps minimum requis pour obtenir X points FINA

**Exemple :**
- Je veux : 750 points
- En : 100m nage libre homme, bassin 50m
- Résultat : `00:49.10`

### Onglet 2 : Temps → Points
Calculer les points FINA obtenus pour un temps donné

**Exemple :**
- Mon temps : `00:52.00`
- En : 100m nage libre homme, bassin 50m
- Résultat : `730 pts`

### Onglet 3 : Temps limites ⭐ NOUVEAU
Voir les temps limites de qualification avec les points FINA

**Exemple :**
- Compétition : Championnat Suisse 50m
- Épreuve : 100m nage libre homme
- Résultat : `00:54.88 (691 pts)`

**4 compétitions disponibles :**
1. Championnat Suisse 25m
2. Championnat Suisse 50m
3. RSR 25m
4. RSR 50m

**228 temps limites officiels complets !**

## 📱 Installation PWA

### Sur iPhone
1. Ouvrir l'URL dans Safari
2. Cliquer sur l'icône Partager (↑)
3. "Sur l'écran d'accueil"
4. Ajouter
5. L'icône avec le logo Lausanne Aquatique apparaît

### Sur Android
1. Ouvrir l'URL dans Chrome
2. Menu (⋮)
3. "Ajouter à l'écran d'accueil"
4. Installer
5. L'icône avec le logo Lausanne Aquatique apparaît

## 📊 Données incluses

✅ **Temps de base FINA** - Pour tous les calculs de points
✅ **228 temps limites officiels** - Compétitions suisses
✅ **Homme et Femme** - Toutes les catégories
✅ **5 nages** - Libre, Dos, Brasse, Papillon, 4 Nages
✅ **Toutes les distances** - Selon règles officielles

## 🆘 Besoin d'aide ?

### Documentation disponible

**Pour déployer :**
- Lisez `DEPLOY.md`

**Pour comprendre la fonctionnalité :**
- Lisez `FEATURE-TEMPS-LIMITES.md`
- Lisez `READY-FOR-PRODUCTION.md`

**Pour modifier les temps limites :**
- Lisez `TEMPS-LIMITES-GUIDE.md`

**Pour tester :**
- Lisez `EXEMPLES-TEMPS-TEST.md`

### Structure des fichiers

```
FINA-updated/
├── index.html              ← Interface
├── app.js                  ← Logique
├── fina-times.json         ← Temps de base FINA
├── temps-limites.json      ← 228 temps limites ⭐
├── manifest.json           ← Config PWA
├── service-worker.js       ← Cache
├── logo-lausanne-aquatique.*
├── icon-*.png
└── *.md                    ← Documentation
```

## ✅ Checklist de déploiement

Avant de déployer en production :

- [ ] Testé localement
- [ ] Vérifié les 4 compétitions
- [ ] Vérifié calcul des points
- [ ] Créé le ZIP de déploiement
- [ ] Déployé sur Jelastic
- [ ] Testé l'URL en production
- [ ] Testé sur iPhone
- [ ] Testé sur Android
- [ ] Vérifié mode offline
- [ ] Installé en PWA

## 🎉 C'est parti !

Votre application est prête à être déployée.

**Questions ?**
- Consultez la documentation dans le dossier
- Tout est expliqué en détail

**Bon déploiement ! 🚀🏊‍♂️**

---

**Application :** Calculateur FINA - Lausanne Aquatique
**Version :** v14.3-production
**Date :** 24 novembre 2024
**Développement :** Complet ✅
**Documentation :** Complète ✅
**Tests :** À effectuer ✅
**Déploiement :** Prêt ✅
