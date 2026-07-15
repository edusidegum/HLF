$ErrorActionPreference = "Stop"

$File = "D:\GitHub\HLF\index.html"
$ExpectedUrl = "https://edusidegum.github.io/HLF/index.html"
$ExpectedCss = "assets/css/style.css"

if (-not (Test-Path $File)) { throw "Arquivo nao encontrado: $File" }

$html = Get-Content $File -Raw -Encoding UTF8

Write-Host "`n=== VALIDACAO FINAL ==="

if ($html -match "raw\.githubusercontent\.com") { Write-Host "ERRO: raw.githubusercontent.com" } else { Write-Host "OK: sem raw.githubusercontent.com" }
if ($html -match "D:\GitHub" -or $html -match "d:/GitHub") { Write-Host "ERRO: referencia local D:\GitHub" } else { Write-Host "OK: sem referencia local D:\GitHub" }
if ($html -match [regex]::Escape($ExpectedUrl)) { Write-Host "OK: URL publicada encontrada: $ExpectedUrl" } else { Write-Host "ALERTA: URL publicada nao encontrada: $ExpectedUrl" }
if ($html -match [regex]::Escape($ExpectedCss)) { Write-Host "OK: CSS isolado encontrado: $ExpectedCss" } else { Write-Host "ALERTA: CSS isolado nao encontrado: $ExpectedCss" }

Write-Host "`n=== STYLESHEET LINKS ==="
[regex]::Matches($html, '<link[^>]+rel=["'']stylesheet["''][^>]+href=["'']([^"'']+)["'']', "IgnoreCase") | ForEach-Object { $_.Groups[1].Value }

Write-Host "`n=== RAW GITHUB REMANESCENTE ==="
[regex]::Matches($html, "https?://raw\.githubusercontent\.com[^""''\s<>]+", "IgnoreCase") | ForEach-Object { $_.Value }
