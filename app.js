let finaData = {};
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
    
    if (mode === 'points') {
        document.getElementById('pointsInput').style.display = 'block';
        document.getElementById('timeInput').style.display = 'none';
        document.getElementById('resultLabel').textContent = 'Temps minimum requis';
    } else {
        document.getElementById('pointsInput').style.display = 'none';
        document.getElementById('timeInput').style.display = 'block';
        document.getElementById('resultLabel').textContent = 'Points FINA obtenus';
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
    const pool = document.getElementById('pool').value;
    const stroke = document.getElementById('stroke').value;
    const distance = document.getElementById('distance').value;
    
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
});
