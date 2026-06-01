<#
.SYNOPSIS
    Avis VitePress 站点构建与部署脚本 (Windows PowerShell)

.DESCRIPTION
    自动构建 VitePress 静态站点并部署到 GitHub Pages。
    执行流程：安装依赖 → 构建 → 部署到 gh-pages 分支。

.PARAMETER BuildOnly
    仅构建（不部署），用于本地预览检查。

.PARAMETER Preview
    构建后启动本地预览服务器。

.EXAMPLE
    .\deploy.ps1
    完整构建并部署到 GitHub Pages

.EXAMPLE
    .\deploy.ps1 -BuildOnly
    仅构建到 .vitepress/dist/

.EXAMPLE
    .\deploy.ps1 -Preview
    构建并启动本地预览
#>

param(
    [switch]$BuildOnly,
    [switch]$Preview
)

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..\..

# 配置
$WebDir = "E:\Avis-System\web"
$DistDir = "$WebDir\.vitepress\dist"
$RepoUrl = "https://github.com/avis-aerospace/avis-web.git"
$DeployBranch = "gh-pages"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Avis VitePress 部署脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 步骤 1：检查 Node.js 环境
Write-Host "[1/5] 检查 Node.js 环境..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "  Node.js: $nodeVersion" -ForegroundColor Green
}
catch {
    Write-Host "  错误：未检测到 Node.js，请安装 Node.js (>=18)" -ForegroundColor Red
    exit 1
}

try {
    $npmVersion = npm --version
    Write-Host "  npm: v$npmVersion" -ForegroundColor Green
}
catch {
    Write-Host "  错误：未检测到 npm" -ForegroundColor Red
    exit 1
}

# 步骤 2：安装依赖
Write-Host ""
Write-Host "[2/5] 安装依赖..." -ForegroundColor Yellow
Set-Location $WebDir

if (-not (Test-Path "$WebDir\node_modules")) {
    npm install
    Write-Host "  依赖安装完成" -ForegroundColor Green
}
else {
    Write-Host "  node_modules 已存在，跳过安装" -ForegroundColor Green
}

# 步骤 3：构建
Write-Host ""
Write-Host "[3/5] 构建 VitePress 站点..." -ForegroundColor Yellow
npx vitepress build

if ($LASTEXITCODE -ne 0) {
    Write-Host "  构建失败，退出码: $LASTEXITCODE" -ForegroundColor Red
    exit $LASTEXITCODE
}
Write-Host "  构建完成 → $DistDir" -ForegroundColor Green

# 步骤 4：本地预览（如果指定）
if ($Preview) {
    Write-Host ""
    Write-Host "[4/5] 启动本地预览服务器..." -ForegroundColor Yellow
    npx vitepress preview
    exit 0
}

# 步骤 5：仅构建（如果指定）
if ($BuildOnly) {
    Write-Host ""
    Write-Host "[完成] 仅构建模式，跳过部署。" -ForegroundColor Green
    Write-Host "  构建产物位于: $DistDir" -ForegroundColor Gray
    exit 0
}

# 步骤 4-5：部署到 GitHub Pages
Write-Host ""
Write-Host "[4/5] 准备部署..." -ForegroundColor Yellow

# 检查 dist 目录
if (-not (Test-Path $DistDir)) {
    Write-Host "  错误：构建产物目录不存在: $DistDir" -ForegroundColor Red
    exit 1
}

# 检查是否在 Git 仓库中
$isGitRepo = Test-Path "$PSScriptRoot\..\..\.git"
if (-not $isGitRepo) {
    Write-Host "  错误：当前不在 Git 仓库中" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "[5/5] 部署到 GitHub Pages..." -ForegroundColor Yellow
Write-Host "  目标分支: $DeployBranch" -ForegroundColor Gray

# 使用 gh-pages 工具或直接推送
# 方案 A：使用 gh-pages npm 包（推荐）
try {
    npx gh-pages --help 2>$null
    Write-Host "  使用 gh-pages 工具部署..." -ForegroundColor Gray
    npx gh-pages -d $DistDir -b $DeployBranch -m "deploy: Avis site update [skip ci]"
}
catch {
    # 方案 B：手动推送到 gh-pages 分支
    Write-Host "  gh-pages 工具不可用，使用手动推送方式..." -ForegroundColor Gray

    $tempDir = "$env:TEMP\avis-gh-pages-deploy"
    if (Test-Path $tempDir) {
        Remove-Item -Recurse -Force $tempDir
    }

    git clone --branch $DeployBranch $RepoUrl $tempDir 2>$null
    if ($LASTEXITCODE -ne 0) {
        # 如果 gh-pages 分支不存在，创建孤儿分支
        New-Item -ItemType Directory -Force -Path $tempDir | Out-Null
        Set-Location $tempDir
        git init
        git checkout --orphan $DeployBranch
    }

    # 清空并复制构建产物
    Get-ChildItem $tempDir -Exclude '.git' | Remove-Item -Recurse -Force
    Copy-Item -Path "$DistDir\*" -Destination $tempDir -Recurse -Force

    Set-Location $tempDir
    git add -A
    git commit -m "deploy: Avis site update [skip ci]"
    git push origin $DeployBranch --force

    # 清理
    Set-Location $PSScriptRoot\..\..
    Remove-Item -Recurse -Force $tempDir
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  部署完成！" -ForegroundColor Green
Write-Host "  https://avis-aerospace.github.io/avis-web" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
（内容由AI生成，仅供参考）
