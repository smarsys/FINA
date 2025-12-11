# 🤝 Guide de contribution

## 📂 Structure du projet

```
FINA-updated/
├── index.html              # Interface principale
├── app.js                  # Logique JavaScript
├── fina-times.json         # Données des temps FINA
├── manifest.json           # Configuration PWA
├── service-worker.js       # Cache et offline
├── logo-lausanne-aquatique.png
├── icon-192.png            # Icônes PWA
├── icon-512.png
├── apple-touch-icon.png
└── docs/
    ├── README.md
    ├── FEATURES.md
    └── CHANGELOG.md
```

## 🌿 Workflow Git

### Branches

- **`main`** : Version stable en production
- **`feature/*`** : Nouvelles fonctionnalités
- **`bugfix/*`** : Corrections de bugs
- **`hotfix/*`** : Corrections urgentes en production

### Process de développement

1. **Créer une branche depuis main**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/nom-de-la-fonctionnalite
   ```

2. **Développer la fonctionnalité**
   - Faire des commits réguliers
   - Messages de commit clairs
   - Tester en local

3. **Mettre à jour la version du cache**
   ```javascript
   // Dans service-worker.js
   const CACHE_NAME = 'fina-calculator-vXX-description';
   ```

4. **Commiter les changements**
   ```bash
   git add .
   git commit -m "feat: Description de la fonctionnalité"
   ```

5. **Merger dans main**
   ```bash
   git checkout main
   git merge feature/nom-de-la-fonctionnalite
   git tag -a vX.Y.Z -m "Description de la version"
   ```

## 📝 Convention de commits

Utiliser le format : `type: description`

**Types :**
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage (CSS, etc.)
- `refactor`: Refactorisation du code
- `perf`: Amélioration de performance
- `test`: Ajout/modification de tests
- `chore`: Maintenance (dépendances, etc.)

**Exemples :**
```
feat: Ajout de l'historique des calculs
fix: Correction calcul points pour 4 nages
docs: Mise à jour README avec nouvelles fonctionnalités
style: Amélioration design mobile
```

## 🧪 Tests

Avant de commiter :

1. **Tester les fonctionnalités**
   - Calcul Temps → Points
   - Calcul Points → Temps
   - Toutes les nages et distances
   - Mode offline

2. **Tester sur différents appareils**
   - iPhone (Safari)
   - Android (Chrome)
   - Desktop (Chrome, Firefox, Safari)

3. **Vérifier la PWA**
   - Installation possible
   - Icônes correctes
   - Mode offline fonctionne

## 📱 Déploiement sur Jelastic

1. **Créer un ZIP**
   ```bash
   cd FINA-updated
   zip -r fina-calculator-vXX.zip * -x "*.git*" "*.DS_Store"
   ```

2. **Uploader sur Jelastic**
   - Deployment Manager → Upload
   - Deploy vers `/`

3. **Tester en production**
   - Vérifier l'URL
   - Tester toutes les fonctionnalités
   - Vider le cache et réinstaller PWA

## 🎨 Standards de code

### HTML
- Indentation : 4 espaces
- Utiliser des classes sémantiques
- Commentaires pour sections importantes

### JavaScript
- Utiliser ES6+ features
- Fonctions documentées
- Éviter les variables globales
- Gestion d'erreurs appropriée

### CSS
- Mobile-first approach
- Variables CSS pour couleurs
- Commentaires pour sections
- Media queries organisées

### JSON
- Indentation : 2 espaces
- Format cohérent
- Validation JSON avant commit

## 🔢 Versioning

Format : `MAJOR.MINOR.PATCH`

- **MAJOR** : Changements incompatibles
- **MINOR** : Nouvelles fonctionnalités compatibles
- **PATCH** : Corrections de bugs

**Exemples :**
- `v13.0.0` → Version stable actuelle
- `v13.1.0` → Ajout historique des calculs
- `v13.1.1` → Correction bug historique
- `v14.0.0` → Refonte majeure

## 📋 Checklist avant merge

- [ ] Code testé sur mobile et desktop
- [ ] Version du cache incrémentée
- [ ] Documentation mise à jour
- [ ] CHANGELOG.md mis à jour
- [ ] Pas de console.log oubliés
- [ ] Commit message clair
- [ ] Tag de version créé

## 🐛 Rapporter un bug

Créer un fichier dans `/bugs/` avec :
```
Titre: Description courte du bug
Date: JJ/MM/AAAA
Priorité: Haute/Moyenne/Basse

Description:
Description détaillée du problème

Reproduction:
1. Étape 1
2. Étape 2
3. Bug observé

Attendu:
Comportement attendu

Environnement:
- Appareil: iPhone 14 / Samsung Galaxy S21 / etc.
- Navigateur: Safari 17 / Chrome 120 / etc.
- Version app: v13.0.0
```

## 💡 Proposer une fonctionnalité

1. Vérifier si elle n'existe pas déjà dans `FEATURES.md`
2. Créer un fichier descriptif dans `/proposals/`
3. Discuter avec l'équipe

## 🔐 Sécurité

- Ne jamais commiter de credentials
- Utiliser `.gitignore` approprié
- Pas de données sensibles dans le code
- Validation côté client ET serveur (si API future)

## 📞 Contact

Pour toute question :
- Email: dev@lausanne-aquatique.ch
- Issues GitHub (si repository public)

---

**Merci de contribuer au projet Calculateur FINA ! 🏊‍♂️**
