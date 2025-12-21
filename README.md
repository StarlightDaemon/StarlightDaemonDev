# StarlightDaemon.github.io

My personal portfolio website hosted on GitHub Pages.

## 🚀 Live Site

Visit: [https://starlightdaemon.github.io](https://starlightdaemon.github.io)

## 📁 Structure

```
├── index.html      # Main HTML page
├── styles.css      # CSS styling (dark theme)
├── script.js       # Interactive features
└── README.md       # This file
```

## ✨ Features

- **Dark theme** with gradient accents
- **Responsive design** for mobile and desktop
- **Project showcase** with status badges
- **Skills section** organized by category
- **Smooth animations** on scroll
- **GitHub Pages** ready

## 🛠️ Customization

1. Edit `index.html` to update:
   - Your name and tagline
   - About me section
   - Project cards (add your real projects!)
   - Skills and technologies
   - Contact links

2. Update `styles.css` to change:
   - Colors (see `:root` CSS variables)
   - Fonts and spacing
   - Layout preferences

## 📝 Adding Projects

To add a new project, copy this template in the `project-grid` section:

```html
<article class="project-card">
    <div class="project-header">
        <h3>Project Name</h3>
        <span class="project-status status-active">Active</span>
    </div>
    <p class="project-description">
        Your project description here.
    </p>
    <div class="project-tech">
        <span class="tech-tag">Language</span>
        <span class="tech-tag">Framework</span>
    </div>
    <div class="project-links">
        <a href="https://github.com/..." class="project-link">Source</a>
        <a href="https://..." class="project-link">Demo</a>
    </div>
</article>
```

Status options:
- `status-active` (green)
- `status-maintained` (purple)
- `status-archived` (gray)

## 📄 License

MIT License - feel free to use this as a template!
