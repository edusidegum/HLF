$ErrorActionPreference = 'Stop'

$File = 'D:\GitHub\HLF\perfil\perfil.html'
$Backup = 'D:\GitHub\HLF\perfil\perfil_Old2.html'
$TargetCssHref = 'assets/css/perfil.css'

if (-not (Test-Path $File)) {
    throw "Arquivo não encontrado: $File"
}

if (Test-Path $Backup) {
    Copy-Item $Backup $File -Force
}

$html = Get-Content $File -Raw -Encoding UTF8

$pattern = '<link[^>]+rel=["'']stylesheet["''][^>]+href=["'']([^"'']*(?:style|styles|perfil)\.css)["''][^>]*>'
$replacement = '<link rel="stylesheet" href="{0}">' -f $TargetCssHref
$injectedLink = '    <link rel="stylesheet" href="{0}">' -f $TargetCssHref

$matched = [regex]::IsMatch(
    $html,
    $pattern,
    [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
)

if ($matched) {
    $html = [regex]::Replace(
        $html,
        $pattern,
        $replacement,
        [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
    )
}
else {
    if ($html -match '</head>') {
        $html = $html -replace '</head>', ($injectedLink + "`r`n</head>")
    }
    else {
        throw 'Não foi possível localizar </head> no arquivo.'
    }
}

Set-Content -Path $File -Value $html -Encoding UTF8

Write-Host "Link de CSS normalizado para: $TargetCssHref"

Write-Host "`n=== STYLESHEET LINKS ENCONTRADOS ==="
[regex]::Matches(
    (Get-Content $File -Raw -Encoding UTF8),
    '<link[^>]+rel=["'']stylesheet["''][^>]*>',
    'IgnoreCase'
) | ForEach-Object { $_.Value }
