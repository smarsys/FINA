# 🏆 Mise à jour - Temps Limites Olympiques JO LA28

## ✅ Modifications apportées

### 1. Fichier modifié : `temps-limites.json`
Ajout de deux nouvelles catégories de compétition :

#### **🥇 JO LA28 - Standard A** (`jo_a_50m`)
Temps de qualification olympiques - Standard d'entrée A (A Entry Standard)
- Bassin 50m uniquement
- Hommes : 14 épreuves
- Femmes : 14 épreuves

#### **🥈 JO LA28 - Standard B** (`jo_b_50m`)
Temps de qualification olympiques - Standard d'entrée B (B Entry Standard = A + 1%)
- Bassin 50m uniquement
- Hommes : 14 épreuves
- Femmes : 14 épreuves

### 2. Fichiers modifiés

#### `index.html`
- Ajout de deux nouvelles options dans le sélecteur de compétition :
  - 🏆 JO LA28 - Standard A (50m)
  - 🏆 JO LA28 - Standard B (50m)

#### `app.js`
- Ajout des noms de compétition pour l'affichage :
  - `'jo_a_50m': '🏆 JO LA28 - Standard A'`
  - `'jo_b_50m': '🏆 JO LA28 - Standard B'`

## 📊 Données intégrées

### Épreuves disponibles

**Nage libre :**
- 50m, 100m, 200m, 400m, 800m, 1500m

**Dos :**
- 50m, 100m, 200m

**Brasse :**
- 50m, 100m, 200m

**Papillon :**
- 50m, 100m, 200m

**4 nages :**
- 200m, 400m

### Nouvelles épreuves olympiques
Les temps incluent les nouvelles épreuves ajoutées pour LA28 :
- ✨ 50m Dos
- ✨ 50m Brasse
- ✨ 50m Papillon

## 🎯 Comment utiliser

1. Ouvrir l'application
2. Cliquer sur l'onglet **"Temps limites"**
3. Sélectionner :
   - Catégorie (Homme/Femme)
   - Nage
   - Distance
   - Compétition : **JO LA28 - Standard A** ou **JO LA28 - Standard B**
4. Cliquer sur **"Afficher les temps"**
5. L'application affiche :
   - Le temps limite olympique
   - Les points FINA correspondants

## 📝 Exemple de résultat

**Exemple :**
- Catégorie : Femme
- Nage : Libre
- Distance : 100m
- Compétition : JO LA28 - Standard A

**Résultat :**
```
🏆 JO LA28 - Standard A
00:53.60 (942 pts)
```

## 🔍 Différence entre Standard A et B

- **Standard A** : Temps de qualification le plus exigeant
- **Standard B** : Standard A + 1% (légèrement plus permissif)

Les nageurs qualifiés avec le Standard A ont la priorité. Le Standard B permet d'élargir les possibilités de qualification.

## 📦 Installation de la mise à jour

### Option 1 : Déploiement local
1. Décompressez `FINA-dev-updated.zip`
2. Remplacez tous les fichiers de votre installation actuelle
3. Vérifiez que le fichier `temps-limites.json` contient bien les nouvelles entrées `jo_a_50m` et `jo_b_50m`
4. Testez l'application en ouvrant `index.html` dans un navigateur

### Option 2 : Déploiement sur Jelastic (voir DEPLOY.md)
Suivez les instructions du fichier `DEPLOY.md` pour déployer sur votre serveur Jelastic.

## ✅ Checklist de vérification

Avant de déployer en production, vérifiez :

- [ ] Le fichier `temps-limites.json` se charge correctement
- [ ] Les deux nouvelles options apparaissent dans le sélecteur
- [ ] Les temps JO A s'affichent correctement
- [ ] Les temps JO B s'affichent correctement
- [ ] Les points FINA sont calculés pour les temps olympiques
- [ ] L'application fonctionne toujours pour les autres compétitions (Championnats Suisses, RSR)

## 📁 Fichiers modifiés

```
FINA-dev-updated/
├── temps-limites.json     ← Ajout des temps JO A et JO B
├── index.html             ← Ajout des options dans le select
├── app.js                 ← Ajout des noms de compétition
└── (autres fichiers inchangés)
```

## 🔄 Comparaison des temps

Vous pouvez maintenant comparer facilement :
- Les temps de votre fille avec les standards olympiques
- La différence entre Standard A et Standard B
- Les points FINA correspondants à chaque standard

## 💡 Utilisation pour le suivi

**Pour suivre la progression de votre fille :**

1. Notez son temps actuel (par exemple 100m libre : 00:55.20)
2. Consultez le Standard B JO : 00:54.14
3. Calculez l'écart : 1.06 secondes à gagner
4. Consultez le Standard A JO : 00:53.60
5. Calculez l'écart : 1.60 secondes à gagner

L'application affiche aussi les points FINA pour une perspective supplémentaire !

## 📱 Compatibilité

Cette mise à jour est compatible avec :
- ✅ Installation en tant que PWA (Progressive Web App)
- ✅ iPhone / iPad
- ✅ Android
- ✅ Navigateurs desktop

## 🆘 Support

Si vous rencontrez des problèmes :
1. Vérifiez que tous les fichiers ont été correctement remplacés
2. Videz le cache de votre navigateur (Ctrl+Shift+R ou Cmd+Shift+R)
3. Vérifiez la console du navigateur pour d'éventuelles erreurs
4. Si l'application est installée comme PWA, désinstallez et réinstallez-la

## 📅 Version

**Version :** v14.3 - Ajout temps olympiques JO LA28
**Date :** 11 décembre 2024
**Fichiers modifiés :** 3 fichiers (temps-limites.json, index.html, app.js)

---

Bonne utilisation et bonne chance pour les qualifications olympiques ! 🏊‍♀️🏆
