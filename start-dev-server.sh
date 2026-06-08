#!/bin/bash
# Quick start script for local development server

# Load NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Start live-server
echo "🚀 Starting local development server..."
echo "📍 Server will run at: http://localhost:8080"
echo "🔄 Auto-reload enabled - changes will refresh browser automatically"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

live-server --port=8080 --open=/index.html
