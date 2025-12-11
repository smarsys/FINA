# 📋 Version 14.3 - Focus Compétitions Suisses

## 🎯 Changement principal

Retrait des **Championnats d'Europe** pour se concentrer uniquement sur les **compétitions suisses**.

## 🏆 Compétitions disponibles (4)

**Avant v14.3 :** 6 compétitions
- Championnat Suisse 25m
- Championnat Suisse 50m
- RSR 25m
- RSR 50m
- ~~Championnat d'Europe 25m~~ ❌ Retiré
- ~~Championnat d'Europe 50m~~ ❌ Retiré

**Maintenant v14.3 :** 4 compétitions ✅
1. **Championnat Suisse 25m**
2. **Championnat Suisse 50m**
3. **RSR 25m** (Records Suisses Romands)
4. **RSR 50m** (Records Suisses Romands)

## 💡 Raison du changement

**Focus sur les compétitions suisses :**
- Plus pertinent pour les nageurs suisses
- Interface plus claire et concise
- Plus facile à maintenir
- Temps limites européens souvent difficiles à obtenir

## 📝 Modifications

### Fichiers modifiés

**temps-limites.json**
- ❌ Suppression `championnat_europe_25m`
- ❌ Suppression `championnat_europe_50m`
- ✅ Conservation des 4 compétitions suisses

**index.html**
- Sélecteur avec 4 options au lieu de 6

**app.js**
- Liste des compétitions réduite à 4

**service-worker.js**
- Version v14.3

## 🔄 Impact

### Pour l'utilisateur
- ✅ Interface plus épurée
- ✅ Moins de choix → Sélection plus rapide
- ✅ Focus sur les compétitions locales
- ❌ Impossible de voir les temps limites européens

### Pour le développement
- ✅ Moins de données à maintenir
- ✅ Fichier JSON plus léger
- ✅ Plus simple à documenter

## 📊 Statistiques

| Version | Compétitions | Lignes JSON | Taille fichier |
|---------|--------------|-------------|----------------|
| v14.2 | 6 | 368 | 6.3 KB |
| **v14.3** | **4** | **246** | **4.2 KB** |

**Réduction :** -33% de compétitions, -33% de lignes

## 🎯 Données à remplir

Vous devez maintenant remplir les temps limites pour :

**Priorité Haute :**
- [ ] Championnat Suisse 25m (Homme + Femme)
- [ ] Championnat Suisse 50m (Homme + Femme)

**Priorité Moyenne :**
- [ ] RSR 25m (Homme + Femme)
- [ ] RSR 50m (Homme + Femme)

**Total :** 4 compétitions × 2 genres = 8 ensembles de données

## 🔍 Où trouver les temps

### Championnat Suisse
**Source officielle :** [Swiss Swimming](https://www.swiss-swimming.ch)
- Section : Compétitions → Championnats Suisses
- Document : "Limites de qualification"
- Mise à jour : Annuelle

### RSR (Records Suisses Romands)
**Sources :**
- Fédération Romande de Natation
- Lausanne Aquatique (votre club)
- Site web RSR (si disponible)

## 💾 Structure simplifiée

```json
{
  "championnat_suisse_25m": {
    "homme": { ... },
    "femme": { ... }
  },
  "championnat_suisse_50m": {
    "homme": { ... },
    "femme": { ... }
  },
  "rsr_25m": {
    "homme": { ... },
    "femme": { ... }
  },
  "rsr_50m": {
    "homme": { ... },
    "femme": { ... }
  }
}
```

## 🧪 Test

**Exemple de sélecteur :**
```
┌─────────────────────────────────┐
│ Compétition: [▼]                │
├─────────────────────────────────┤
│ Championnat Suisse 25m          │
│ Championnat Suisse 50m          │
│ RSR 25m                         │
│ RSR 50m                         │
└─────────────────────────────────┘
```

4 options claires et pertinentes ! ✨

## 🔮 Évolution future

Si besoin, on pourra toujours :
- ✅ Rajouter les championnats d'Europe plus tard
- ✅ Ajouter d'autres compétitions régionales
- ✅ Ajouter des catégories par âge (jeunesse, elite, etc.)

## 📌 Rappel

**Fonctionnalités conservées :**
- ✅ Calcul automatique des points FINA
- ✅ Détection automatique du bassin
- ✅ Support Homme/Femme
- ✅ Toutes les nages et distances
- ✅ Interface responsive

**Affichage :**
```
Championnat Suisse 50m
00:51.00 (787 pts)
```

---

**Version :** v14.3-suisse-only
**Date :** 24 novembre 2024
**Status :** ✅ Simplifié et prêt
**Prochaine étape :** Remplir les 4 compétitions suisses

**Historique :**
- v14.0 : Ajout temps limites (5 compétitions)
- v14.1 : Affichage points FINA
- v14.2 : Séparation RSR 25m/50m (6 compétitions)
- **v14.3** : **Focus Suisse (4 compétitions)** ⭐
