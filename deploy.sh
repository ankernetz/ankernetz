#!/bin/bash
cd /Users/ki/.openclaw/workspace-anthropic/ankernetz
git add -A
git commit -m "${1:-Update}"
git push
vercel deploy --prod --token="$(cat /Users/ki/.vercel-token)" --yes --scope ankernetz
