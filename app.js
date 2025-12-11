let finaData = {};
let tempsLimitesData = {};
let currentMode = 'points';

// Charger les données FINA
fetch('fina-times.json')
    .then(response => response.json())
    .then(data => {
        finaData = data;
        updateDistances();
    })
    .catch(error => {
        showError('Erreur lors du chargement des données FINA');
        console.error(error);
    });

// Charger les données des temps limites
fetch('temps-limites.json')
    .then(response => response.json())
    .then(data => {
        tempsLimitesData = data;
    })
    .catch(error => {
        console.error('Erreur lors du chargement des temps limites:', error);
    });

// Convertir mm:ss.cc en secondes
function timeToSeconds(timeStr) {
    const parts = timeStr.split(':');
    const minutes = parseInt(parts[0]);
    const seconds = parseFloat(parts[1]);
    return minutes * 60 + seconds;
}

// Convertir secondes en mm:ss.cc
function secondsToTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const mm = minutes.toString().padStart(2, '0');
    const ss = secs.toFixed(2).padStart(5, '0');
    return `${mm}:${ss}`;
}

// Calculer les points FINA à partir d'un temps
function calculatePoints(baseTime, swimTime) {
    const base = timeToSeconds(baseTime);
    const time = timeToSeconds(swimTime);
    return Math.round(1000 * Math.pow(base / time, 3));
}

// Calculer le temps requis pour atteindre X points
function calculateTimeForPoints(baseTime, targetPoints) {
    const base = timeToSeconds(baseTime);
    const requiredTime = base / Math.pow(targetPoints / 1000, 1/3);
    return secondsToTime(requiredTime);
}

// Changer de mode
function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const pointsInput = document.getElementById('pointsInput');
    const timeInput = document.getElementById('timeInput');
    const competitionSelect = document.getElementById('competitionSelect');
    const poolSelect = document.getElementById('pool').closest('.form-group');
    const calculateBtn = document.getElementById('calculateBtn');
    
    if (mode === 'points') {
        pointsInput.style.display = 'block';
        timeInput.style.display = 'none';
        competitionSelect.style.display = 'none';
        poolSelect.style.display = 'block';
        calculateBtn.textContent = 'Calculer';
        calculateBtn.style.display = 'block';
        document.getElementById('resultLabel').textContent = 'Temps minimum requis';
    } else if (mode === 'time') {
        pointsInput.style.display = 'none';
        timeInput.style.display = 'block';
        competitionSelect.style.display = 'none';
        poolSelect.style.display = 'block';
        calculateBtn.textContent = 'Calculer';
        calculateBtn.style.display = 'block';
        document.getElementById('resultLabel').textContent = 'Points FINA obtenus';
    } else if (mode === 'limits') {
        pointsInput.style.display = 'none';
        timeInput.style.display = 'none';
        competitionSelect.style.display = 'none';
        poolSelect.style.display = 'none';
        calculateBtn.style.display = 'none';
        document.getElementById('resultLabel').textContent = 'Temps limites de qualification';
        // Afficher automatiquement les temps limites
        displayAllLimits();
    }
    
    hideResult();
}

// Mettre à jour les distances disponibles
function updateDistances() {
    const gender = document.getElementById('gender').value;
    const pool = document.getElementById('pool').value;
    const stroke = document.getElementById('stroke').value;
    const distanceSelect = document.getElementById('distance');
    
    distanceSelect.innerHTML = '';
    
    if (finaData[gender] && finaData[gender][pool] && finaData[gender][pool][stroke]) {
        const distances = Object.keys(finaData[gender][pool][stroke]);
        distances.forEach(dist => {
            const option = document.createElement('option');
            option.value = dist;
            option.textContent = dist + 'm';
            distanceSelect.appendChild(option);
        });
    }
    
    hideResult();
}

