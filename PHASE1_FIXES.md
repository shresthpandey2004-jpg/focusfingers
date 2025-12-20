# v2 Phase 1: Bug Fixes & Integration

## 🐛 Issues to Fix

### 1. Missing Event Listeners
- [ ] Mouse move handler not connected to canvas
- [ ] Mouse click handler not connected to canvas  
- [ ] Fullscreen button not connected
- [ ] Mouse mode button doesn't exist in menu

### 2. Missing Function Calls in Update Loop
- [ ] `checkAchievements()` not called in update()
- [ ] `updateScreenEffects()` not called in update()

### 3. Missing Render Integration
- [ ] Screen shake not applied in render()
- [ ] Screen flash not applied in render()

### 4. Missing UI Elements
- [ ] Mouse mode button not in menu HTML
- [ ] Achievement popup animation needs testing

## ✅ Fixes to Apply

### Fix 1: Add Event Listeners
```javascript
// Add after other event listeners (around line 1965)
// Mouse controls
canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('click', handleMouseClick);

// Fullscreen button
document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);
```

### Fix 2: Update Game Loop
```javascript
// In update() function, add before render():
if (gameState === 'playing') {
    checkAchievements();
    updateScreenEffects();
}
```

### Fix 3: Add Screen Effects to Render
```javascript
// At start of render() function:
ctx.save();
if (screenShake > 0) {
    ctx.translate(
        (Math.random() - 0.5) * screenShake,
        (Math.random() - 0.5) * screenShake
    );
}

// After clearing canvas:
if (screenFlash > 0) {
    ctx.fillStyle = `rgba(255, 234, 0, ${screenFlash})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// At end of render():
ctx.restore();
```

### Fix 4: Add Mouse Mode Button to Menu
```html
<!-- After tracking mode section -->
<div class="menu-buttons" style="margin-top: 20px;">
    <button class="menu-btn secondary" id="enableMouseBtn">🖱️ USE MOUSE INSTEAD</button>
</div>
```

```javascript
document.getElementById('enableMouseBtn').addEventListener('click', () => {
    enableMouseMode();
    mainMenu.classList.add('hide');
    startGame();
});
```

## 📋 Integration Checklist

- [ ] Add all event listeners
- [ ] Integrate into update loop
- [ ] Add screen effects to render
- [ ] Add mouse mode button
- [ ] Test each feature
- [ ] Commit working version

## 🎯 Success Criteria

✅ No console errors
✅ All features work
✅ Game loads properly
✅ Achievements pop up
✅ Mouse mode works
✅ Screen shake on big combos
✅ Fullscreen toggle works

---

**Starting implementation...**
