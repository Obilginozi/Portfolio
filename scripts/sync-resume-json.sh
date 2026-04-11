#!/usr/bin/env bash
# Copy resume JSON from Developer/ (canonical source) to repo root.
# Root copies exist so GET /res_*.json works on GitHub Pages (no .htaccess);
# the app loads /Developer/res_*.json — see README "Developer page data".
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cp "$ROOT/Developer/res_primaryLanguage.json" "$ROOT/res_primaryLanguage.json"
cp "$ROOT/Developer/res_secondaryLanguage.json" "$ROOT/res_secondaryLanguage.json"
echo "Synced res_primaryLanguage.json and res_secondaryLanguage.json to repo root."
