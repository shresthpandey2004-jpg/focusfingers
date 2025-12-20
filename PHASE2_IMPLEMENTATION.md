# Phase 2 Implementation Guide - Quick Reference

## 🎵 1. Background Music System

Add after `playSound()` function (line ~917):

```javascript
// Background Music System
let musicOscillators = [];
let musicGainNode = null;
let musicPlaying = false;

function startBackgroundMusic() {
    if (!audioContext || musicPlaying) return;
    musicPlaying = true;
    
    // Create gain node for music
    musicGainNode = audioContext.createGain();
    musicGainNode.gain.value = 0.1; // Low volume for background
    musicGainNode.connect(audioContext.destination);
    
    // Create layered music (bass, melody, harmony)
    const notes = [
        [110, 0.3],  // Bass - A2
        [220, 0.15], // Melody - A3
        [330, 0.1],  // Harmony - E4
        [440, 0.08]  // High - A4
    ];
    
    notes.forEach(([freq, gain]) => {
        const osc = audioContext.createOscillator();
        const oscGain = audioContext.createGain();
        
        osc.frequency.value = freq;
        osc.type = 'sine';
        oscGain.gain.value = gain;
        
        osc.connect(oscGain);
        oscGain.connect(musicGainNode);
        osc.start();
        
        musicOscillators.push(osc);
    });
    
    // Dynamic music changes based on combo
    setInterval(() => {
        if (!musicPlaying) return;
        const intensity = Math.min(combo / 20, 1);
        musicGainNode.gain.value = 0.1 + (intensity * 0.15);
    }, 1000);
}

function stopBackgroundMusic() {
    musicOscillators.forEach(osc => osc.stop());
    musicOscillators = [];
    musicPlaying = false;
}
```

**Integration:** Call `startBackgroundMusic()` when game starts, `stopBackgroundMusic()` when ended.

---

## 🏆 2. More Achievements (Expand to 20)

Add to ACHIEVEMENTS array (line ~850):

```javascript
const ACHIEVEMENTS = [
    // Existing
    { id: 'first_hit', name: 'First Blood', icon: '🎯', condition: () => hits >= 1 },
    { id: 'combo_10', name: '10x Combo!', icon: '⚡', condition: () => combo >= 10 },
    { id: 'combo_25', name: 'Combo Master', icon: '🔥', condition: () => combo >= 25 },
    { id: 'score_1000', name: 'Rookie', icon: '🌟', condition: () => score >= 1000 },
    { id: 'score_5000', name: 'Pro Player', icon: '💎', condition: () => score >= 5000 },
    { id: 'accuracy_90', name: 'Sharpshooter', icon: '🏹', condition: () => hits + misses > 20 && (hits / (hits + misses)) >= 0.9 },
    
    // NEW
    { id: 'combo_50', name: 'Unstoppable!', icon: '💫', condition: () => combo >= 50 },
    { id: 'combo_100', name: 'LEGENDARY', icon: '👑', condition: () => combo >= 100 },
    { id: 'score_10000', name: 'Expert', icon: '🏆', condition: () => score >= 10000 },
    { id: 'score_50000', name: 'Master', icon: '⭐', condition: () => score >= 50000 },
    { id: 'perfect_10', name: 'Perfect 10', icon: '✨', condition: () => hits >= 10 && misses === 0 },
    { id: 'speed_demon', name: 'Speed Demon', icon: '⚡', condition: () => hits >= 30 && (Date.now() - gameStartTime) < 30000 },
    { id: 'survivor', name: 'Survivor', icon: '🛡️', condition: () => gameStartTime > 0 && (Date.now() - gameStartTime) > 180000 },
    { id: 'powerup_collector', name: 'Power Hungry', icon: '💰', condition: () => score > 0 }, // Track powerups collected
    { id: 'no_powerup', name: 'Pure Skill', icon: '🎖️', condition: () => score >= 5000 }, // No powerups used
    { id: 'accuracy_95', name: 'Sniper', icon: '🎯', condition: () => hits + misses > 50 && (hits / (hits + misses)) >= 0.95 },
    { id: 'accuracy_99', name: 'Perfect Aim', icon: '🏹', condition: () => hits + misses > 100 && (hits / (hits + misses)) >= 0.99 },
    { id: 'mouse_master', name: 'Mouse Master', icon: '🖱️', condition: () => mouseMode && score >= 3000 },
    { id: 'hand_master', name: 'Hand Master', icon: '🤚' condition: () => !mouseMode && score >= 3000 },
    { id: 'zen_master', name: 'Inner Peace', icon: '🧘', condition: () => selectedMode === 'zen' && score >= 5000 }
];
```

---

## 🎨 3. Better Particle System

Add new particle types to Particle class:

