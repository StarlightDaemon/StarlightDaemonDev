---
description: Start local development server
---

# Start Local Development Server

This workflow starts a local web server for testing your portfolio before pushing to GitHub Pages.

## Steps

1. **Navigate to project directory**
```bash
cd /mnt/e/StarlightDaemon
```

// turbo
2. **Start live-server**
```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && live-server --port=8080 --open=/index.html
```

The server will:
- Start on `http://localhost:8080`
- Auto-open your browser to the homepage
- **Auto-reload** when you save any file changes
- Show real-time updates without manual refresh

## Usage

Once the server is running:
- Edit any HTML/CSS/JS file
- Save the file (Ctrl+S)
- The browser will automatically refresh
- Test your changes instantly!

## Stop the Server

Press `Ctrl+C` in the terminal to stop the server.

## Why This Matters

- **Instant feedback:** See changes immediately (no waiting 2-5 minutes for GitHub Pages)
- **Proper testing:** Tests with real HTTP protocol (not file://)
- **Fast iteration:** Make changes, save, see results instantly
- **No git commits needed:** Test locally before committing
