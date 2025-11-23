# Instructions pour ajouter les temps de base "4 nages"

## ✅ Modifications effectuées

1. **index.html** : Ajout de l'option "4 nages" dans le menu déroulant
2. **fina-times.json** : Structure créée avec temps à "00:00.00" (à remplacer)

## 📝 Temps de base à ajouter

Vous devez maintenant remplacer les valeurs `"00:00.00"` dans le fichier `fina-times.json` par les vrais temps de base FINA pour le 4 nages.

### Structure des temps à ajouter :

#### **Homme - Bassin 25m** (lignes 27-31)
```json
"4nages": {
  "100": "00:XX.XX",   // ← Remplacer par le temps de base homme 100m 4N en 25m
  "200": "XX:XX.XX",   // ← Remplacer par le temps de base homme 200m 4N en 25m
  "400": "XX:XX.XX"    // ← Remplacer par le temps de base homme 400m 4N en 25m
}
```

#### **Homme - Bassin 50m** (lignes 57-60)
```json
"4nages": {
  "200": "XX:XX.XX",   // ← Remplacer par le temps de base homme 200m 4N en 50m
  "400": "XX:XX.XX"    // ← Remplacer par le temps de base homme 400m 4N en 50m
}
```

#### **Femme - Bassin 25m** (lignes 88-92)
```json
"4nages": {
  "100": "00:XX.XX",   // ← Remplacer par le temps de base femme 100m 4N en 25m
  "200": "XX:XX.XX",   // ← Remplacer par le temps de base femme 200m 4N en 25m
  "400": "XX:XX.XX"    // ← Remplacer par le temps de base femme 400m 4N en 25m
}
```

#### **Femme - Bassin 50m** (lignes 118-121)
```json
"4nages": {
  "200": "XX:XX.XX",   // ← Remplacer par le temps de base femme 200m 4N en 50m
  "400": "XX:XX.XX"    // ← Remplacer par le temps de base femme 400m 4N en 50m
}
```

## 📖 Format des temps

Les temps doivent être au format `mm:ss.cc` :
- Minutes : 2 chiffres avec zéro devant si nécessaire (ex: `01` pour 1 minute)
- Secondes : 2 chiffres avec zéro devant si nécessaire (ex: `05` pour 5 secondes)
- Centièmes : 2 chiffres (ex: `.50` pour 50 centièmes)

### Exemples :
- 50 secondes 16 centièmes : `"00:50.16"`
- 1 minute 54 secondes 32 centièmes : `"01:54.32"`
- 4 minutes 5 secondes 28 centièmes : `"04:05.28"`

## 🔧 Après modification

1. **Sauvegardez** le fichier `fina-times.json`
2. **Important** : Modifiez le numéro de version du cache dans `service-worker.js` :
   ```javascript
   const CACHE_NAME = 'fina-calculator-v2'; // Incrémentez le numéro
   ```
3. **Redéployez** sur Jelastic
4. **Testez** en vidant le cache du navigateur (Ctrl + Shift + R)

## 📊 Distances disponibles pour le 4 nages

- **Bassin 25m** : 100m, 200m, 400m
- **Bassin 50m** : 200m, 400m (pas de 100m en bassin olympique)

## ❓ Où trouver les temps de base FINA ?

Les temps de base officiels World Aquatics pour le 4 nages sont disponibles sur :
- Site officiel World Aquatics (anciennement FINA)
- Tables de points FINA 2024
- Documentation officielle de votre fédération de natation

---

Une fois les temps ajoutés, l'application fonctionnera parfaitement pour le 4 nages ! 🏊‍♂️
