# 🚀 Guide de déploiement

## 📦 Préparation du déploiement

### 1. Vérifier la version

```bash
# Vérifier la branche actuelle
git branch

# Vérifier les derniers commits
git log --oneline -5

# Vérifier les fichiers modifiés
git status
```

### 2. Incrémenter la version du cache

**Fichier :** `service-worker.js`

```javascript
// Incrémenter le numéro de version
const CACHE_NAME = 'fina-calculator-v14-nouvelle-feature';
```

### 3. Mettre à jour la documentation

**Fichiers à mettre à jour :**
- `VERSION-vXX.md` - Créer pour la nouvelle version
- `CHANGELOG.md` - Ajouter les changements
- `README.md` - Si nécessaire

### 4. Tester localement

**Tests obligatoires :**
- [ ] Calcul Temps → Points (toutes nages)
- [ ] Calcul Points → Temps (toutes nages)
- [ ] Bassin 25m et 50m
- [ ] Homme et Femme
- [ ] Mode offline
- [ ] Installation PWA
- [ ] Responsive mobile

**Navigateurs à tester :**
- [ ] Chrome Desktop
- [ ] Safari iOS
- [ ] Chrome Android

## 📤 Déploiement sur Jelastic

### Méthode 1 : Upload ZIP (Recommandé)

```bash
# 1. Créer le ZIP (exclure fichiers Git)
cd /chemin/vers/FINA-updated
zip -r fina-calculator-v14.zip . -x "*.git*" "*.DS_Store" "*node_modules*"

# 2. Vérifier le contenu du ZIP
unzip -l fina-calculator-v14.zip

# 3. Uploader sur Jelastic
# - Aller sur https://app.jelastic.infomaniak.com
# - Deployment Manager → Upload
# - Sélectionner fina-calculator-v14.zip
# - Deploy to... → Sélectionner l'environnement
# - Context: /
# - Cliquer "Deploy"
```

### Méthode 2 : Via Git

```bash
# 1. Pousser sur repository distant
git push origin main

# 2. Dans Jelastic
# - Deployment Manager → Add → Git/SVN
# - URL: https://github.com/lausanne-aquatique/fina-calculator.git
# - Branch: main
# - Deploy

# 3. Pour mettre à jour
# - Cliquer sur "Redeploy" dans Jelastic
```

### Méthode 3 : File Manager Jelastic

```bash
# 1. Dans Jelastic, cliquer sur Config du serveur
# 2. Naviguer vers webroot/ROOT/
# 3. Supprimer les anciens fichiers
# 4. Uploader les nouveaux fichiers
```

## ✅ Vérification post-déploiement

### Tests obligatoires

```bash
# 1. Vérifier l'URL
https://votre-env.jlc.infomaniak.com

# 2. Ouvrir DevTools (F12)

# 3. Vérifier le Service Worker
# Application → Service Workers
# Vérifier que la nouvelle version est active

# 4. Vérifier le cache
# Application → Cache Storage
# Vérifier le nom: fina-calculator-vXX

# 5. Tester en mode offline
# Network → Offline
# Rafraîchir la page
# L'app doit fonctionner

# 6. Vérifier le manifest
# Application → Manifest
# Vérifier les icônes et métadonnées
```

### Tests fonctionnels

- [ ] Calcul fonctionne pour toutes les nages
- [ ] Changement de mode (Points/Temps)
- [ ] Changement de catégorie (Homme/Femme)
- [ ] Changement de bassin (25m/50m)
- [ ] Résultats corrects
- [ ] Pas d'erreurs dans la console
- [ ] Installation PWA possible
- [ ] Icônes correctes

## 🔄 Mise à jour utilisateurs

### Force la mise à jour

Les utilisateurs existants verront la nouvelle version :
- **Automatiquement** au prochain lancement (peut prendre quelques heures)
- **Immédiatement** en vidant le cache

### Instructions pour les utilisateurs

**iOS :**
1. Supprimer l'app de l'écran d'accueil
2. Réglages → Safari → Effacer historique et données
3. Réinstaller l'application

**Android :**
1. Chrome → Menu → Paramètres
2. Confidentialité → Effacer données de navigation
3. Cocher "Images et fichiers en cache"
4. Réinstaller l'application

## 🏷️ Tagging Git

```bash
# Créer un tag pour la version
git tag -a v14.0.0 -m "Version 14.0.0 - Ajout historique des calculs"

# Pousser le tag
git push origin v14.0.0

# Lister les tags
git tag -l
```

## 📝 Checklist complète

### Avant déploiement
- [ ] Code testé localement
- [ ] Version cache incrémentée
- [ ] Documentation mise à jour
- [ ] Commit et tag créés
- [ ] ZIP créé sans fichiers inutiles

### Déploiement
- [ ] Upload sur Jelastic réussi
- [ ] Deploy vers `/` effectué
- [ ] Pas d'erreurs dans les logs Jelastic

### Après déploiement
- [ ] URL accessible
- [ ] Service Worker actif
- [ ] Cache mis à jour
- [ ] Toutes fonctionnalités testées
- [ ] PWA installable
- [ ] Icônes correctes
- [ ] Mode offline fonctionne

### Communication
- [ ] Notifier les utilisateurs si changements majeurs
- [ ] Mettre à jour la documentation externe si nécessaire
- [ ] Annoncer sur les réseaux sociaux si pertinent

## 🐛 Rollback en cas de problème

```bash
# 1. Sur Jelastic, garder l'ancien ZIP en backup

# 2. Si problème, re-déployer l'ancienne version
# - Deployment Manager
# - Sélectionner l'ancien ZIP
# - Deploy

# 3. Ou revenir au tag précédent
git checkout v13.0.0
# Créer un nouveau ZIP et déployer
```

## 📊 Monitoring

Après déploiement, surveiller :
- Logs Jelastic (erreurs)
- Rapports utilisateurs
- Métriques d'utilisation (si analytics configuré)
- Temps de chargement

## 🔐 Sécurité

Avant chaque déploiement :
- [ ] Pas de console.log sensibles
- [ ] Pas de credentials dans le code
- [ ] Validation des entrées utilisateur
- [ ] HTTPS activé
- [ ] Headers de sécurité configurés

---

**Ce guide doit être suivi pour chaque déploiement en production.**

Pour des questions : dev@lausanne-aquatique.ch
