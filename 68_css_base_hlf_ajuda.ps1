$ErrorActionPreference = "Stop"
$CssFile = "D:\GitHub\HLF\assets\css\ajuda.css"; $CssDir = Split-Path $CssFile -Parent
if (-not (Test-Path $CssDir)) { New-Item -ItemType Directory -Path $CssDir -Force | Out-Null }
$css = @"
:root { --bg:#f7f9fc; --surface:#fff; --text:#101828; --muted:#667085; --accent:#1f6f4a; --accent-2:#154d34; --accent-soft:#edf7f1; --line:rgba(16,24,40,.08); --radius:12px; --maxw:860px; }
*,*::before,*::after { box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { margin:0; background:var(--bg); color:var(--text); font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; line-height:1.8; -webkit-font-smoothing:antialiased; }
a { color:var(--accent); text-decoration:none; }
a:hover { color:var(--accent-2); text-decoration:underline; }
.container,.wrapper,.content,main,section>div { width:min(100% - 32px,var(--maxw)); margin-inline:auto; }
section { padding:56px 0; }
h1,h2,h3,h4 { margin:0 0 16px; line-height:1.12; letter-spacing:-0.03em; color:var(--text); }
h1 { font-size:clamp(2rem,4vw,3.4rem); }
h2 { font-size:clamp(1.3rem,3vw,2rem); margin-top:24px; }
h3 { font-size:clamp(1.1rem,2vw,1.3rem); margin-top:18px; }
p,li { color:var(--muted); font-size:1rem; }
strong { color:var(--text); }
.card,.box,.panel,article,aside { background:var(--surface); border:1px solid var(--line); border-radius:var(--radius); padding:24px; }
ul,ol { padding-left:20px; }
li+li { margin-top:6px; }
blockquote { margin:24px 0; padding:16px 20px; border-left:4px solid var(--accent); background:var(--surface); color:var(--muted); }
hr { border:0; border-top:1px solid var(--line); margin:28px 0; }
footer { margin-top:40px; padding:24px 0 40px; border-top:1px solid var(--line); background:#fff; }
footer p,footer li,footer a { color:var(--muted); }
@media(max-width:640px) { .container,.wrapper,.content,main,section>div { width:min(100% - 24px,var(--maxw)); } .card,.box,.panel,article,aside { padding:20px; } }
"@
Set-Content -Path $CssFile -Value $css -Encoding UTF8; Write-Host "CSS base gravado em: $CssFile"
