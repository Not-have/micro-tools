#!/bin sh
# mac 运行 chmod u+x *.sh 给 sh 脚本运行权限
# $1 获取 sh 传入的参数
# package.json 中直接给 sh 传入参数， 例："test": "./hello.sh parameter"
# 给根目录和子包安装依赖
pnpm add $1 -w
pnpm -F * add $1

echo "✅ Install completed"