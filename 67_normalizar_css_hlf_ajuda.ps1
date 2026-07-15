$ErrorActionPreference = "Stop"
$File = "D:\GitHub\HLF\ajuda.html"; $TargetCssHref = "assets/css/ajuda.css"
if (-not (Test-Path $File)) { throw "Arquivo nao encontrado: $File" }
$html = Get-Content $File -Raw -Encoding UTF8
$pattern = '<link[^>]+rel=["'']stylesheet["''][^>]+href=["'']([^"'']*(?:style|styles|ajuda)\.css)["''][^>]*>'
$replacement = '<link rel="stylesheet" href="' + $TargetCssHref + '">'
$injectedLink = '    <link rel="stylesheet" href="' + $TargetCssHref + '">'
$matched = [regex]::IsMatch($html, $pattern, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
if ($matched) { $html = [regex]::Replace($html, $pattern, $replacement, [System.Text.RegularExpressions.RegexOptions]::IgnoreCase) }
else { if ($html -match "</head>") { $html = $html -replace "</head>", ($injectedLink + "`r`n</head>") } else { throw "Nao foi possivel localizar </head> no arquivo." } }
Set-Content -Path $File -Value $html -Encoding UTF8; Write-Host "CSS ajuda normalizado para: $TargetCssHref"
