$ErrorActionPreference = "Stop"
$Target = "D:\GitHub\HLF\ajuda.html"
if (-not (Test-Path $Target)) { exit 0 }
$dir = Split-Path $Target -Parent; $name = [System.IO.Path]::GetFileNameWithoutExtension($Target)
$ext  = [System.IO.Path]::GetExtension($Target); $backup = Join-Path $dir ($name + "_Old2" + $ext)
if (Test-Path $backup) { Remove-Item $backup -Force }
Copy-Item $Target $backup -Force; Write-Host "Backup criado:" $backup
