#!/usr/bin/env bash
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

_ps="$(ps -ax -o args= 2>/dev/null)"
if grep -q 'dind.sh air-workspace-start.sh' <<<"$_ps"; then
  WARMUP=
else
  WARMUP=1
fi

echo "Installing Node.js dependencies..."
# The checked-in lockfile omits platform-specific optional esbuild packages, so
# npm ci rejects it. Keep the repository unchanged while installing a complete
# development dependency tree.
npm install --no-package-lock --no-audit --no-fund

echo "Priming build and test caches..."
npm run build
npm test

echo "Starting the Vite development server on port 3000..."
nohup npm run dev -- --host 0.0.0.0 --port 3000 > /tmp/social-sandbox-vite.log 2>&1 &

healthcheck() {
  echo "Waiting for the social-sandbox UI..."
  until curl --fail --silent --show-error http://127.0.0.1:3000/ | grep -q '<div id="root"></div>'; do
    if ! kill -0 "$1" 2>/dev/null; then
      echo "Vite exited before becoming ready. Log output:" >&2
      tail -n 100 /tmp/social-sandbox-vite.log >&2
      return 1
    fi
    echo "Vite is still starting..."
    sleep 2
  done
  echo "social-sandbox is ready at http://localhost:3000"
}

if [ -n "${WARMUP:-}" ]; then
  healthcheck "$!"
fi
