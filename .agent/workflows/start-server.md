---
description: Start local development server
---

# Start Local Development Server

This workflow starts a local web server for testing your portfolio before pushing to GitHub Pages.

## Steps

1. Open a terminal at the repository root with Python 3 available on PATH.
2. Run `.\start-dev-server.ps1` in PowerShell, or `bash ./start-dev-server.sh` in Bash.
3. Open `http://127.0.0.1:8080` in your browser.

The server binds to localhost and serves unchanged files, preserving the site's
Content Security Policy. See `README.md` for prerequisites and verification commands.

## Usage

Once the server is running:
- Edit any HTML/CSS/JS file
- Save the file (Ctrl+S)
- Refresh the browser manually
- Test your changes instantly!

## Stop the Server

Press `Ctrl+C` in the terminal to stop the server.

## Why This Matters

- **Immediate preview:** See saved changes after refreshing
- **Proper testing:** Tests with real HTTP protocol (not file://)
- **Fast iteration:** Make changes, save, see results instantly
- **No git commits needed:** Test locally before committing
