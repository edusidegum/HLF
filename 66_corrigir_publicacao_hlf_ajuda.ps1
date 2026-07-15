$ErrorActionPreference = "Stop"
$File = "D:\GitHub\HLF\ajuda.html"; $PublishedUrl = "https://edusidegum.github.io/HLF/ajuda.html"
if (-not (Test-Path $File)) { throw "Arquivo nao encontrado: $File" }
$html = Get-Content $File -Raw -Encoding UTF8
$canonicalPattern = '<link\s+rel=["'']canonical["''][^>]*href=["''][^"'']*["''][^>]*>'
$ogUrlPattern = '<meta\s+property=["'']og:url["''][^>]*content=["''][^"'']*["''][^>]*>'
$hasCanonical = [regex]::IsMatch($html, '<link\s+rel=["'']canonical["'']', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
$hasOgUrl = [regex]::IsMatch($html, '<meta\s+property=["'']og:url["'']', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
if ($hasCanonical) { $html = [regex]::Replace($html, $canonicalPattern, '<link rel="canonical" href="' + $PublishedUrl + '">', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase) }
if (-not $hasCanonical) { if ($html -match "</head>") { $html = $html -replace "</head>", ('    <link rel="canonical" href="' + $PublishedUrl + '">' + "`r`n</head>") } else { throw "Nao foi possivel localizar </head> para canonical." } }
if ($hasOgUrl) { $html = [regex]::Replace($html, $ogUrlPattern, '<meta property="og:url" content="' + $PublishedUrl + '">', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase) }
if (-not $hasOgUrl) { if ($html -match "</head>") { $html = $html -replace "</head>", ('    <meta property="og:url" content="' + $PublishedUrl + '">' + "`r`n</head>") } else { throw "Nao foi possivel localizar </head> para og:url." } }
Set-Content -Path $File -Value $html -Encoding UTF8; Write-Host "canonical e og:url corrigidos em $File"
