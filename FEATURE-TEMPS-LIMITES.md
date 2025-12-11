# 🏊 Fonctionnalité : Temps Limites de Qualification

## ✨ Nouvelle fonctionnalité v14

Un **troisième onglet "Temps limites"** a été ajouté à l'application pour afficher les temps limites de qualification pour différentes compétitions.

## 🎯 Fonctionnement

### Interface

**3 onglets disponibles :**
1. **Points → Temps** (existant)
2. **Temps → Points** (existant)
3. **Temps limites** ⭐ NOUVEAU

### En mode "Temps limites"

**Sélecteurs affichés :**
- ✅ Catégorie (Homme/Femme)
- ✅ Nage (Libre, Dos, Brasse, Papillon, 4 Nages)
- ✅ Distance (50m, 100m, 200m, etc.)
- ✅ **Compétition** (nouveau sélecteur)
- ❌ Bassin (masqué, car inclus dans le nom de la compétition)

**Sélecteurs masqués :**
- Input temps
- Input points

**Bouton :**
- "Afficher les temps" (au lieu de "Calculer")

## 🏆 Compétitions disponibles

| Compétition | Code | Bassin |
|------------|------|--------|
| Championnat Suisse 25m | `championnat_suisse_25m` | 25m |
| Championnat Suisse 50m | `championnat_suisse_50m` | 50m |
| RSR | `rsr` | 25m |
| Championnat d'Europe 25m | `championnat_europe_25m` | 25m |
| Championnat d'Europe 50m | `championnat_europe_50m` | 50m |

## 📋 Exemple d'utilisation

**Scenario :** Je veux connaître le temps limite pour le Championnat Suisse 50m en 100m nage libre homme

1. Cliquer sur l'onglet **"Temps limites"**
2. Sélectionner **"Homme"**
3. Sélectionner **"Nage libre"**
4. Sélectionner **"100m"**
5. Sélectionner **"Championnat Suisse 50m"**
6. Cliquer sur **"Afficher les temps"**
7. ➡️ Résultat affiché : `00:51.20` (exemple)

## 📁 Fichiers modifiés

### Nouveaux fichiers
- `temps-limites.json` - Base de données des temps limites
- `TEMPS-LIMITES-GUIDE.md` - Guide pour remplir les temps

### Fichiers modifiés
- `index.html` - Ajout du 3ème onglet et sélecteur de compétition
- `app.js` - Logique pour gérer le mode temps limites
- `service-worker.js` - Version v14 et cache du nouveau fichier

## 🔧 Modifications techniques

### HTML
```html
<!-- Nouvel onglet -->
<button class="mode-btn" onclick="setMode('limits')">Temps limites</button>

<!-- Nouveau sélecteur -->
<select id="competition">
  <option value="championnat_suisse_25m">Championnat Suisse 25m</option>
  <option value="championnat_suisse_50m">Championnat Suisse 50m</option>
  <!-- ... -->
</select>
```

### JavaScript
```javascript
// Nouveau mode
if (currentMode === 'limits') {
  const competition = document.getElementById('competition').value;
  const limitTime = tempsLimitesData[competition][gender][stroke][distance];
  showResult(limitTime);
}
```

### JSON Structure
```json
{
  "championnat_suisse_25m": {
    "homme": {
      "libre": {
        "50": "00:23.00",
        "100": "00:51.00"
      }
    }
  }
}
```

## ⚠️ Action requise

**Les temps sont actuellement à `"00:00.00"`**

Vous devez remplir le fichier `temps-limites.json` avec les vrais temps limites officiels.

Consultez `TEMPS-LIMITES-GUIDE.md` pour :
- Le format exact à utiliser
- Où trouver les temps officiels
- Des exemples de remplissage

## 🧪 Test de la fonctionnalité

### Test 1 : Vérifier l'affichage
1. Ouvrir l'application
2. Cliquer sur "Temps limites"
3. ✅ Le sélecteur de compétition doit apparaître
4. ✅ Le sélecteur de bassin doit disparaître
5. ✅ Les inputs temps/points doivent être masqués

### Test 2 : Tester avec des valeurs
1. Remplir quelques temps dans `temps-limites.json`
2. Sélectionner les critères
3. Cliquer sur "Afficher les temps"
4. ✅ Le temps doit s'afficher

### Test 3 : Tester les erreurs
1. Ne pas remplir de temps (laisser "00:00.00")
2. Essayer d'afficher
3. ✅ Message : "Temps limite non encore défini"

## 📱 Comportement mobile

- Les 3 onglets s'adaptent sur mobile
- Le sélecteur de compétition reste lisible
- Le bouton garde sa taille optimale

## 🔄 Déploiement

**Version :** v14-temps-limites

**Checklist :**
- [ ] Remplir `temps-limites.json` avec vrais temps
- [ ] Tester localement
- [ ] Créer un ZIP
- [ ] Déployer sur Jelastic
- [ ] Vérifier en production
- [ ] Tester sur mobile

## 💡 Améliorations futures possibles

1. **Comparaison automatique**
   - Entrer son temps
   - Voir la différence avec le temps limite
   - Afficher "Qualifié ✅" ou "Non qualifié ❌"

2. **Multi-compétitions**
   - Afficher plusieurs compétitions en même temps
   - Tableau comparatif

3. **Historique des temps limites**
   - Évolution des temps année par année
   - Graphique de tendance

4. **Export**
   - Export PDF des temps limites
   - Partage sur réseaux sociaux

5. **Notifications**
   - Alertes quand on atteint un temps limite
   - Rappel des prochaines compétitions

## 📞 Support

Pour des questions sur :
- **Les temps officiels** → Fédération Suisse de Natation
- **L'application** → dev@lausanne-aquatique.ch
- **Bugs/suggestions** → Créer une issue GitHub

---

**Branche :** `feature/temps-limites`
**Version :** v14
**Statut :** ✅ Fonctionnel (en attente des vrais temps limites)
**Prochaine étape :** Remplir `temps-limites.json` et merger dans `main`
