$ErrorActionPreference = "Stop"
$File = "D:\GitHub\HLF\links.html"
if (-not (Test-Path $File)) { throw "Arquivo nao encontrado: $File" }
$html = Get-Content $File -Raw -Encoding UTF8
Write-Host "`n=== ARQUIVO ==="; Write-Host $File
Write-Host "`n=== TITLE ==="; if ($html -match '<title>(.*?)</title>') { $matches[1] }
Write-Host "`n=== CANONICAL ==="
[regex]::Matches($html, '<link\s+rel=["'']canonical["'']\s+href=["''](.*?)["'']', "IgnoreCase") | ForEach-Object { $_.Groups[1].Value }
Write-Host "`n=== OG:URL ==="
[regex]::Matches($html, '<meta\s+property=["'']og:url["'']\s+content=["''](.*?)["'']', "IgnoreCase") | ForEach-Object { $_.Groups[1].Value }
Write-Host "`n=== STYLESHEET LINKS ==="
[regex]::Matches($html, '<link[^>]+rel=["'']stylesheet["''][^>]+href=["'']([^"'']+)["'']', "IgnoreCase") | ForEach-Object { $_.Groups[1].Value }
Write-Host "`n=== REFS LOCAIS ==="
[regex]::Matches($html, '(?:src|href)\s*=\s*["'']([^"'']+)["'']', "IgnoreCase") | ForEach-Object { $_.Groups[1].Value } |
    Where-Object { $_ -notmatch "^https?://" -and $_ -notmatch "^mailto:" -and $_ -notmatch "^tel:" -and $_ -notmatch "^#" } |
    Sort-Object -Unique
Write-Host "`n=== RAW GITHUB ==="
[regex]::Matches($html, "https?://raw\.githubusercontent\.com[^""''\s<>]+", "IgnoreCase") | ForEach-Object { $_.Value }
