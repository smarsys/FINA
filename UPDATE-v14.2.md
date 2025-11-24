# 📋 Mise à jour v14.2 - RSR 25m et RSR 50m

## 🔧 Correction importante

RSR est maintenant séparé en **deux compétitions distinctes** :
- **RSR 25m** (Records Suisses Romands bassin 25m)
- **RSR 50m** (Records Suisses Romands bassin 50m)

## 🏆 Liste complète des compétitions (6)

1. **Championnat Suisse 25m**
2. **Championnat Suisse 50m**
3. **RSR 25m** ⭐ NOUVEAU
4. **RSR 50m** ⭐ NOUVEAU
5. **Championnat d'Europe 25m**
6. **Championnat d'Europe 50m**

## 📁 Structure du fichier temps-limites.json

```json
{
  "championnat_suisse_25m": { ... },
  "championnat_suisse_50m": { ... },
  "rsr_25m": {
    "homme": { ... },
    "femme": { ... }
  },
  "rsr_50m": {
    "homme": { ... },
    "femme": { ... }
  },
  "championnat_europe_25m": { ... },
  "championnat_europe_50m": { ... }
}
```

## 🎯 Différences RSR 25m vs 50m

### RSR 25m
- **Bassin :** 25 mètres (petit bassin)
- **4 Nages :** 100m, 200m, 400m disponibles
- **Temps généralement plus rapides** (virages plus fréquents)

### RSR 50m
- **Bassin :** 50 mètres (grand bassin / olympique)
- **4 Nages :** 200m, 400m (pas de 100m)
- **Temps généralement plus lents** que le 25m

## ✅ Détection automatique du bassin

Le système détecte maintenant correctement :

| Compétition | Bassin détecté | Code |
|------------|----------------|------|
| Championnat Suisse 25m | 25m | `championnat_suisse_25m` |
| Championnat Suisse 50m | 50m | `championnat_suisse_50m` |
| **RSR 25m** | **25m** | `rsr_25m` |
| **RSR 50m** | **50m** | `rsr_50m` |
| Championnat d'Europe 25m | 25m | `championnat_europe_25m` |
| Championnat d'Europe 50m | 50m | `championnat_europe_50m` |

## 🧪 Exemples de remplissage

### RSR 25m - Exemple fictif

```json
"rsr_25m": {
  "homme": {
    "libre": {
      "50": "00:22.50",
      "100": "00:49.00",
      "200": "01:48.00"
    },
    "dos": {
      "50": "00:25.00",
      "100": "00:54.50",
      "200": "02:00.00"
    },
    "4nages": {
      "100": "00:56.00",
      "200": "02:06.00",
      "400": "04:32.00"
    }
  }
}
```

### RSR 50m - Exemple fictif

```json
"rsr_50m": {
  "homme": {
    "libre": {
      "50": "00:23.00",
      "100": "00:50.50",
      "200": "01:50.00"
    },
    "dos": {
      "50": "00:26.00",
      "100": "00:56.00",
      "200": "02:02.00"
    },
    "4nages": {
      "200": "02:08.00",
      "400": "04:38.00"
    }
  }
}
```

## 📝 À noter

**Important :** RSR signifie **Records Suisses Romands**

Ces temps représentent les limites de qualification pour les compétitions RSR :
- En bassin 25m (petit bassin)
- En bassin 50m (grand bassin)

Les temps peuvent être différents entre les deux bassins pour la même épreuve.

## 🔄 Migration depuis v14.1

Si vous aviez déjà commencé à remplir des temps pour "rsr", vous devez maintenant :

1. **Dupliquer** les temps dans `rsr_25m` ET `rsr_50m`
2. **Ajuster** selon le bassin approprié
3. **Supprimer** l'ancienne entrée "rsr" (qui n'existe plus)

## 💡 Pourquoi cette séparation ?

1. **Plus de précision** : Les temps limites peuvent être différents entre 25m et 50m
2. **Cohérence** : Même structure que les Championnats Suisses et Européens
3. **Clarté** : Les nageurs savent immédiatement quel bassin
4. **Flexibilité** : Permet d'avoir des critères différents par bassin

## 🎨 Interface utilisateur

**Sélecteur de compétition :**
```
┌─────────────────────────────────────┐
│ Compétition: [▼]                    │
├─────────────────────────────────────┤
│ Championnat Suisse 25m              │
│ Championnat Suisse 50m              │
│ RSR 25m                    ← NOUVEAU│
│ RSR 50m                    ← NOUVEAU│
│ Championnat d'Europe 25m            │
│ Championnat d'Europe 50m            │
└─────────────────────────────────────┘
```

## 📊 Récapitulatif des versions

| Version | Compétitions RSR |
|---------|------------------|
| v14.0 | RSR (unique) |
| v14.1 | RSR (unique) |
| **v14.2** | **RSR 25m + RSR 50m** ✅ |

## 🚀 Prêt pour utilisation

**Nombre total de compétitions :** 6

Toutes les compétitions supportent :
- Homme / Femme
- Toutes les nages
- Toutes les distances selon le bassin
- Calcul automatique des points FINA

---

**Version :** v14.2
**Date :** 24 novembre 2024
**Changement :** RSR séparé en 25m et 50m
**Cache :** v14.2-rsr-split
