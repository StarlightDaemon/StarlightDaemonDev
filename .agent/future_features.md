# Future Features & Enhancement Ideas

This document tracks feature ideas that were removed during cleanup but may be valuable for future implementation.

## Audio Feedback
**Status:** Removed (v2.0.0 cleanup)  
**Original Location:** `js/theme-toggle.js:32`

### Concept
Add subtle sound effects when users interact with the settings panel (theme changes, font switching).

### Implementation Notes
- Create `playClickSound()` function
- Use Web Audio API for low-latency playback
- Suggested sounds:
  - Retro terminal "beep" for button clicks
  - Mechanical "clack" for toggle switches
  - Soft "whoosh" for panel open/close
- Make toggleable via settings (accessibility consideration)

### Example Implementation
```javascript
function playClickSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800; // Retro beep frequency
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}
```

### Resources
- [Web Audio API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Retro Sound Effects Generator](https://www.bfxr.net/)

---

## Header Terminal Widget
**Status:** Removed (v2.0.0 cleanup)  
**Original Location:** `styles.css:360-451`, `index.html` header

### Concept
A live terminal/info widget in the upper-right corner of the header showing dynamic status information (uptime, current command, system stats).

### Original Styling Features
- Retro CRT terminal aesthetic with scan lines
- Animated blinking cursor
- Glowing border on hover
- Backdrop blur effect
- Monospace font with `>` prompt prefix

### Possible Future Implementations
1. **Live Uptime Counter**: Days since site launch
2. **GitHub Stats**: Latest commit, star count
3. **Build Info**: Last deployment timestamp
4. **Mini Terminal**: Rotating tech stack one-liners
5. **Visitor Counter**: Retro hit counter aesthetic

### Reserved CSS Class
`.upper-right-info` - Placeholder kept in `styles.css` for future use

---

## Other Ideas
- Konami code easter egg
- Matrix rain background effect (toggleable)
- Keyboard shortcuts for theme/font switching

### TypeWriter Effect
Disabled in v2.0.0 cleanup. Can be restored for taglines.
```javascript
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
```
