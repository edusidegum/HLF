$ErrorActionPreference = 'Stop'

$File = 'D:\GitHub\HLF\perfil\perfil.html'
$ExpectedUrl = 'https://edusidegum.github.io/HLF/perfil/perfil.html'
$ExpectedCss = 'assets/css/perfil.css'

if (-not (Test-Path $File)) {
    throw "Arquivo não encontrado: $File"
}

$html = Get-Content $File -Raw -Encoding UTF8

Write-Host "`n=== VALIDAÇÃO FINAL ==="

if ($html -match 'raw\.githubusercontent\.com') {
    Write-Host 'ERRO: ainda existe raw.githubusercontent.com'
} else {
    Write-Host 'OK: sem raw.githubusercontent.com'
}

if ($html -match 'D:\GitHub' -or $html -match 'd:/GitHub') {
    Write-Host 'ERRO: ainda existe referência local D:\GitHub'
} else {
    Write-Host 'OK: sem referência local D:\GitHub'
}

if ($html -match [regex]::Escape($ExpectedUrl)) {
    Write-Host "OK: URL publicada encontrada: $ExpectedUrl"
} else {
    Write-Host "ALERTA: URL publicada esperada não encontrada: $ExpectedUrl"
}

if ($html -match [regex]::Escape($ExpectedCss)) {
    Write-Host "OK: CSS isolado encontrado: $ExpectedCss"
} else {
    Write-Host "ALERTA: CSS isolado não encontrado: $ExpectedCss"
}

Write-Host "`n=== REFS DE CSS ==="
[regex]::Matches($html, '<link[^>]+href=["'']([^"'']+)["'']', 'IgnoreCase') |
    ForEach-Object { $_.Groups[1].Value }

Write-Host "`n=== REFS DE IMG/JS ==="
[regex]::Matches($html, '(?:src|href)\s*=\s*["'']([^"'']+)["'']', 'IgnoreCase') |
    ForEach-Object { $_.Groups[1].Value } |
    Where-Object { $_ -like 'img/*' -or $_ -like 'assets/*' -or $_ -like 'css/*' } |
    Sort-Object -Unique