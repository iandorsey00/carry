#!/bin/sh
# Bump every Carry version string in one step.
# Usage: sh scripts/release.sh 0.1.0-beta.14
#        sh scripts/release.sh --check
set -e

NEW="$1"
if [ -z "$NEW" ]; then
  echo "usage: sh scripts/release.sh <new-version>" >&2
  exit 1
fi

OLD=$(sed -n 's/^const APP_VERSION = "\(.*\)";$/\1/p' app.js)
if [ -z "$OLD" ]; then
  echo "error: could not read APP_VERSION from app.js" >&2
  exit 1
fi

if [ "$NEW" = "--check" ]; then
  npm run check
  grep -Fq "Version: \`$OLD\`" README.md || {
    echo "error: README version does not match $OLD" >&2
    exit 1
  }
  grep -Fq "v$OLD" index.html || {
    echo "error: footer version does not match $OLD" >&2
    exit 1
  }
  MISMATCHES=$(grep -Eo '\?v=[^" ]+' index.html | grep -Fvx "?v=$OLD" || true)
  if [ -n "$MISMATCHES" ]; then
    echo "error: cache-busting versions do not all match $OLD" >&2
    echo "$MISMATCHES" >&2
    exit 1
  fi
  echo "release metadata is consistent at $OLD"
  exit 0
fi

printf '%s\n' "$NEW" | grep -Eq '^0\.[0-9]+\.[0-9]+-(alpha|beta)\.[0-9]+$' || {
  echo "error: invalid pre-1.0 Carry version: $NEW" >&2
  exit 1
}

npm run check

if [ "$OLD" = "$NEW" ]; then
  echo "already at $NEW" >&2
  exit 1
fi

ESC=$(printf '%s' "$OLD" | sed 's/[.[\*^$]/\\&/g')
for FILE in app.js index.html README.md package.json package-lock.json; do
  if sed --version >/dev/null 2>&1; then
    sed -i "s/$ESC/$NEW/g" "$FILE"
  else
    sed -i '' "s/$ESC/$NEW/g" "$FILE"
  fi
done

if grep -q "$OLD" app.js index.html README.md package.json package-lock.json; then
  echo "error: old version string still present after bump" >&2
  exit 1
fi

COUNT=$(grep -c "$NEW" index.html)
echo "bumped $OLD -> $NEW ($COUNT references in index.html)"
