# 安装依赖脚本
Write-Host "正在安装依赖..." -ForegroundColor Green

# 删除旧的 node_modules 和缓存
if (Test-Path "node_modules") {
    Write-Host "删除旧的 node_modules..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force node_modules
}

if (Test-Path ".next") {
    Write-Host "删除 .next 缓存..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force .next
}

if (Test-Path "package-lock.json") {
    Write-Host "删除 package-lock.json..." -ForegroundColor Yellow
    Remove-Item -Force package-lock.json
}

# 安装依赖
Write-Host "正在运行 npm install..." -ForegroundColor Green
npm install

# 验证安装
Write-Host "验证 framer-motion 安装..." -ForegroundColor Green
if (Test-Path "node_modules\framer-motion") {
    Write-Host "✓ framer-motion 安装成功!" -ForegroundColor Green
} else {
    Write-Host "✗ framer-motion 安装失败，请手动运行: npm install framer-motion" -ForegroundColor Red
}

Write-Host "完成!" -ForegroundColor Green
