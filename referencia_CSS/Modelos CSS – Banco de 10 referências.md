A seguir estão 10 arquivos CSS-base para você salvar em `d:/GitHub/ModelosCSS` como `modelo1.css` até `modelo10.css`. Cada modelo foi pensado como uma direção visual diferente, mas todos mantêm uma estrutura útil para reutilização em GitHub.

## modelo1.css — SaaS dark premium
```css
:root {
  --bg: #0b0f14;
  --surface: #111722;
  --surface-2: #151c29;
  --text: #f4f7fb;
  --muted: #9aa6b2;
  --border: rgba(255,255,255,0.08);
  --accent: #7c5cff;
  --accent-2: #37d6c6;
  --shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
  --radius: 20px;
  --container: 1200px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top, rgba(124, 92, 255, 0.14), transparent 34%),
    radial-gradient(circle at right, rgba(55, 214, 198, 0.08), transparent 26%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }

.container {
  width: min(100% - 32px, var(--container));
  margin: 0 auto;
}

.section {
  padding: 96px 0;
}

.hero {
  padding: 120px 0 96px;
}

h1, h2, h3, h4 {
  margin: 0 0 16px;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

h1 { font-size: clamp(3rem, 7vw, 5.5rem); }
h2 { font-size: clamp(2rem, 4vw, 3.25rem); }
h3 { font-size: 1.4rem; }
p { margin: 0 0 16px; color: var(--muted); }

.grid {
  display: grid;
  gap: 24px;
}

.grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.card,
.panel {
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  backdrop-filter: blur(14px);
}

.card {
  padding: 28px;
}

.panel {
  padding: 32px;
  background: linear-gradient(180deg, var(--surface), var(--surface-2));
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 999px;
  border: 1px solid transparent;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease;
  box-shadow: 0 12px 30px rgba(124, 92, 255, 0.25);
}

.btn:hover { transform: translateY(-2px); }
.btn.secondary {
  background: transparent;
  border-color: var(--border);
  color: var(--text);
  box-shadow: none;
}

.input,
.select,
textarea {
  width: 100%;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.03);
  color: var(--text);
  outline: none;
}

.input:focus,
.select:focus,
textarea:focus {
  border-color: rgba(124, 92, 255, 0.6);
  box-shadow: 0 0 0 4px rgba(124, 92, 255, 0.14);
}

.kicker {
  display: inline-block;
  margin-bottom: 14px;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text);
  background: rgba(255,255,255,0.04);
  font-size: .86rem;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stat strong {
  font-size: 2rem;
  color: #fff;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(16px);
  background: rgba(11, 15, 20, 0.72);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(55, 214, 198, 0.12);
  color: #bff7f0;
  border: 1px solid rgba(55, 214, 198, 0.2);
}

@media (max-width: 900px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
  .hero { padding-top: 88px; }
}
```

## modelo2.css — Editorial minimal
```css
:root {
  --bg: #ffffff;
  --surface: #f6f4ef;
  --surface-2: #eeeeea;
  --text: #111111;
  --muted: #666666;
  --border: rgba(0,0,0,0.10);
  --accent: #000000;
  --shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  --radius: 6px;
  --container: 1180px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }

.container { width: min(100% - 32px, var(--container)); margin: 0 auto; }
.section { padding: 88px 0; }

h1, h2, h3, h4 {
  margin: 0 0 14px;
  line-height: 1.02;
  letter-spacing: -0.04em;
  font-weight: 700;
}

h1 { font-size: clamp(3rem, 8vw, 6rem); }
h2 { font-size: clamp(2rem, 5vw, 3.5rem); }
h3 { font-size: 1.35rem; }
p { margin: 0 0 16px; color: var(--muted); }

.grid { display: grid; gap: 24px; }
.grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.card,
.panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.card { padding: 24px; }
.panel { padding: 32px; background: var(--surface-2); }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 18px;
  border: 1px solid var(--accent);
  border-radius: var(--radius);
  background: var(--accent);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

.btn.secondary {
  background: transparent;
  color: var(--text);
}

.input,
.select,
textarea {
  width: 100%;
  padding: 14px 15px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: #fff;
  color: var(--text);
  outline: none;
}

.input:focus,
.select:focus,
textarea:focus {
  border-color: rgba(0,0,0,0.4);
}

.kicker {
  display: inline-block;
  margin-bottom: 14px;
  text-transform: uppercase;
  letter-spacing: .18em;
  font-size: .74rem;
  color: var(--muted);
}

.rule {
  height: 1px;
  background: var(--border);
  margin: 20px 0;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
}

.caption {
  font-size: .9rem;
  color: var(--muted);
}

@media (max-width: 900px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}
```

