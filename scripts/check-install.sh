#!/bin/bash

# "preinstall": "npx only-allow pnpm || sh scripts/check-install.sh", 在 mac 下这么写，垃圾 Windows

pnpm run clear
echo "✅ Delete node_modules Finish"

pnpm run clear:lock
echo "✅ Delete Xxx-lock Finish"

exit 1


