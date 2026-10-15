#!/usr/bin/env sh
# Regenerates the static images in public/. Not part of the site build.
# Needs rsvg-convert (brew install librsvg) and sips (macOS).
set -eu

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"

# 1200x630 share image used for og:image / twitter:image.
rsvg-convert -w 1200 -h 630 "$ROOT/scripts/images/og.svg" -o "$ROOT/public/og.png"

# 240x240 header avatar; profile.jpg stays full size for JSON-LD.
sips -z 240 240 -s format jpeg -s formatOptions 80 \
  "$ROOT/public/profile.jpg" --out "$ROOT/public/profile-240.jpg" >/dev/null

ls -l "$ROOT/public/og.png" "$ROOT/public/profile-240.jpg"
