# Script PowerShell para copiar TODOS os assets do template Wiso
# Execute este script no diretório raiz do projeto (C:\Works\RosaBerardo)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  COPIA DE ASSETS DO TEMPLATE WISO" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se estamos no diretório correto
if (-not (Test-Path "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html")) {
    Write-Host "ERRO: Template Wiso não encontrado!" -ForegroundColor Red
    Write-Host "Certifique-se de executar este script no diretório raiz do projeto." -ForegroundColor Yellow
    exit 1
}

# Criar estrutura de pastas
Write-Host "Criando estrutura de pastas..." -ForegroundColor Yellow
$wisoPath = "site\assets\wiso"
New-Item -ItemType Directory -Force -Path "$wisoPath\css" | Out-Null
New-Item -ItemType Directory -Force -Path "$wisoPath\js" | Out-Null
New-Item -ItemType Directory -Force -Path "$wisoPath\fonts" | Out-Null
New-Item -ItemType Directory -Force -Path "$wisoPath\images" | Out-Null
New-Item -ItemType Directory -Force -Path "$wisoPath\audio" | Out-Null
Write-Host "✓ Estrutura criada" -ForegroundColor Green
Write-Host ""

# Copiar CSS
Write-Host "Copiando arquivos CSS..." -ForegroundColor Yellow
$cssSource = "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html\css"
$cssDest = "$wisoPath\css"
if (Test-Path $cssSource) {
    Copy-Item -Path "$cssSource\*" -Destination $cssDest -Recurse -Force
    $cssCount = (Get-ChildItem -Path $cssDest -Recurse -File).Count
    Write-Host "✓ $cssCount arquivos CSS copiados" -ForegroundColor Green
} else {
    Write-Host "✗ Pasta CSS não encontrada!" -ForegroundColor Red
}
Write-Host ""

# Copiar JS
Write-Host "Copiando arquivos JavaScript..." -ForegroundColor Yellow
$jsSource = "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html\js"
$jsDest = "$wisoPath\js"
if (Test-Path $jsSource) {
    Copy-Item -Path "$jsSource\*" -Destination $jsDest -Recurse -Force
    $jsCount = (Get-ChildItem -Path $jsDest -Recurse -File).Count
    Write-Host "✓ $jsCount arquivos JS copiados" -ForegroundColor Green
} else {
    Write-Host "✗ Pasta JS não encontrada!" -ForegroundColor Red
}
Write-Host ""

# Copiar Fonts
Write-Host "Copiando arquivos de Fontes..." -ForegroundColor Yellow
$fontsSource = "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html\fonts"
$fontsDest = "$wisoPath\fonts"
if (Test-Path $fontsSource) {
    Copy-Item -Path "$fontsSource\*" -Destination $fontsDest -Recurse -Force
    $fontsCount = (Get-ChildItem -Path $fontsDest -Recurse -File).Count
    Write-Host "✓ $fontsCount arquivos de fontes copiados" -ForegroundColor Green
} else {
    Write-Host "✗ Pasta Fonts não encontrada!" -ForegroundColor Red
}
Write-Host ""

# Copiar Images
Write-Host "Copiando imagens (isso pode demorar...)..." -ForegroundColor Yellow
$imagesSource = "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html\images"
$imagesDest = "$wisoPath\images"
if (Test-Path $imagesSource) {
    Copy-Item -Path "$imagesSource\*" -Destination $imagesDest -Recurse -Force
    $imagesCount = (Get-ChildItem -Path $imagesDest -Recurse -File).Count
    Write-Host "✓ $imagesCount imagens copiadas" -ForegroundColor Green
} else {
    Write-Host "✗ Pasta Images não encontrada!" -ForegroundColor Red
}
Write-Host ""

# Copiar Audio (se existir)
Write-Host "Copiando arquivos de áudio..." -ForegroundColor Yellow
$audioSource = "templates-fonte\02-tpl-wiso\Wiso_html_tf_v.1.0.2\html\audio"
$audioDest = "$wisoPath\audio"
if (Test-Path $audioSource) {
    Copy-Item -Path "$audioSource\*" -Destination $audioDest -Recurse -Force
    $audioCount = (Get-ChildItem -Path $audioDest -Recurse -File).Count
    Write-Host "✓ $audioCount arquivos de áudio copiados" -ForegroundColor Green
} else {
    Write-Host "⚠ Pasta Audio não encontrada (pode não existir)" -ForegroundColor Yellow
}
Write-Host ""

# Resumo
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  RESUMO DA CÓPIA" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Assets copiados para: $wisoPath" -ForegroundColor Green
Write-Host ""
Write-Host "Próximos passos:" -ForegroundColor Yellow
Write-Host "1. Abra site/pages/wiso-cineasta.html no navegador" -ForegroundColor White
Write-Host "2. Abra DevTools (F12) e verifique o Console" -ForegroundColor White
Write-Host "3. Certifique-se de que NÃO há erros 404" -ForegroundColor White
Write-Host "4. Verifique se o layout está idêntico ao template original" -ForegroundColor White
Write-Host ""
Write-Host "Documentação completa em: site/docs/INTEGRACAO-WISO-COMPLETA.md" -ForegroundColor Cyan
Write-Host ""

