#!/usr/bin/env bash
# Content API – cURL example
# Usage: CAPTUREKIT_API_KEY=your-key bash content.sh
set -euo pipefail

curl -sS -G "https://api.capturekit.dev/v1/content" \
  -H "x-api-key: ${CAPTUREKIT_API_KEY}" \
  --data-urlencode url=https://github.com/seaweedfs/seaweedfs \
  --data-urlencode include_markdown=true
