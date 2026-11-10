#!/usr/bin/env bash
# Serve unchanged files so the preview respects the production content policy.
set -euo pipefail

if command -v python3 >/dev/null 2>&1; then
    python_command=python3
elif command -v python >/dev/null 2>&1; then
    python_command=python
else
    echo "Python 3 is required to run the local preview." >&2
    exit 1
fi

site_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
echo "Open http://127.0.0.1:8080 — refresh after edits; Ctrl+C stops the server."
exec "$python_command" -m http.server 8080 --bind 127.0.0.1 --directory "$site_root"
