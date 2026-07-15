$ErrorActionPreference = "Stop"

$File = "D:\GitHub\HLF\privacidade.html"
$ExpectedUrl = "https://edusidegum.github.io/HLF/privacidade.html"
$ExpectedCss = "assets/css/privacidade.css"

if (-not (Test-Path $File)) {
    throw "Arquivo nao encontrado: $File"
}

$html = Get-Content $File -Raw -Encoding UTF8

Write-Host "`n=== VALIDACAO FINAL ==="

if ($html -match "raw\.githubusercontent\.com") {
    Write-Host "ERRO: ainda existe raw.githubusercontent.com"
} else {
    Write-Host "OK: sem raw.githubusercontent.com"
}

if ($html -match "D:\GitHub" -or $html -match "d:/GitHub") {
    Write-Host "ERRO: ainda existe referencia local D:\GitHub"
} else {
    Write-Host "OK: sem referencia local D:\GitHub"
}

if ($html -match [regex]::Escape($ExpectedUrl)) {
    Write-Host "OK: URL publicada encontrada: $ExpectedUrl"
} else {
    Write-Host "ALERTA: URL publicada esperada nao encontrada: $ExpectedUrl"
}

if ($html -match [regex]::Escape($ExpectedCss)) {
    Write-Host "OK: CSS isolado encontrado: $ExpectedCss"
} else {
    Write-Host "ALERTA: CSS isolado nao encontrado: $ExpectedCss"
}

Write-Host "`n=== STYLESHEET LINKS ==="
[regex]::Matches($html, "<link[^>]+rel=[""']stylesheet[""'][^>]+href=[""']([^""']+)[""']", "IgnoreCase") |
    ForEach-Object { $_.Groups[1].Value }

Write-Host "`n=== ASSETS LOCAIS ==="
[regex]::Matches($html, "(?:src|href)\s*=\s*[""']([^""']+)[""']", "IgnoreCase") |
    ForEach-Object { $_.Groups[1].Value } |
    Where-Object { $_ -like "img/*" -or $_ -like "assets/*" -or $_ -like "css/*" } |
    Sort-Object -Unique
