#!/bin/bash

# 定义提交信息的时间戳格式
timestamp=$(date +"%Y-%m-%d %H:%M:%S")

# 1. 启动开发服务器
# echo "Starting dev server..."
# pnpm run dev

# 2. 运行 PDF 生成命令
echo "Running PDF generation..."
pnpm run pdf

# 3. 运行截图生成命令
echo "Running screenshot generation..."
pnpm run screenshot

# 4. 添加更改到 Git
echo "Adding changes to Git..."
git add .

# 5. 提交更改到 Git，提交信息包含时间戳
echo "Committing changes with message: 'deploy $timestamp'"
git commit -m "deploy $timestamp"

# 6. 推送到远程仓库
echo "Pushing to remote repository..."
git push

echo "Deployment completed!"