## modelo3.css — Industrial técnico
```css
:root {
  --bg: #121212;
  --surface: #1b1f24;
  --surface-2: #20262d;
  --text: #e8e8e8;
  --muted: #a0a7b3;
  --border: rgba(255,255,255,0.08);
  --accent: #d4a24c;
  --accent-2: #f0c676;
  --shadow: 0 18px 38px rgba(0,0,0,0.28);
  --radius: 12px;
  --container: 1200px;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.02), transparent 22%),
    var(--bg);
  color: var(--text);
  line-height: 1.65;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
.container { width: min(100% - 32px, var(--container)); margin: 0 auto; }
.section { padding: 84px 0; }

h1, h2, h3, h4 {
  margin: 0 0 14px;
  line-height: 1.08;
  letter-spacing: -0.025em;
}

h1 { font-size: clamp(2.8rem, 7vw, 5rem); }
h2 { font-size: clamp(2rem, 4vw, 3rem); }
p { margin: 0 0 16px; color: var(--muted); }

.grid { display: grid; gap: 24px; }
.grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.card,
.panel {
  background: linear-gradient(180deg, var(--surface), var(--surface-2));
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.card { padding: 26px; }
.panel { padding: 30px; }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 18px;
  border-radius: 10px;
  border: 1px solid transparent;
  background: var(--accent);
  color: #161616;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: .04em;
}

.btn.secondary {
  background: transparent;
  border-color: var(--border);
  color: var(--text);
}

.input,
.select,
textarea {
  width: 100%;
  padding: 14px 16px;
  background: #171b20;
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 10px;
  outline: none;
}

.input:focus,
.select:focus,
textarea:focus {
  border-color: rgba(212,162,76,0.7);
  box-shadow: 0 0 0 4px rgba(212,162,76,0.14);
}

.kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 14px;
  color: var(--accent-2);
  font-size: .82rem;
  text-transform: uppercase;
  letter-spacing: .16em;
}

.kicker::before {
  content: "";
  width: 18px;
  height: 2px;
  background: var(--accent-2);
}

.spec-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.spec-list li {
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}

.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(18,18,18,0.88);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

@media (max-width: 900px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}
```

## modelo4.css — Agência criativa clean
```css
:root {
  --bg: #faf7f2;
  --surface: #ffffff;
  --surface-2: #f2ece4;
  --text: #161616;
  --muted: #6d6d6d;
  --border: rgba(0,0,0,0.08);
  --accent: #b35cff;
  --accent-2: #101010;
  --shadow: 0 18px 34px rgba(0,0,0,0.08);
  --radius: 24px;
  --container: 1240px;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background:
    radial-gradient(circle at top left, rgba(179,92,255,0.08), transparent 28%),
    var(--bg);
  color: var(--text);
  line-height: 1.7;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
.container { width: min(100% - 32px, var(--container)); margin: 0 auto; }
.section { padding: 96px 0; }

h1, h2, h3, h4 {
  margin: 0 0 14px;
  letter-spacing: -0.04em;
  line-height: 1.03;
}

h1 { font-size: clamp(3rem, 7vw, 5.4rem); }
h2 { font-size: clamp(2rem, 4vw, 3.4rem); }
p { margin: 0 0 16px; color: var(--muted); }

.grid { display: grid; gap: 24px; }
.grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.card,
.panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.card { padding: 26px; }
.panel { padding: 34px; background: var(--surface-2); }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 20px;
  border-radius: 999px;
  background: var(--accent-2);
  color: #fff;
  font-weight: 700;
  border: 1px solid transparent;
}

.btn.secondary {
  background: transparent;
  color: var(--text);
  border-color: var(--border);
}

.input,
.select,
textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: #fff;
  color: var(--text);
  outline: none;
}

.input:focus,
.select:focus,
textarea:focus {
  border-color: rgba(179,92,255,0.55);
  box-shadow: 0 0 0 4px rgba(179,92,255,0.12);
}

.kicker {
  display: inline-block;
  margin-bottom: 14px;
  color: var(--accent);
  font-weight: 700;
  letter-spacing: .02em;
}

.case {
  border-left: 3px solid var(--accent);
  padding-left: 18px;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(250,247,242,0.86);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
}

@media (max-width: 900px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}
```

