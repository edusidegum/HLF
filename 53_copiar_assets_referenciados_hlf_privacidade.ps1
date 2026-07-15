$ErrorActionPreference = "Stop"

$HtmlFile   = "D:\GitHub\HLF\privacidade.html"
$TargetRoot = "D:\GitHub\HLF"

$SourceRoots = @(
    "D:\GitHub\privacidade",
    "D:\GitHub\edusidegum",
    "D:\GitHub"
) | Where-Object { Test-Path $_ }

if (-not (Test-Path $HtmlFile)) {
    Write-Host "AVISO: privacidade.html nao encontrado em $HtmlFile. Pulando copia de assets."
    exit 0
}

$html = Get-Content $HtmlFile -Raw -Encoding UTF8

$refs = [regex]::Matches($html, '(?:src|href)\s*=\s*[""'']([^""'']+)[""'']', "IgnoreCase") |
    ForEach-Object { $_.Groups[1].Value } |
    Where-Object {
        $_ -notmatch "^https?://" -and
        $_ -notmatch "^mailto:" -and
        $_ -notmatch "^tel:" -and
        $_ -notmatch "^#" -and
        ( $_ -like "img/*" -or $_ -like "assets/*" -or $_ -like "css/*" )
    } |
    Sort-Object -Unique

if (-not $refs) {
    Write-Host "Nenhum asset local referenciado em privacidade.html."
    exit 0
}

foreach ($rel in $refs) {
    $found = $null
    foreach ($root in $SourceRoots) {
        $candidate = Join-Path $root $rel
        if (Test-Path $candidate) {
            $found = $candidate
            break
        }
    }
    if (-not $found) {
        Write-Warning "Asset nao encontrado nas origens: $rel"
        continue
    }
    $dst = Join-Path $TargetRoot $rel
    $dstDir = Split-Path $dst -Parent
    if (-not (Test-Path $dstDir)) {
        New-Item -ItemType Directory -Path $dstDir -Force | Out-Null
    }
    Copy-Item $found $dst -Force
    Write-Host "Copiado: $rel"
}