// Calculer
function calculate() {
    const gender = document.getElementById('gender').value;
    const stroke = document.getElementById('stroke').value;
    const distance = document.getElementById('distance').value;
    
    hideResult();
    
    if (currentMode === 'limits') {
        // Mode temps limites
        const competition = document.getElementById('competition').value;
        
        if (!tempsLimitesData[competition]) {
            showError('Données non disponibles pour cette compétition');
            return;
        }
        
        const limitTime = tempsLimitesData[competition]?.[gender]?.[stroke]?.[distance];
        
        if (!limitTime) {
            showError('Temps limite non disponible pour cette combinaison');
            return;
        }
        
        if (limitTime === "00:00.00") {
            showError('Temps limite non encore défini. Veuillez consulter la fédération.');
            return;
        }
        
        // Calculer les points FINA correspondants
        // Déterminer le bassin selon la compétition
        let pool = '50m';
        if (competition.includes('25m') || competition === 'rsr_25m') {
            pool = '25m';
        }
        
        const baseTime = finaData[gender]?.[pool]?.[stroke]?.[distance];
        let finaPoints = 'N/A';
        
        if (baseTime) {
            finaPoints = calculatePoints(baseTime, limitTime);
        }
        
        // Afficher le temps limite avec les points FINA
        const competitionNames = {
            'championnat_suisse_25m': 'Championnat Suisse 25m',
            'championnat_suisse_50m': 'Championnat Suisse 50m',
            'rsr_25m': 'RSR 25m',
            'rsr_50m': 'RSR 50m',
            'jo_a_50m': '🏆 JO LA28 - Standard A',
            'jo_b_50m': '🏆 JO LA28 - Standard B'
        };
        
        document.getElementById('resultLabel').textContent = competitionNames[competition];
        showResult(`${limitTime} (${finaPoints} pts)`);
        return;
    }
    
    // Modes normaux (points et time)
    const pool = document.getElementById('pool').value;
    const baseTime = finaData[gender]?.[pool]?.[stroke]?.[distance];
    
    if (!baseTime) {
        showError('Données non disponibles pour cette combinaison');
        return;
    }
    
    if (currentMode === 'points') {
        const points = parseInt(document.getElementById('points').value);
        
        if (!points || points < 1) {
            showError('Veuillez entrer un nombre de points valide');
            return;
        }
        
        const requiredTime = calculateTimeForPoints(baseTime, points);
        showResult(requiredTime);
    } else {
        const timeInput = document.getElementById('time').value.trim();
        
        if (!timeInput.match(/^\d{1,2}:\d{2}\.\d{2}$/)) {
            showError('Format de temps invalide. Utilisez mm:ss.cc (ex: 01:30.50)');
            return;
        }
        
        const points = calculatePoints(baseTime, timeInput);
        showResult(points + ' pts');
    }
}

// Afficher le résultat
function showResult(value) {
    document.getElementById('resultValue').textContent = value;
    document.getElementById('result').classList.add('show');
    document.getElementById('error').classList.remove('show');
}

// Masquer le résultat
function hideResult() {
    document.getElementById('result').classList.remove('show');
    document.getElementById('error').classList.remove('show');
}

// Afficher une erreur
function showError(message) {
    document.getElementById('error').textContent = message;
    document.getElementById('error').classList.add('show');
    document.getElementById('result').classList.remove('show');
}

// Permettre la validation avec Enter
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('points')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calculate();
    });
    document.getElementById('time')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calculate();
    });
    
    // Mettre à jour l'affichage des temps limites quand on change de catégorie ou de nage
    document.getElementById('gender')?.addEventListener('change', () => {
        if (currentMode === 'limits') {
            displayAllLimits();
        }
    });
    document.getElementById('stroke')?.addEventListener('change', () => {
        if (currentMode === 'limits') {
            displayAllLimits();
        }
    });
    document.getElementById('distance')?.addEventListener('change', () => {
        if (currentMode === 'limits') {
            displayAllLimits();
        }
    });
});

