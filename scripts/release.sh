#!/bin/sh
# Bump every Carry version string in one step.
# Usage: sh scripts/release.sh 0.1.0-beta.14
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
if [ "$OLD" = "$NEW" ]; then
  echo "already at $NEW" >&2
  exit 1
fi

ESC=$(printf '%s' "$OLD" | sed 's/[.[\*^$]/\\&/g')
for FILE in app.js index.html README.md; do
  if sed --version >/dev/null 2>&1; then
    sed -i "s/$ESC/$NEW/g" "$FILE"
  else
    sed -i '' "s/$ESC/$NEW/g" "$FILE"
  fi
done

if grep -q "$OLD" app.js index.html README.md; then
  echo "error: old version string still present after bump" >&2
  exit 1
fi

COUNT=$(grep -c "$NEW" index.html)
echo "bumped $OLD -> $NEW ($COUNT references in index.html)"
