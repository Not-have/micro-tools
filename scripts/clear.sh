#!/bin/bash
# 清楚当前文件下的所有 node_modules 和 dist
find . -name "node_modules" -exec rm -f {} \;

echo "✅ Delete completed"