// Afficher tous les temps limites pour la catégorie, nage et distance sélectionnées
function displayAllLimits() {
    const gender = document.getElementById('gender').value;
    const stroke = document.getElementById('stroke').value;
    const distance = document.getElementById('distance').value;
    
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    
    // Collecter tous les temps pour cette combinaison
    const allTimes = [];
    
    const competitionNames = {
        'championnat_suisse_25m': 'CS 25m',
        'championnat_suisse_50m': 'CS 50m',
        'rsr_25m': 'RSR 25m',
        'rsr_50m': 'RSR 50m',
        'jo_a_50m': '🏆 JO A',
        'jo_b_50m': '🏆 JO B'
    };
    
    // Parcourir toutes les compétitions
    for (const [compKey, compName] of Object.entries(competitionNames)) {
        const limitTime = tempsLimitesData[compKey]?.[gender]?.[stroke]?.[distance];
        
        if (limitTime && limitTime !== "00:00.00") {
            // Calculer les points FINA
            let pool = '50m';
            if (compKey.includes('25m')) {
                pool = '25m';
            }
            
            const baseTime = finaData[gender]?.[pool]?.[stroke]?.[distance];
            let finaPoints = 'N/A';
            
            if (baseTime) {
                finaPoints = calculatePoints(baseTime, limitTime);
            }
            
            allTimes.push({
                competition: compName,
                time: limitTime,
                points: finaPoints,
                seconds: timeToSeconds(limitTime)
            });
        }
    }
    
    // Trier du plus lent au plus rapide (ordre décroissant des secondes)
    allTimes.sort((a, b) => b.seconds - a.seconds);
    
    if (allTimes.length === 0) {
        errorDiv.textContent = 'Aucun temps limite disponible pour cette combinaison';
        errorDiv.classList.add('show');
        resultDiv.classList.remove('show');
        return;
    }
    
    // Créer le tableau HTML
    let tableHTML = `
        <div style="font-size: 13px; margin-bottom: 10px; opacity: 0.9;">
            ${gender === 'homme' ? 'Homme' : 'Femme'} - ${getStrokeName(stroke)} - ${distance}m
        </div>
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr style="border-bottom: 2px solid rgba(255,255,255,0.3);">
                    <th style="text-align: left; padding: 8px; font-size: 13px;">Compétition</th>
                    <th style="text-align: center; padding: 8px; font-size: 13px;">Temps</th>
                    <th style="text-align: right; padding: 8px; font-size: 13px;">Points</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    allTimes.forEach((item, index) => {
        const isOlympic = item.competition.includes('🏆');
        const rowStyle = isOlympic ? 'background: rgba(255,255,255,0.15); font-weight: 600;' : '';
        
        tableHTML += `
            <tr style="${rowStyle}">
                <td style="padding: 10px 8px; font-size: 14px; border-bottom: 1px solid rgba(255,255,255,0.2);">${item.competition}</td>
                <td style="padding: 10px 8px; font-size: 16px; font-weight: bold; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.2);">${item.time}</td>
                <td style="padding: 10px 8px; font-size: 14px; text-align: right; border-bottom: 1px solid rgba(255,255,255,0.2);">${item.points} pts</td>
            </tr>
        `;
    });
    
    tableHTML += `
            </tbody>
        </table>
        <div style="font-size: 11px; margin-top: 10px; opacity: 0.8; text-align: center;">
            Du plus facile ⬆️ au plus difficile ⬇️
        </div>
    `;
    
    resultDiv.innerHTML = tableHTML;
    resultDiv.classList.add('show');
    errorDiv.classList.remove('show');
}

// Obtenir le nom complet de la nage
function getStrokeName(stroke) {
    const names = {
        'libre': 'Nage libre',
        'dos': 'Dos',
        'brasse': 'Brasse',
        'papillon': 'Papillon',
        '4nages': '4 nages'
    };
    return names[stroke] || stroke;
}