## modelo5.css — Glassmorphism soft
```css
:root {
  --bg: linear-gradient(135deg, #0f172a, #111827 60%, #0b1220);
  --surface: rgba(255,255,255,0.08);
  --surface-2: rgba(255,255,255,0.12);
  --text: #ffffff;
  --muted: rgba(255,255,255,0.72);
  --border: rgba(255,255,255,0.14);
  --accent: #66e3ff;
  --accent-2: #8b5cf6;
  --shadow: 0 20px 60px rgba(0,0,0,0.3);
  --radius: 24px;
  --container: 1180px;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.65;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
.container { width: min(100% - 32px, var(--container)); margin: 0 auto; }
.section { padding: 92px 0; }

h1, h2, h3, h4 {
  margin: 0 0 14px;
  line-height: 1.04;
  letter-spacing: -0.03em;
}

h1 { font-size: clamp(3rem, 7vw, 5.5rem); }
h2 { font-size: clamp(2rem, 4vw, 3.2rem); }
p { margin: 0 0 16px; color: var(--muted); }

.grid { display: grid; gap: 24px; }
.grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.card,
.panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.card { padding: 26px; }
.panel { padding: 32px; background: var(--surface-2); }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
  font-weight: 700;
  border: 0;
}

.btn.secondary {
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--border);
}

.input,
.select,
textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: rgba(255,255,255,0.08);
  color: #fff;
  outline: none;
}

.input::placeholder,
textarea::placeholder { color: rgba(255,255,255,0.5); }

.input:focus,
.select:focus,
textarea:focus {
  border-color: rgba(102,227,255,0.65);
  box-shadow: 0 0 0 4px rgba(102,227,255,0.14);
}

.kicker {
  display: inline-block;
  margin-bottom: 14px;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(255,255,255,0.08);
  border: 1px solid var(--border);
  color: #d8f9ff;
  font-size: .85rem;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(15,23,42,0.72);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

@media (max-width: 900px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}
```

## modelo6.css — Brutalist moderno
```css
:root {
  --bg: #f3f0e8;
  --surface: #ffffff;
  --surface-2: #ece6d8;
  --text: #111111;
  --muted: #444444;
  --border: #111111;
  --accent: #ff4d2e;
  --accent-2: #111111;
  --shadow: 6px 6px 0 #111111;
  --radius: 0px;
  --container: 1180px;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
.container { width: min(100% - 32px, var(--container)); margin: 0 auto; }
.section { padding: 84px 0; }

h1, h2, h3, h4 {
  margin: 0 0 12px;
  line-height: 0.98;
  letter-spacing: -0.05em;
  text-transform: uppercase;
}

h1 { font-size: clamp(3rem, 8vw, 6rem); }
h2 { font-size: clamp(2rem, 5vw, 3.6rem); }
p { margin: 0 0 16px; color: var(--muted); }

.grid { display: grid; gap: 20px; }
.grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.card,
.panel {
  background: var(--surface);
  border: 2px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.card { padding: 24px; }
.panel { padding: 30px; background: var(--surface-2); }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  background: var(--accent);
  color: #111;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: .04em;
  box-shadow: 4px 4px 0 var(--border);
}

.btn.secondary {
  background: #fff;
  color: var(--text);
}

.input,
.select,
textarea {
  width: 100%;
  padding: 14px 15px;
  border: 2px solid var(--border);
  border-radius: var(--radius);
  background: #fff;
  color: var(--text);
  outline: none;
}

.input:focus,
.select:focus,
textarea:focus {
  outline: 3px solid var(--accent);
  outline-offset: 2px;
}

.kicker {
  display: inline-block;
  margin-bottom: 14px;
  padding: 6px 10px;
  background: #fff;
  border: 2px solid var(--border);
  text-transform: uppercase;
  letter-spacing: .14em;
  font-size: .78rem;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(243,240,232,0.96);
  border-bottom: 2px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
}

@media (max-width: 900px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}
```