```javascript
// In Particle constructor, add type parameter
constructor(x, y, color, type = 'explosion') {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * (type === 'trail' ? 2 : 8);
    this.vy = (Math.random() - 0.5) * (type === 'trail' ? 2 : 8);
    this.life = type === 'trail' ? 30 : 60;
    this.maxLife = this.life;
    this.color = color;
    this.radius = type === 'trail' ? 3 : randomRange(2, 5);
    this.type = type;
}

draw() {
    const alpha = this.life / this.maxLife;
    ctx.globalAlpha = alpha;
    
    if (this.type === 'trail') {
        // Trail effect
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x - 1, this.y - 1, 2, 2);
    } else if (this.type === 'star') {
        // Star particles
        this.drawStar(this.x, this.y, 5, this.radius, this.radius/2);
    } else {
        // Default explosion
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, this.color + '00');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.globalAlpha = 1;
}

drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;
    
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;
        
        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
}
```

**Usage:** Create trail particles on cursor movement, star particles on big hits.

---

## 📱 4. Mobile Touch Support

Add after mouse event listeners:

```javascript
// Touch controls for mobile
let touchActive = false;
let touchX = 0;
let touchY = 0;

canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    touchActive = true;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    touchX = touch.clientX - rect.left;
    touchY = touch.clientY - rect.top;
    targetCursorX = touchX;
    targetCursorY = touchY;
    handDetected = true;
    
    // Touch tap = hit
    if (gameState === 'playing') {
        handleMouseClick(e);
    }
});

canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (!touchActive) return;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    touchX = touch.clientX - rect.left;
    touchY = touch.clientY - rect.top;
    targetCursorX = touchX;
    targetCursorY = touchY;
});

canvas.addEventListener('touchend', (e) => {
    e.preventDefault();
    touchActive = false;
});
```

---

## 📊 5. Real-Time Stats Display

Add to HTML after powerup indicator:

```html
<div class="stats-panel" id="statsPanel" style="display: none;">
    <div style="font-size: 12px; color: #00d9ff;">
        <div>Accuracy: <span id="liveAccuracy">100%</span></div>
        <div>Hit Rate: <span id="hitRate">0/s</span></div>
        <div>Avg Combo: <span id="avgCombo">0</span></div>
        <div>Time: <span id="gameTime">0:00</span></div>
    </div>
</div>
```

CSS:
```css
.stats-panel {
    position: absolute;
    top: 150px;
    left: 30px;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    padding: 10px 15px;
    border-radius: 8px;
    border: 1px solid rgba(0, 217, 255, 0.3);
    pointer-events: none;
}
```

Update function:
```javascript
function updateLiveStats() {
    if (gameState !== 'playing') return;
    
    const accuracy = hits + misses > 0 ? ((hits / (hits + misses)) * 100).toFixed(1) : 100;
    const elapsed = (Date.now() - gameStartTime) / 1000;
    const hitRate = (hits / elapsed).toFixed(1);
    const avgCombo = hits > 0 ? (maxCombo / hits * 10).toFixed(1) : 0;
    const time = `${Math.floor(elapsed / 60)}:${String(Math.floor(elapsed % 60)).padStart(2, '0')}`;
    
    document.getElementById('liveAccuracy').textContent = accuracy + '%';
    document.getElementById('hitRate').textContent = hitRate + '/s';
    document.getElementById('avgCombo').textContent = avgCombo;
    document.getElementById('gameTime').textContent = time;
}

// Call in update() loop
setInterval(updateLiveStats, 100);
```

---

## 🎯 6. New Target Types

Add to Target class:

```javascript
constructor(isPowerup = false, type = 'normal') {
    // ... existing code ...
    this.type = type; // 'normal', 'bonus', 'avoid'
    
    if (type === 'bonus') {
        this.radius *= 0.7; // Smaller
        this.color = '#ffd700'; // Gold
        this.scoreMultiplier = 3;
    } else if (type === 'avoid') {
        this.color = '#ff0000'; // Red
        this.penalty = -100; // Lose points if hit
    }
}

// When spawning targets, 10% chance for special
function spawnTarget() {
    const rand = Math.random();
    let type = 'normal';
    let isPowerup = false;
    
    if (rand < 0.05) {
        isPowerup = true;
    } else if (rand < 0.10) {
        type = 'bonus';
    } else if (rand < 0.15) {
        type = 'avoid';
    }
    
    targets.push(new Target(isPowerup, type));
}
```

---

## Summary

These additions will make the game significantly more engaging! Each feature is modular and can be added independently.

**Priority order:**
1. Background Music (atmosphere)
2. More Achievements (goals)
3. Mobile Support (accessibility)
4. Better Particles (polish)
5. Live Stats (feedback)
6. New Target Types (variety)

Ready to implement? Let me know which to start with!
