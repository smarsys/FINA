# 📱 Installation sur Android avec le logo Lausanne Aquatique

## ✅ Configuration Android

**Bonne nouvelle :** Les icônes créées fonctionnent déjà pour Android !

Les fichiers suivants sont utilisés automatiquement :
- ✅ `icon-192.png` - Logo Lausanne Aquatique 192x192
- ✅ `icon-512.png` - Logo Lausanne Aquatique 512x512
- ✅ `manifest.json` - Configuration PWA avec couleurs LA

## 🚀 Installation sur Android

### Méthode 1 : Via Chrome (recommandé)

1. **Ouvrez l'application dans Chrome**
   - Allez sur votre URL Jelastic

2. **Installez l'application**
   - Chrome affichera automatiquement une bannière "Ajouter à l'écran d'accueil"
   - Tapez sur **"Installer"** ou **"Ajouter"**
   
   **OU**
   
   - Tapez sur le menu (⋮) en haut à droite
   - Sélectionnez **"Ajouter à l'écran d'accueil"** ou **"Installer l'application"**
   - Confirmez

3. **Vérifiez l'icône**
   - Le logo Lausanne Aquatique devrait apparaître sur votre écran d'accueil

### Méthode 2 : Via Firefox

1. **Ouvrez l'application dans Firefox**
2. Tapez sur le menu (⋮)
3. Sélectionnez **"Installer"** ou **"Ajouter à l'écran d'accueil"**
4. Confirmez

### Méthode 3 : Via Samsung Internet

1. **Ouvrez l'application dans Samsung Internet**
2. Tapez sur le menu (≡)
3. Sélectionnez **"Ajouter page à"** > **"Écran d'accueil"**
4. Confirmez

## 🔄 Si l'ancienne icône est toujours là

### Mettre à jour l'icône :

1. **Supprimez l'ancienne app** de l'écran d'accueil
   - Appuyez longuement sur l'icône
   - Tapez "Désinstaller" ou faites-la glisser vers la corbeille

2. **Videz le cache de Chrome**
   - Ouvrez Chrome
   - Menu (⋮) > **Paramètres**
   - **Confidentialité et sécurité** > **Effacer les données de navigation**
   - Cochez "Images et fichiers en cache"
   - Sélectionnez "Toutes les périodes"
   - Tapez **"Effacer les données"**

3. **Fermez Chrome complètement**
   - Applications récentes > Glissez Chrome vers le haut

4. **Réinstallez l'application**
   - Rouvrez Chrome
   - Allez sur votre URL
   - Réinstallez via "Ajouter à l'écran d'accueil"

## 🎨 Apparence sur Android

L'application affichera :
- **Icône** : Logo Lausanne Aquatique (rouge et noir sur fond blanc)
- **Nom** : "FINA LA"
- **Couleur theme** : Rouge Lausanne Aquatique (#E31E24)
- **Splash screen** : Fond rouge avec logo LA (généré automatiquement)

## 📊 Fonctionnalités PWA sur Android

✅ **Installation native** - L'app apparaît comme une vraie application
✅ **Mode plein écran** - Pas de barre d'adresse
✅ **Icône personnalisée** - Logo Lausanne Aquatique
✅ **Mode hors ligne** - Fonctionne sans connexion
✅ **Notifications** - Support des notifications push (si configurées)
✅ **Splash screen** - Écran de démarrage avec branding LA

## ⚠️ Résolution de problèmes

### L'icône n'apparaît pas correctement
- Videz le cache de Chrome
- Désinstallez et réinstallez l'app
- Assurez-vous que la nouvelle version est déployée sur Jelastic

### La bannière d'installation n'apparaît pas
- Vérifiez que vous utilisez HTTPS
- Ouvrez le menu Chrome (⋮) et cherchez "Installer l'application"
- Certains navigateurs nécessitent plusieurs visites avant de proposer l'installation

### L'ancienne version s'affiche toujours
- Version du cache actuelle : `v12-icons`
- Videz le cache et réinstallez
- Attendez quelques minutes (mise à jour en arrière-plan)

## 📋 Checklist Android

- [ ] Déployer la version v12-icons sur Jelastic
- [ ] Ouvrir Chrome sur Android
- [ ] Aller sur l'URL de l'application
- [ ] Installer via "Ajouter à l'écran d'accueil"
- [ ] Vérifier que le logo LA apparaît
- [ ] Tester l'application

## 🔍 Vérification technique

Pour vérifier que tout fonctionne :

1. **Ouvrez Chrome sur Android**
2. **Allez sur votre URL**
3. **Ouvrez DevTools** (via chrome://inspect sur PC)
4. **Application > Manifest** - Vérifiez les icônes
5. **Application > Service Workers** - Vérifiez v12-icons

---

**Version actuelle :** v12-icons
**Navigateurs testés :** Chrome, Firefox, Samsung Internet, Edge
