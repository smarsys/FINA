# 🔧 Guide de dépannage - Options JO LA28 invisibles

## 🎯 Problème

Après le déploiement, les options "🏆 JO LA28 - Standard A" et "🏆 JO LA28 - Standard B" n'apparaissent pas dans le sélecteur de compétition de l'onglet "Temps limites".

## 💡 Cause

Le **Service Worker** de l'application met en cache les fichiers pour permettre le fonctionnement hors ligne. Votre navigateur utilise donc l'ancienne version mise en cache au lieu de charger les nouveaux fichiers.

## ✅ Solution rapide (Recommandée)

### Étape 1 : Redéployer avec le nouveau fichier
Le fichier `service-worker.js` a été mis à jour avec un nouveau nom de cache :
```javascript
const CACHE_NAME = 'fina-calculator-v14.3-jo-la28';
```

**Action :** Redéployez le fichier `service-worker.js` depuis le nouveau ZIP (`FINA-dev-updated-v2.zip`)

### Étape 2 : Vider le cache du navigateur

#### Sur ordinateur (Windows/Mac/Linux)
1. **Méthode rapide :** 
   - Windows/Linux : `Ctrl + Shift + R`
   - Mac : `Cmd + Shift + R`
   
2. **Méthode complète :**
   - Chrome : `Ctrl/Cmd + Shift + Delete` → Cocher "Images et fichiers en cache" → Effacer
   - Firefox : `Ctrl/Cmd + Shift + Delete` → Cocher "Cache" → OK
   - Safari : Menu Safari → Préférences → Avancées → Cocher "Afficher le menu Développement" → Menu Développement → Vider les caches

#### Sur iPhone/iPad
1. Allez dans **Réglages** → **Safari**
2. Faites défiler vers le bas
3. Appuyez sur **Effacer historique et données de site**
4. Confirmez
5. Retournez dans Safari et rechargez l'application

#### Sur Android
1. Ouvrez **Chrome**
2. Appuyez sur les **⋮** (trois points) en haut à droite
3. **Historique** → **Effacer les données de navigation**
4. Période : **Toutes les périodes**
5. Cochez **Images et fichiers en cache**
6. Appuyez sur **Effacer les données**
7. Rechargez l'application

### Étape 3 : Vérifier

Ouvrez l'application et allez dans l'onglet "Temps limites". Le sélecteur devrait maintenant afficher :
- Championnat Suisse 25m
- Championnat Suisse 50m
- RSR 25m
- RSR 50m
- **🏆 JO LA28 - Standard A (50m)** ← NOUVEAU
- **🏆 JO LA28 - Standard B (50m)** ← NOUVEAU

---

## 🔍 Solution alternative : Désinstaller la PWA

Si l'application est installée comme PWA (icône sur l'écran d'accueil) :

### Sur iPhone/iPad
1. Appuyez longuement sur l'icône de l'application
2. Sélectionnez **Supprimer l'app**
3. Ouvrez Safari et accédez à l'URL de l'application
4. Cliquez sur le bouton de partage (carré avec flèche vers le haut)
5. Sélectionnez **Sur l'écran d'accueil**
6. Appuyez sur **Ajouter**

### Sur Android
1. Appuyez longuement sur l'icône de l'application
2. Sélectionnez **Désinstaller** ou **Supprimer**
3. Ouvrez Chrome et accédez à l'URL de l'application
4. Cliquez sur les **⋮** (trois points) en haut à droite
5. Sélectionnez **Installer l'application**

---

## 🛠️ Vérification technique

Si le problème persiste, vérifiez les points suivants :

### 1. Vérifier que les fichiers sont bien déployés

**Fichiers critiques à vérifier :**
- `temps-limites.json` → Doit contenir `jo_a_50m` et `jo_b_50m`
- `index.html` → Doit contenir les options JO dans le select
- `app.js` → Doit contenir les noms de compétition JO
- `service-worker.js` → Doit avoir le nouveau nom de cache

### 2. Ouvrir la console du navigateur

1. Appuyez sur **F12** (ou `Cmd + Option + I` sur Mac)
2. Allez dans l'onglet **Console**
3. Cherchez des erreurs en rouge
4. Si vous voyez une erreur concernant `temps-limites.json`, le fichier n'est pas bien déployé

### 3. Vérifier le contenu de temps-limites.json

Accédez directement au fichier dans votre navigateur :
```
https://votre-domaine.com/temps-limites.json
```

Vérifiez que le JSON contient bien à la fin :
```json
"jo_a_50m": {
  "homme": {
    "libre": {
      "50": "00:21.69",
      ...
```

### 4. Vérifier le Service Worker

1. Ouvrez la console du navigateur (F12)
2. Allez dans l'onglet **Application** (Chrome) ou **Stockage** (Firefox)
3. Cliquez sur **Service Workers** dans le menu de gauche
4. Vérifiez que le service worker est actif
5. Cliquez sur **Unregister** pour désinscrire l'ancien service worker
6. Rechargez la page (F5)

---

## 📋 Checklist de vérification

Avant de contacter le support, vérifiez que vous avez :

- [ ] Redéployé TOUS les fichiers du nouveau ZIP (`FINA-dev-updated-v2.zip`)
- [ ] Vérifié que `service-worker.js` contient `'fina-calculator-v14.3-jo-la28'`
- [ ] Vidé le cache du navigateur (Ctrl+Shift+R ou équivalent)
- [ ] Vérifié que `temps-limites.json` est accessible et contient les données JO
- [ ] Désinstallé et réinstallé la PWA si applicable
- [ ] Testé sur un autre navigateur ou en navigation privée
- [ ] Vérifié qu'il n'y a pas d'erreurs dans la console (F12)

---

## 🧪 Test en navigation privée

Pour tester sans interférence du cache :

1. Ouvrez une **fenêtre de navigation privée** :
   - Chrome/Edge : `Ctrl + Shift + N` (Windows) ou `Cmd + Shift + N` (Mac)
   - Firefox : `Ctrl + Shift + P` (Windows) ou `Cmd + Shift + P` (Mac)
   - Safari : `Cmd + Shift + N`

2. Accédez à l'application dans cette fenêtre
3. Si les options JO apparaissent → Le problème vient du cache
4. Si les options JO n'apparaissent pas → Le problème vient du déploiement

---

## 📞 Fichiers à vérifier en priorité

Si vous devez contacter le support technique ou vérifier vous-même, concentrez-vous sur ces 4 fichiers :

1. **service-worker.js** → Ligne 1 doit contenir le nouveau nom de cache
2. **temps-limites.json** → Doit contenir `jo_a_50m` et `jo_b_50m` à la fin
3. **index.html** → Lignes 342-343 doivent contenir les options JO
4. **app.js** → Lignes 166-167 doivent contenir les noms de compétition JO

---

## ✅ Confirmation du succès

Vous saurez que la mise à jour fonctionne quand :
1. L'onglet "Temps limites" affiche 6 compétitions (au lieu de 4)
2. Vous pouvez sélectionner "🏆 JO LA28 - Standard A (50m)"
3. Le temps s'affiche correctement avec les points FINA
4. Par exemple : Femme, Libre, 100m, JO A → `00:53.60 (942 pts)`

---

**Version du guide :** v1.0  
**Date :** 11 décembre 2024  
**Fichiers concernés :** service-worker.js, temps-limites.json, index.html, app.js
