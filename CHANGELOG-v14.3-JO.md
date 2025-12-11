# CHANGELOG - Version 14.3

## [14.3] - 11 décembre 2024

### ✨ Ajouts
- **Temps olympiques JO LA28** : Ajout des standards de qualification pour les Jeux Olympiques de Los Angeles 2028
  - Standard A (A Entry Standard)
  - Standard B (B Entry Standard = A + 1%)
- Nouvelles épreuves olympiques incluses : 50m Dos, 50m Brasse, 50m Papillon
- Tous les temps pour bassin 50m (14 épreuves par catégorie)

### 🔧 Modifications
- `temps-limites.json` : Ajout de `jo_a_50m` et `jo_b_50m`
- `index.html` : Ajout des options JO LA28 dans le sélecteur de compétition
- `app.js` : Ajout des noms d'affichage pour les compétitions olympiques

### 📊 Données
- Homme : 14 épreuves (Libre, Dos, Brasse, Papillon, 4 nages)
- Femme : 14 épreuves (Libre, Dos, Brasse, Papillon, 4 nages)
- Format : mm:ss.cc
- Bassin : 50m uniquement

### 🎯 Utilisation
Les nageurs peuvent maintenant :
- Consulter les temps de qualification olympiques
- Comparer leurs performances aux standards A et B
- Voir les points FINA correspondants aux temps olympiques
- Planifier leur progression vers les qualifications

### 📝 Notes
- Les temps sont basés sur les standards officiels LA28
- Standard B = Standard A + 1% (conformément aux règles olympiques)
- Compatible avec l'installation PWA existante
- Aucune modification des fonctionnalités existantes

### 🔗 Références
Source : Documentation officielle des standards de qualification pour les Jeux Olympiques LA28
Section : H. QUALIFICATION TIME STANDARDS

---

**Développé pour Lausanne Aquatique**
**Version v14.3 | Décembre 2024**
