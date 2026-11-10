# Serve unchanged files so the preview respects the production content policy.
$ErrorActionPreference = 'Stop'
if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
    throw 'Python 3 is required to run the local preview. Make python available on PATH.'
}

Write-Host 'Open http://127.0.0.1:8080 - refresh after edits; Ctrl+C stops the server.'
python -m http.server 8080 --bind 127.0.0.1 --directory $PSScriptRoot
exit $LASTEXITCODE