## modelo7.css — Corporate premium
```css
:root {
  --bg: #f7f8fa;
  --surface: #ffffff;
  --surface-2: #eef2f7;
  --text: #101828;
  --muted: #667085;
  --border: rgba(16,24,40,0.10);
  --accent: #1d4ed8;
  --accent-2: #2563eb;
  --shadow: 0 14px 28px rgba(16,24,40,0.08);
  --radius: 16px;
  --container: 1200px;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.68;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
.container { width: min(100% - 32px, var(--container)); margin: 0 auto; }
.section { padding: 88px 0; }

h1, h2, h3, h4 {
  margin: 0 0 14px;
  line-height: 1.06;
  letter-spacing: -0.03em;
}

h1 { font-size: clamp(2.8rem, 7vw, 5rem); }
h2 { font-size: clamp(2rem, 4vw, 3.2rem); }
p { margin: 0 0 16px; color: var(--muted); }

.grid { display: grid; gap: 24px; }
.grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.card,
.panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.card { padding: 24px; }
.panel { padding: 30px; background: var(--surface-2); }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 18px;
  border-radius: 12px;
  border: 1px solid transparent;
  background: var(--accent);
  color: #fff;
  font-weight: 700;
}

.btn.secondary {
  background: #fff;
  color: var(--text);
  border-color: var(--border);
}

.input,
.select,
textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #fff;
  color: var(--text);
  outline: none;
}

.input:focus,
.select:focus,
textarea:focus {
  border-color: rgba(29,78,216,0.5);
  box-shadow: 0 0 0 4px rgba(29,78,216,0.12);
}

.kicker {
  display: inline-block;
  margin-bottom: 14px;
  color: var(--accent);
  font-weight: 700;
  font-size: .88rem;
}

.metric {
  display: flex;
  gap: 16px;
  align-items: center;
}

.metric strong { font-size: 1.7rem; }

.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(247,248,250,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

@media (max-width: 900px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}
```

## modelo8.css — Product showcase lux
```css
:root {
  --bg: #0e0e10;
  --surface: #18181b;
  --surface-2: #202024;
  --text: #fafafa;
  --muted: #b0b0b0;
  --border: rgba(255,255,255,0.08);
  --accent: #c8a96a;
  --accent-2: #f5d38b;
  --shadow: 0 24px 60px rgba(0,0,0,0.34);
  --radius: 28px;
  --container: 1240px;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background:
    radial-gradient(circle at top, rgba(200,169,106,0.08), transparent 26%),
    var(--bg);
  color: var(--text);
  line-height: 1.65;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
.container { width: min(100% - 32px, var(--container)); margin: 0 auto; }
.section { padding: 96px 0; }

h1, h2, h3, h4 {
  margin: 0 0 14px;
  line-height: 1.02;
  letter-spacing: -0.04em;
}

h1 { font-size: clamp(3rem, 7vw, 5.6rem); }
h2 { font-size: clamp(2rem, 4vw, 3.2rem); }
p { margin: 0 0 16px; color: var(--muted); }

.grid { display: grid; gap: 24px; }
.grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.card,
.panel {
  background: linear-gradient(180deg, var(--surface), var(--surface-2));
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.card { padding: 26px; }
.panel { padding: 34px; }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 22px;
  border-radius: 999px;
  border: 1px solid transparent;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #111;
  font-weight: 800;
}

.btn.secondary {
  background: transparent;
  color: var(--text);
  border-color: var(--border);
}

.input,
.select,
textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: rgba(255,255,255,0.03);
  color: var(--text);
  outline: none;
}

.input:focus,
.select:focus,
textarea:focus {
  border-color: rgba(200,169,106,0.6);
  box-shadow: 0 0 0 4px rgba(200,169,106,0.14);
}

.kicker {
  display: inline-block;
  margin-bottom: 14px;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: .16em;
  font-size: .76rem;
}

.lux-line {
  width: 72px;
  height: 1px;
  background: linear-gradient(90deg, var(--accent), transparent);
  margin: 18px 0;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(14,14,16,0.88);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

@media (max-width: 900px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}
```

