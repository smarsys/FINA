# 🧪 Exemples de temps pour tester

Pour tester la fonctionnalité "Temps limites" avec affichage des points FINA, voici quelques exemples de temps réalistes que vous pouvez utiliser.

## 📝 Exemples de temps (fictifs pour test)

### Championnat Suisse 25m - Homme

```json
"championnat_suisse_25m": {
  "homme": {
    "libre": {
      "50": "00:23.50",
      "100": "00:51.00",
      "200": "01:52.00"
    },
    "dos": {
      "50": "00:26.00",
      "100": "00:56.50",
      "200": "02:02.00"
    },
    "brasse": {
      "50": "00:29.00",
      "100": "01:04.00",
      "200": "02:20.00"
    },
    "papillon": {
      "50": "00:25.00",
      "100": "00:55.50",
      "200": "02:05.00"
    },
    "4nages": {
      "100": "00:57.50",
      "200": "02:08.00",
      "400": "04:35.00"
    }
  }
}
```

### Championnat Suisse 50m - Femme

```json
"championnat_suisse_50m": {
  "femme": {
    "libre": {
      "50": "00:27.00",
      "100": "00:59.00",
      "200": "02:08.00"
    },
    "dos": {
      "50": "00:31.00",
      "100": "01:06.00",
      "200": "02:20.00"
    },
    "brasse": {
      "50": "00:34.00",
      "100": "01:14.00",
      "200": "02:38.00"
    },
    "papillon": {
      "50": "00:28.50",
      "100": "01:03.00",
      "200": "02:18.00"
    }
  }
}
```

## 🎯 Test avec calcul de points

Avec ces temps de test, l'application affichera par exemple :

### Test 1 : Libre 100m Homme - Championnat Suisse 25m
- **Temps limite :** `00:51.00`
- **Points FINA calculés :** ~787 pts
- **Affichage :** `00:51.00 (787 pts)`

### Test 2 : Brasse 200m Femme - Championnat Suisse 50m
- **Temps limite :** `02:38.00`
- **Points FINA calculés :** ~697 pts
- **Affichage :** `02:38.00 (697 pts)`

### Test 3 : 4 Nages 200m Homme - Championnat Suisse 25m
- **Temps limite :** `02:08.00`
- **Points FINA calculés :** ~710 pts
- **Affichage :** `02:08.00 (710 pts)`

## 🔍 Comment tester

1. **Ouvrir** `temps-limites.json`
2. **Copier-coller** un des exemples ci-dessus
3. **Sauvegarder** le fichier
4. **Ouvrir** l'application dans le navigateur
5. **Sélectionner** l'onglet "Temps limites"
6. **Choisir** les critères correspondants
7. **Cliquer** sur "Afficher les temps"
8. ✅ **Vérifier** que le temps ET les points s'affichent

## 📊 Comprendre les points FINA

**Échelle approximative :**
- **1000 pts** = Temps de base FINA (record du monde)
- **900 pts** = Niveau international élite
- **800 pts** = Niveau national élite
- **700 pts** = Niveau régional élite
- **600 pts** = Bon niveau compétitif
- **500 pts** = Niveau intermédiaire
- **< 400 pts** = Niveau débutant/loisir

## 💡 Interprétation

Quand vous verrez par exemple :
```
Championnat Suisse 25m
01:52.00 (745 pts)
```

Cela signifie :
- Pour se qualifier au Championnat Suisse 25m
- Il faut nager en **01:52.00 ou mieux**
- Ce qui correspond à **745 points FINA**
- Niveau requis : **Élite nationale**

## ⚙️ Détection automatique du bassin

L'application détecte automatiquement le bassin selon la compétition :

| Compétition | Bassin détecté |
|------------|----------------|
| Championnat Suisse 25m | 25m |
| Championnat Suisse 50m | 50m |
| RSR | 25m |
| Championnat d'Europe 25m | 25m |
| Championnat d'Europe 50m | 50m |

Cela garantit que les points FINA sont calculés avec les bons temps de base.

## 🎨 Affichage

**Format d'affichage :**
```
[Temps limite] ([Points FINA] pts)
```

**Exemples :**
- `00:51.00 (787 pts)`
- `02:08.00 (710 pts)`
- `00:23.50 (812 pts)`

Si les points ne peuvent pas être calculés (données manquantes), l'affichage sera :
- `00:51.00 (N/A pts)`

## 📝 Notes importantes

1. **Temps fictifs** : Les temps ci-dessus sont des exemples pour tester, pas les vrais temps limites officiels
2. **Points approximatifs** : Les points FINA affichés sont calculés automatiquement et peuvent légèrement varier
3. **Vrais temps** : Remplacez par les temps officiels de Swiss Swimming et LEN

## 🚀 Prêt pour production

Une fois que vous aurez :
1. ✅ Rempli `temps-limites.json` avec les vrais temps officiels
2. ✅ Testé que l'affichage fonctionne
3. ✅ Vérifié quelques calculs de points

Vous pourrez déployer en production !

---

**Version :** v14.1
**Format affichage :** `mm:ss.cc (XXX pts)`
**Détection bassin :** Automatique selon compétition
