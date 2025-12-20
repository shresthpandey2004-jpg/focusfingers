# 🎮 Focus Fingers

An interactive rhythm game controlled by hand tracking, color object detection, or mouse/keyboard. Built with vanilla JavaScript and MediaPipe Hands.

## ✨ Features

### Tracking Modes
- 👆 **Hand Tracking** - Track your index finger with webcam
- 🔴 **Red Object** - Track red colored objects
- 🟢 **Green Object** - Track green colored objects  
- 🔵 **Blue Object** - Track blue colored objects
- 🔦 **Light Tracking** - Track phone flashlight
- 🖱️ **Mouse Mode** - Use mouse/keyboard controls

### Gameplay
- 🎯 **Moving Targets** - 30% of targets move in dynamic patterns
- ⚡ **Power-Ups** - Freeze, Multiplier, Auto-Hit, Shield
- 🔥 **Combo System** - Build streaks for higher scores
- 💎 **4 Game Modes** - Classic, Time Attack, Accuracy, Zen
- 🏆 **3 Difficulty Levels** - Easy, Medium, Hard

### Visual Effects
- ✨ Particle explosions
- 🌈 Cyberpunk neon aesthetic
- 💫 Smooth animations
- 📊 Real-time statistics

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/focus-fingers.git
cd focus-fingers
```

2. **Open the game**
```bash
# Just open index.html in your browser
# Chrome or Edge recommended
```

3. **Allow camera access** when prompted

4. **Select tracking mode** and start playing!

## 🎮 How to Play

1. **Select difficulty** - Easy, Medium, or Hard
2. **Choose game mode** - Classic, Time Attack, Accuracy, or Zen
3. **Pick tracking method** - Hand, colored object, or mouse
4. **Hover over targets** for 0.3-0.4 seconds to hit them
5. **Build combos** for higher scores
6. **Collect power-ups** for special abilities

## 🛠️ Technical Stack

- **Vanilla JavaScript** - No frameworks needed
- **MediaPipe Hands** - Google's hand tracking library (CDN)
- **HTML5 Canvas** - High-performance rendering
- **Web Audio API** - Synthesized sound effects
- **LocalStorage** - Persistent high scores

## 📁 Project Structure

```
focus-fingers/
├── index.html          # Main game file (single-file app)
├── README.md           # This file
├── TESTING_GUIDE.md    # Instructions for physical testing
├── FEATURES_SUMMARY.md # Complete feature list
└── .gitignore
```

## 🎯 Game Modes

### Classic
- Endless gameplay
- No time limit
- Go for high score!

### Time Attack  
- 60 second challenge
- Maximum score wins
- Fast-paced action

### Accuracy
- 10 miss limit
- Perfect your aim
- Tests precision

### Zen
- Peaceful mode
- No pressure
- Relaxing experience

## 🏆 Achievements

- 🎯 **First Blood** - Hit your first target
- ⚡ **10x Combo** - Reach 10 combo
- 🔥 **Combo Master** - Reach 25 combo
- 🌟 **Rookie** - Score 1000 points
- 💎 **Pro Player** - Score 5000 points
- 🏹 **Sharpshooter** - 90%+ accuracy with 20+ hits

## 🎨 Controls

### Hand Mode
- Point index finger to move cursor
- Hover over targets to hit
- No clicking needed!

### Colored Object Mode
- Hold red/green/blue object
- Move object to control
- Most stable tracking!

### Mouse Mode
- Move mouse to aim
- Click to hit targets
- Traditional controls

### Keyboard
- **P** - Pause game
- **F** - Toggle fullscreen

## 📊 Statistics Tracked

- Total hits
- Total misses
- Accuracy percentage
- Max combo achieved
- Score
- Time played

## 🔧 Browser Compatibility

- ✅ Chrome (Recommended)
- ✅ Edge
- ✅ Safari
- ⚠️ Firefox (limited WebGL support)

**Requirements:**
- Modern browser with WebGL 2.0
- Webcam (for hand/object tracking)
- Good lighting recommended

## 🐛 Troubleshooting

**Hand tracking not working?**
- Ensure good lighting
- Keep hand away from body
- Try colored object mode instead

**Color detection not working?**
- Use bright, solid-colored objects
- Avoid multi-colored items
- Check webcam quality

**Low FPS?**
- Close other browser tabs
- Try easier difficulty
- Reduce browser zoom level

## 📝 Version

**Current:** v1.0 - Initial Release
- Full hand tracking implementation
- Multiple tracking modes
- Moving targets
- Complete game modes
- Power-up system

**Next:** v2.0 - Planned
- Cleaner code architecture
- Background music
- More achievements
- Mobile support
- Multiplayer mode

## 👤 Author

Created by Shresth Pandey

## 📄 License

MIT License - Feel free to use and modify!

## 🙏 Acknowledgments

- MediaPipe Hands by Google
- Inspired by Osu! rhythm game
- Neon aesthetic inspiration from cyberpunk genre

---

**Enjoy the game!** 🎮✨

For detailed testing instructions, see `TESTING_GUIDE.md`
