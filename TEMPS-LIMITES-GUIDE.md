# 📋 Instructions - Temps Limites de Qualification

## ✅ Fonctionnalité implémentée

Un troisième onglet **"Temps limites"** a été ajouté à l'application. Il permet d'afficher les temps limites de qualification pour différentes compétitions.

## 🏊 Compétitions disponibles

1. **Championnat Suisse 25m** (`championnat_suisse_25m`)
2. **Championnat Suisse 50m** (`championnat_suisse_50m`)
3. **RSR** (`rsr`)
4. **Championnat d'Europe 25m** (`championnat_europe_25m`)
5. **Championnat d'Europe 50m** (`championnat_europe_50m`)

## 📝 Comment remplir les temps limites

### Fichier à modifier : `temps-limites.json`

Actuellement, tous les temps sont à `"00:00.00"`. Vous devez les remplacer par les vrais temps limites de qualification.

### Structure du fichier

```json
{
  "nom_competition": {
    "homme": {
      "nage": {
        "distance": "mm:ss.cc"
      }
    },
    "femme": {
      "nage": {
        "distance": "mm:ss.cc"
      }
    }
  }
}
```

### Exemple de remplissage

**Avant :**
```json
"championnat_suisse_25m": {
  "homme": {
    "libre": {
      "50": "00:00.00",
      "100": "00:00.00"
    }
  }
}
```

**Après :**
```json
"championnat_suisse_25m": {
  "homme": {
    "libre": {
      "50": "00:22.50",
      "100": "00:49.80"
    }
  }
}
```

## 📊 Format des temps

**Important :** Respectez le format `mm:ss.cc`
- Minutes : 2 chiffres (ex: `01` pour 1 minute)
- Secondes : 2 chiffres (ex: `05` pour 5 secondes)  
- Centièmes : 2 chiffres (ex: `.50` pour 50 centièmes)

**Exemples valides :**
- `"00:23.45"` - 23 secondes 45 centièmes
- `"01:02.89"` - 1 minute 2 secondes 89 centièmes
- `"04:15.32"` - 4 minutes 15 secondes 32 centièmes

## 🔍 Distances par bassin

### Bassin 25m
Toutes les nages ont : 50m, 100m, 200m
- **Libre** : + 400m, 800m, 1500m
- **4 nages** : 100m, 200m, 400m

### Bassin 50m
Toutes les nages ont : 50m, 100m, 200m
- **Libre** : + 400m, 800m, 1500m
- **4 nages** : 200m, 400m (pas de 100m)

## 📍 Où trouver les temps limites officiels ?

### Championnat Suisse
- Site : [Swiss Swimming](https://www.swiss-swimming.ch)
- Section : Compétitions → Critères de qualification
- Document : "Limites de qualification Championnats Suisses"

### RSR (Records Suisses Romands)
- Consulter la Fédération Romande de Natation
- Ou votre club (Lausanne Aquatique)

### Championnat d'Europe
- Site : [LEN - European Aquatics](https://www.len.eu)
- Section : Events → Qualification times
- Document : "European Championships Qualifying Standards"

## 🎯 Ordre de priorité pour le remplissage

**Priorité 1 (Haute) :**
- Championnat Suisse 25m
- Championnat Suisse 50m

**Priorité 2 (Moyenne) :**
- RSR

**Priorité 3 (Basse) :**
- Championnat d'Europe 25m
- Championnat d'Europe 50m

## ⚠️ Important

- Si un temps n'est pas disponible, laissez `"00:00.00"`
- L'application affichera un message approprié
- Vérifiez bien les temps avant de déployer
- Les temps peuvent changer chaque année

## 🔄 Après modification

1. **Sauvegardez** `temps-limites.json`
2. **Vérifiez** la syntaxe JSON (pas de virgule en trop, guillemets corrects)
3. **Testez** localement
4. **Déployez** sur Jelastic

## 📱 Utilisation dans l'application

1. Sélectionner l'onglet **"Temps limites"**
2. Choisir la catégorie (Homme/Femme)
3. Choisir la nage
4. Choisir la distance
5. Choisir la compétition
6. Cliquer sur **"Afficher les temps"**
7. Le temps limite s'affiche

## 🧪 Test

Pour tester sans les vrais temps :
```json
"championnat_suisse_25m": {
  "homme": {
    "libre": {
      "50": "00:23.00",
      "100": "00:51.00"
    }
  }
}
```

Puis testez dans l'application pour vérifier que tout fonctionne.

## 💡 Suggestions futures

Fonctionnalités possibles à ajouter :
- [ ] Comparer son temps au temps limite
- [ ] Calculer la marge (temps réalisé - temps limite)
- [ ] Afficher plusieurs compétitions simultanément
- [ ] Historique des temps limites (évolution annuelle)
- [ ] Notifications quand on atteint un temps limite

---

**Version :** v14 - Temps limites
**Fichier à compléter :** `temps-limites.json`
**Dernière mise à jour :** 24 novembre 2024