## modelo9.css — Dark mode interface
```css
:root {
  --bg: #0f1115;
  --surface: #161a22;
  --surface-2: #1d2230;
  --text: #e6e8ee;
  --muted: #8b93a7;
  --border: rgba(255,255,255,0.08);
  --accent: #6ea8fe;
  --accent-2: #88d3ff;
  --shadow: 0 16px 36px rgba(0,0,0,0.24);
  --radius: 14px;
  --container: 1180px;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
.container { width: min(100% - 32px, var(--container)); margin: 0 auto; }
.section { padding: 80px 0; }

h1, h2, h3, h4 {
  margin: 0 0 12px;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

h1 { font-size: clamp(2.8rem, 6vw, 5rem); }
h2 { font-size: clamp(1.9rem, 4vw, 3.1rem); }
p { margin: 0 0 16px; color: var(--muted); }

.grid { display: grid; gap: 20px; }
.grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.card,
.panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.card { padding: 22px; }
.panel { padding: 28px; background: var(--surface-2); }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 10px;
  border: 1px solid transparent;
  background: var(--accent);
  color: #07111f;
  font-weight: 800;
}

.btn.secondary {
  background: transparent;
  color: var(--text);
  border-color: var(--border);
}

.input,
.select,
textarea {
  width: 100%;
  padding: 13px 15px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: #121721;
  color: var(--text);
  outline: none;
}

.input:focus,
.select:focus,
textarea:focus {
  border-color: rgba(110,168,254,0.62);
  box-shadow: 0 0 0 4px rgba(110,168,254,0.12);
}

.kicker {
  display: inline-block;
  margin-bottom: 14px;
  padding: 7px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(255,255,255,0.03);
  color: var(--accent-2);
  font-size: .84rem;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background: rgba(110,168,254,0.14);
  border: 1px solid rgba(110,168,254,0.2);
  border-radius: 999px;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(15,17,21,0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
}

@media (max-width: 900px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}
```

## modelo10.css — White space editorial
```css
:root {
  --bg: #ffffff;
  --surface: #fbfbfb;
  --surface-2: #f4f4f4;
  --text: #111111;
  --muted: #7a7a7a;
  --border: rgba(0,0,0,0.08);
  --accent: #222222;
  --accent-2: #000000;
  --shadow: 0 10px 24px rgba(0,0,0,0.06);
  --radius: 10px;
  --container: 1260px;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.75;
}

a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
.container { width: min(100% - 32px, var(--container)); margin: 0 auto; }
.section { padding: 96px 0; }

h1, h2, h3, h4 {
  margin: 0 0 14px;
  line-height: 1.02;
  letter-spacing: -0.03em;
  font-family: Inter, system-ui, sans-serif;
}

h1 { font-size: clamp(3rem, 8vw, 6rem); }
h2 { font-size: clamp(2rem, 5vw, 3.6rem); }
p { margin: 0 0 16px; color: var(--muted); }

.grid { display: grid; gap: 24px; }
.grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

.card,
.panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.card { padding: 26px; }
.panel { padding: 34px; background: var(--surface-2); }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 20px;
  border-radius: 999px;
  background: var(--accent);
  color: #fff;
  font-family: Inter, system-ui, sans-serif;
  font-weight: 700;
  border: 1px solid transparent;
}

.btn.secondary {
  background: transparent;
  color: var(--text);
  border-color: var(--border);
}

.input,
.select,
textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: #fff;
  color: var(--text);
  outline: none;
  font-family: Inter, system-ui, sans-serif;
}

.input:focus,
.select:focus,
textarea:focus {
  border-color: rgba(34,34,34,0.45);
  box-shadow: 0 0 0 4px rgba(34,34,34,0.08);
}

.kicker {
  display: inline-block;
  margin-bottom: 14px;
  font-family: Inter, system-ui, sans-serif;
  text-transform: uppercase;
  letter-spacing: .18em;
  font-size: .74rem;
  color: var(--muted);
}

.excerpt {
  font-size: 1.05rem;
  max-width: 70ch;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
}

@media (max-width: 900px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}
```

## Sugestão de organização das pastas
```text
D:\GitHub\ModelosCSS
├─ modelo1.css
├─ modelo2.css
├─ modelo3.css
├─ modelo4.css
├─ modelo5.css
├─ modelo6.css
├─ modelo7.css
├─ modelo8.css
├─ modelo9.css
├─ modelo10.css
└─ README.md
```

## Observação de uso
- `modelo1.css`, `modelo5.css`, `modelo8.css` e `modelo9.css` são ótimos para SaaS e dashboards.
- `modelo2.css`, `modelo4.css` e `modelo10.css` funcionam muito bem para sites editoriais e institucionais.
- `modelo3.css` é forte para indústria, produto técnico e páginas B2B.
- `modelo6.css` é mais autoral e experimental.
- `modelo7.css` é a base mais segura para projetos corporativos.

Se quiser, no próximo passo eu posso montar um **README.md** pronto para o repositório, ou transformar esses 10 modelos em uma versão **mais completa com header, hero, cards, tabela e formulário padronizados**.