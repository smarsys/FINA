# Calculateur Points FINA

Application web progressive (PWA) pour calculer les temps minimum requis pour obtenir un nombre de points FINA en natation, ou calculer les points FINA obtenus pour un temps donné.

## Fonctionnalités

- ✅ Calcul bidirectionnel : Points → Temps ou Temps → Points
- ✅ Catégories Homme et Femme avec temps de base séparés
- ✅ Support bassin 25m et 50m
- ✅ Toutes les nages : Libre, Dos, Brasse, Papillon
- ✅ Distances standards selon la nage
- ✅ Interface responsive pour mobile
- ✅ Application installable (PWA)
- ✅ Fonctionne hors ligne

## Structure du projet

```
fina-calculator/
├── index.html           # Interface utilisateur
├── app.js              # Logique de calcul
├── fina-times.json     # Temps de base FINA
├── manifest.json       # Configuration PWA
├── service-worker.js   # Cache et mode offline
├── icon-192.png        # Icône 192x192
├── icon-512.png        # Icône 512x512
└── README.md           # Documentation
```

## Déploiement

### Option 1 : Hébergement Web Infomaniak

1. Connectez-vous à votre Manager Infomaniak
2. Allez dans "Hébergement Web"
3. Utilisez le File Manager ou FTP
4. Uploadez tous les fichiers dans un dossier (ex: `/web/fina-calculator/`)
5. Accédez à `https://votredomaine.ch/fina-calculator/`

### Option 2 : Jelastic Infomaniak

1. Créez un nouvel environnement avec Apache ou NGINX
2. Déployez les fichiers via :
   - Upload ZIP depuis Deployment Manager
   - Git (si vous avez un repository)
   - SFTP vers `/var/www/webroot/ROOT/`
3. Accédez à `https://votre-env.jelastic.infomaniak.com`

### Option 3 : Serveur local pour tests

```bash
# Avec Python 3
python3 -m http.server 8000

# Avec Node.js (npx http-server)
npx http-server -p 8000

# Ouvrez http://localhost:8000
```

## Installation sur mobile

### Android (Chrome)
1. Ouvrez l'app dans Chrome
2. Menu (⋮) → "Ajouter à l'écran d'accueil"

### iOS (Safari)
1. Ouvrez l'app dans Safari
2. Bouton partage → "Sur l'écran d'accueil"

## Mise à jour des temps de base FINA

Les temps de base sont stockés dans `fina-times.json`. Pour les mettre à jour :

1. Éditez le fichier JSON
2. Format : `"distance": "mm:ss.cc"`
3. Sauvegardez
4. Si déployé, re-uploadez le fichier

Exemple de structure :
```json
{
  "homme": {
    "25m": {
      "libre": {
        "50": "00:20.16",
        "100": "00:44.84"
      }
    }
  },
  "femme": {
    "25m": {
      "libre": {
        "50": "00:22.93",
        "100": "00:50.90"
      }
    }
  }
}
```

## Formule FINA

- **Points → Temps** : `Temps = Temps_base / (Points / 1000)^(1/3)`
- **Temps → Points** : `Points = 1000 × (Temps_base / Temps)^3`

## Technologies utilisées

- HTML5
- CSS3 (Flexbox, Gradients, Animations)
- JavaScript ES6+
- Service Worker API
- Web App Manifest
- Canvas API (pour les icônes)

## Compatibilité

- ✅ Chrome/Edge (desktop et mobile)
- ✅ Firefox (desktop et mobile)
- ✅ Safari (iOS)
- ✅ Samsung Internet

## Support

Pour toute question ou suggestion, veuillez ouvrir une issue sur le repository Git.

## Licence

Usage personnel - Tous droits réservés

---

Développé pour faciliter l'entraînement et la planification en natation 🏊
