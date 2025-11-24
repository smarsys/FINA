# 🌿 Structure Git du projet

## 📊 État actuel

### Branches

```
main (v13.0.0 - Production) ✅
└── feature/nouvelles-fonctionnalites (Développement) 🚧
```

### Tags

- **v13.0.0** : Version production complète avec toutes les fonctionnalités de base

## 📂 Contenu de chaque branche

### `main` - Production
**Version stable déployée sur Jelastic**

Contient :
- ✅ Application complète v13.0.0
- ✅ Tous les temps FINA (incluant 4 nages)
- ✅ Branding Lausanne Aquatique
- ✅ PWA complète iOS/Android
- ✅ Design compact optimisé

**Fichiers :**
```
index.html
app.js
fina-times.json
manifest.json
service-worker.js
logo-lausanne-aquatique.png
icon-*.png
+ documentation
```

### `feature/nouvelles-fonctionnalites` - Développement
**Branche pour les nouvelles fonctionnalités**

Contient tout de `main` plus :
- 📋 FEATURES.md - Liste des fonctionnalités proposées
- 🤝 CONTRIBUTING.md - Guide de contribution
- 🗺️ Roadmap de développement

**Prochaines fonctionnalités prévues :**
1. Historique des calculs
2. Comparaisons multiples
3. Objectifs de performance
4. Graphiques et statistiques
5. Mode entraîneur

## 🚀 Workflow de développement

### Pour développer une nouvelle fonctionnalité

```bash
# 1. Se placer sur la branche de développement
git checkout feature/nouvelles-fonctionnalites

# 2. Créer une sous-branche pour la fonctionnalité
git checkout -b feature/historique-calculs

# 3. Développer la fonctionnalité
# ... modifications de code ...

# 4. Commiter
git add .
git commit -m "feat: Ajout historique des calculs avec localStorage"

# 5. Merger dans feature/nouvelles-fonctionnalites
git checkout feature/nouvelles-fonctionnalites
git merge feature/historique-calculs

# 6. Tester

# 7. Quand prêt pour production, merger dans main
git checkout main
git merge feature/nouvelles-fonctionnalites
git tag -a v13.1.0 -m "Ajout historique des calculs"

# 8. Déployer sur Jelastic
```

### Pour corriger un bug urgent en production

```bash
# 1. Créer une branche hotfix depuis main
git checkout main
git checkout -b hotfix/correction-4nages

# 2. Corriger le bug
# ... modifications ...

# 3. Commiter
git commit -m "fix: Correction calcul 4 nages femme 400m"

# 4. Merger directement dans main
git checkout main
git merge hotfix/correction-4nages
git tag -a v13.0.1 -m "Correction bug 4 nages"

# 5. Reporter la correction dans feature/nouvelles-fonctionnalites
git checkout feature/nouvelles-fonctionnalites
git merge main

# 6. Déployer immédiatement
```

## 📋 Versions

### Historique
- **v13.0.0** (24/11/2024) - Version production complète
  - Tous les temps FINA
  - Branding complet
  - PWA optimisée

### Prévisions
- **v13.1.0** - Historique des calculs
- **v13.2.0** - Comparaisons multiples
- **v14.0.0** - Refonte majeure avec profils

## 🎯 Roadmap

### Phase 1 (Court terme)
Branche : `feature/nouvelles-fonctionnalites`
- [ ] Historique des calculs
- [ ] Comparaisons multiples

### Phase 2 (Moyen terme)
Branche : `feature/phase-2`
- [ ] Objectifs de performance
- [ ] Graphiques et statistiques

### Phase 3 (Long terme)
Branche : `feature/phase-3`
- [ ] Profils de nageur
- [ ] Mode entraîneur

## 📝 Commandes Git utiles

```bash
# Voir l'état
git status

# Voir les branches
git branch -a

# Voir l'historique
git log --oneline --graph --all --decorate

# Voir les différences
git diff main feature/nouvelles-fonctionnalites

# Voir les tags
git tag -l

# Changer de branche
git checkout main
git checkout feature/nouvelles-fonctionnalites

# Créer une nouvelle branche
git checkout -b feature/ma-nouvelle-fonctionnalite
```

## 🔐 Avant de pusher sur GitHub/GitLab

Si vous voulez mettre ce projet sur un repository distant :

```bash
# Ajouter le remote
git remote add origin https://github.com/lausanne-aquatique/fina-calculator.git

# Pousser main
git push -u origin main

# Pousser les tags
git push --tags

# Pousser la branche de développement
git push -u origin feature/nouvelles-fonctionnalites
```

## 📖 Documentation

- **README.md** - Vue d'ensemble du projet
- **FEATURES.md** - Liste des fonctionnalités proposées
- **CONTRIBUTING.md** - Guide de contribution
- **CHANGELOG.md** - Historique des modifications
- **VERSION-v13.md** - Notes de la version actuelle

## 🆘 Besoin d'aide ?

Consultez `CONTRIBUTING.md` pour les détails complets sur le workflow de développement.

---

**Structure Git mise en place le :** 24 novembre 2024
**Mainteneur :** Lausanne Aquatique Dev Team
