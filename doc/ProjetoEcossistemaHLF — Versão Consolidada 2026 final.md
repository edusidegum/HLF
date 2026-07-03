# Projeto Ecossistema HLF — Protocolo Oficial 2026 (Consolidado)

Este documento consolida e torna explícitas todas as diretrizes aprovadas para o ecossistema HLF. Preserva integralmente o conteúdo aprovado nas páginas-fonte (anti-simplificação) e padroniza SEO, indexação, performance, acessibilidade, estrutura de diretórios e templates. Substitui versões parciais anteriores, sem eliminar informações válidas.


## 0) Escopo e Objetivos
- Domínio raiz oficial: https://edusidegum.github.io/HLF/
- Objetivo: padronizar construção, revisão e publicação de páginas do ecossistema HLF, mantendo conteúdo editorial integral e otimizando somente marcação, SEO, performance, acessibilidade e rastreamento.
- Resultado esperado: cada página deve levar o visitante a um dos destinos finais (Trio de Saída): Cadastro (myHerbalife), Catálogo, WhatsApp (com origem).


## 1) Manifesto de Componentes Obrigatórios (Anti-Simplificação)
1. Header Topbar — identidade do distribuidor, navegação principal.
2. Hero Section — H1 único e subtítulo de contexto.
3. Context Content Block — conteúdo informativo aprovado (transposição integral; é proibido reduzir, reescrever ou omitir blocos editoriais, imagens, listas, certificados e CTAs aprovados).
4. Conversion Loop (Trio de Saída) — ver Seção 8.
5. Footer HLF — disclaimer, links legais e identidade do distribuidor.

Política “Otimizar ≠ Resumir”: otimizações permitidas são de semântica (H1–H6, sections), performance (preload, preconnect, lazy), acessibilidade (ARIA), e dados estruturados. Qualquer redução de conteúdo é proibida.


## 2) Estrutura de Diretórios (raiz do repositório HLF/)
```
HLF/
├── index.html
├── transformacao21/
│   └── index.html
├── hypedrink/
│   └── index.html
├── perfil/
│   ├── perfil.html
│   └── avaliacao.html   # noindex, follow (página dependente de estado)
├── cadastro/
│   └── cadastro.html
├── ajuda/
│   ├── ajuda.html
│   └── faq.html
├── components/          # fragmentos HTML reutilizáveis (topbar, footer, banners)
│   ├── header.html
│   └── footer.html
├── assets/
│   ├── css/
│   │   ├── style_green.css
│   │   ├── style_white.css
│   │   └── style_black.css
│   ├── js/
│   │   ├── bloco-incluir.js      # includes de header/footer e utilidades de UI
│   │   └── ui-helpers.js         # scripts de interface (não bloqueados no robots)
│   ├── fonts/
│   │   └── (arquivos .woff2 locais)
│   └── img/
│       └── (imagens .webp)
├── scripts/              # JS de negócio/decisão (bloqueado em robots)
│   └── bloco-proposta.js
├── data/                 # dados (JSON/CSV) — bloqueado em robots
│   └── ...
├── music/
│   └── ...
├── doc/                  # documentos legais — bloqueado em robots
│   └── ...
├── robots.txt
└── sitemap.xml
```

Observações:
- Caminhos absolutos para ativos compartilhados: use sempre https://edusidegum.github.io/HLF/... para CSS/JS/IMG/Fonts.
- Bloqueio de diretórios em robots.txt não impede carregamento pelo navegador — só desestimula rastreamento por bots de busca.


## 3) Templates Oficiais

### 3.1) Template HTML Base (Head + Header + Footer)
Aplicar em TODAS as páginas indexáveis, com variações controladas por variáveis da Seção 3.2.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>[TITLE] | Distribuidor Independente Herbalife</title>
  <meta name="description" content="[META_DESCRIPTION]">
  <meta name="author" content="Eduardo Sidegum — Distribuidor Independente Herbalife">

  <!-- Robots — PÁGINAS INDEXÁVEIS -->
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="bingbot" content="index, follow, max-image-preview:large">

  <!-- Canonical — sempre com arquivo .html explícito -->
  <link rel="canonical" href="https://edusidegum.github.io/HLF/[CANONICAL_PATH].html">

  <!-- Open Graph / Twitter Card -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="[OG_TITLE]"></meta>
  <meta property="og:description" content="[OG_DESCRIPTION]"></meta>
  <meta property="og:url" content="https://edusidegum.github.io/HLF/[CANONICAL_PATH].html"></meta>
  <meta property="og:image" content="https://edusidegum.github.io/HLF/img/[OG_IMAGE].webp"></meta>
  <meta property="og:locale" content="pt_BR"></meta>
  <meta name="twitter:card" content="summary_large_image">

  <!-- Preload de CSS e Fonte local -->
  <link rel="preload" as="style" href="https://edusidegum.github.io/HLF/assets/css/[THEME].css">
  <link rel="stylesheet" href="https://edusidegum.github.io/HLF/assets/css/[THEME].css">
  <link rel="preload" as="font" href="https://edusidegum.github.io/HLF/assets/fonts/[FONT_MAIN].woff2" type="font/woff2" crossorigin>

  <!-- Preload da imagem LCP (se aplicável) -->
  <link rel="preload" as="image" href="https://edusidegum.github.io/HLF/img/[LCP_IMAGE].webp">

  <!-- JSON-LD (usar @graph e IDs com base /HLF/) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://edusidegum.github.io/HLF/#person",
        "name": "Eduardo Sidegum",
        "jobTitle": "Distribuidor Independente Herbalife"
      },
      {
        "@type": "Organization",
        "@id": "https://edusidegum.github.io/HLF/#org",
        "name": "Eduardo Sidegum | Distribuidor Independente Herbalife",
        "url": "https://edusidegum.github.io/HLF/",
        "logo": {"@type":"ImageObject","url":"https://edusidegum.github.io/HLF/img/Herbalife-Logo.webp"}
      },
      {
        "@type": "WebSite",
        "@id": "https://edusidegum.github.io/HLF/#website",
        "url": "https://edusidegum.github.io/HLF/",
        "publisher": {"@id": "https://edusidegum.github.io/HLF/#org"}
      },
      {
        "@type": "WebPage",
        "@id": "https://edusidegum.github.io/HLF/[CANONICAL_PATH].html#webpage",
        "url": "https://edusidegum.github.io/HLF/[CANONICAL_PATH].html",
        "name": "[TITLE]",
        "isPartOf": {"@id": "https://edusidegum.github.io/HLF/#website"},
        "inLanguage": "pt-BR",
        "description": "[META_DESCRIPTION]"
      }
    ]
  }
  </script>

  <!-- Includes de utilidades de UI (caminhos absolutos) -->
  <script src="https://edusidegum.github.io/HLF/assets/js/bloco-incluir.js" defer></script>
</head>
<body>
  <!-- Header Topbar (components/header.html) -->
  <div data-include="/HLF/components/header.html" data-page-slug="[SLUG_WHATSAPP]"></div>

  <!-- Hero com H1 único -->
  <header class="hero">
    <h1>[H1]</h1>
    <p class="subtitle">[SUBTITLE]</p>
  </header>

  <!-- Context Content Block (conteúdo editorial aprovado, sem reduções) -->
  <main id="conteudo" role="main">
    [CONTEUDO_APROVADO_INTEGRAL]
  </main>

  <!-- Conversion Loop (Trio de Saída) -->
  <section class="conversion-loop">
    <a class="btn btn-primary" href="https://accounts.myherbalife.com/Account/Create?..." target="_blank" rel="noopener">⭐ Cliente Premium</a>
    <a class="btn" href="https://catalogoherbalife.com.br/edusidegum" target="_blank" rel="noopener">📖 Catálogo Oficial</a>
    <a class="btn btn-whatsapp" href="https://wa.me/5551999663200?text=Vim_da_Pagina_[SLUG_WHATSAPP]" target="_blank" rel="noopener">💬 WhatsApp</a>
  </section>

  <!-- Footer HLF (components/footer.html) -->
  <div data-include="/HLF/components/footer.html"></div>
</body>
</html>
```

Páginas não-indexáveis: substituir o bloco “Robots — PÁGINAS INDEXÁVEIS” por:
```html
<meta name="robots" content="noindex, follow">
<meta name="googlebot" content="noindex, follow">
<meta name="bingbot" content="noindex, follow">
```
E remover OG/Twitter/JSON-LD se forem desnecessários (ex.: avaliacao.html).


### 3.2) Variáveis por Página (placeholders)
- [TITLE], [META_DESCRIPTION], [H1], [SUBTITLE]
- [CANONICAL_PATH] — caminho com pasta e arquivo (ex.: hypedrink/index)
- [OG_TITLE], [OG_DESCRIPTION], [OG_IMAGE]
- [LCP_IMAGE] — imagem LCP em /HLF/img/
- [THEME] — um de: style_green.css | style_white.css | style_black.css
- [FONT_MAIN] — arquivo .woff2 principal (em assets/fonts/)
- [SLUG_WHATSAPP] — formato Vim_da_Pagina_[SlugPascalCase]
- [CONTEUDO_APROVADO_INTEGRAL] — transposição literal do conteúdo aprovado


### 3.3) Regras de SEO e Publicação
- Domínio raiz do projeto em todas as URLs absolutas: https://edusidegum.github.io/HLF/
- Canonical SEMPRE com arquivo .html explícito.
- OG/Twitter obrigatórios em páginas indexáveis.
- JSON-LD com @graph e todos os @id/url baseados em /HLF/.
- Robots por tipo de página:
  - Conteúdo público: index, follow
  - Dependente de estado (ex.: perfil/avaliacao.html): noindex, follow (não entra no sitemap)
  - Valores explícitos/tabelas: noindex, nofollow (não entra no sitemap)
  - Scripts e dados: bloquear em robots.txt; em scripts de negócio, adicionar comentário de proteção na primeira linha.
- GitHub Pages: é proibido usar .htaccess ou cabeçalhos HTTP (X-Robots-Tag). Somente meta tags e robots.txt.


## 4) Templates de CSS (Temas)
Localização: HLF/assets/css/
- style_green.css — tema verde (padrão Herbalife)
- style_white.css — alto contraste sobre fundo claro
- style_black.css — dark mode alto contraste

Regras gerais:
- Estruturar tokens CSS em :root (cores, espaçamentos, tipografia).
- Compatíveis entre si; nenhum tema deve alterar a ordem ou presença dos componentes obrigatórios.
- Não remover blocos de conteúdo; apenas estilizar apresentação.


## 5) Fontes Locais (assets/fonts)
- Formato preferencial: .woff2
- Preload da fonte principal no <head> com crossorigin.
- Evitar “flash of invisible text” (FOIT): usar font-display: swap no CSS do tema.

Exemplo no head:
```html
<link rel="preload" as="font" href="https://edusidegum.github.io/HLF/assets/fonts/Inter-Variable.woff2" type="font/woff2" crossorigin>
```
E no CSS do tema:
```css
@font-face {
  font-family: 'Inter';
  src: url('/HLF/assets/fonts/Inter-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```


## 6) Rastreamento (GTM, GA4, Meta Pixel)
- Variáveis de deploy: $GTM_ID, $GA4_ID, $META_PIXEL_ID
- Ordem de injeção no <head>:
  1) GTM (dataLayer + script)
  2) GA4 (se não via GTM)
  3) Meta Pixel (noscript no <body>)
- Se variável ausente: injetar `<!-- Tracking ID Missing: [VARIAVEL] -->` para depuração.


## 7) Robots.txt — Modelo Canônico
Publicar em HLF/robots.txt. Caminhos explícitos sob /HLF/ para evitar ambiguidade:
```
# Robots.txt — Ecossistema HLF
User-agent: *
Allow: /
Disallow: /HLF/doc/
Disallow: /HLF/data/
Disallow: /HLF/scripts/

User-agent: Googlebot
Allow: /
Disallow: /HLF/doc/
Disallow: /HLF/data/
Disallow: /HLF/scripts/

User-agent: bingbot
Allow: /
Disallow: /HLF/doc/
Disallow: /HLF/data/
Disallow: /HLF/scripts/

Sitemap: https://edusidegum.github.io/HLF/sitemap.xml
```


## 8) Conversion Loop — Trio de Saída (Obrigatório)
- Primária: Botão de Cadastro (link oficial myHerbalife).
- Secundária: Link para Catálogo Digital (https://catalogoherbalife.com.br/edusidegum).
- Suporte: CTA WhatsApp com string de origem `?text=Vim_da_Pagina_[SLUG]`.

Observação: em componentes reutilizáveis (header/footer), o [SLUG] deve ser configurável (data-page-slug) ou definido manualmente por página.


## 9) Mapa de Indexação e Sitemap
Tabela resumida (exemplos principais):
- /index.html — index, follow — incluir no sitemap
- /transformacao21/index.html — index, follow — incluir no sitemap
- /hypedrink/index.html — index, follow — incluir no sitemap
- /perfil/perfil.html — index, follow — incluir no sitemap
- /perfil/avaliacao.html — noindex, follow — excluir do sitemap
- /cadastro/cadastro.html — index, follow — incluir no sitemap
- /menu/tabelas/tabelahlfpremium2026.html — noindex, nofollow — excluir do sitemap
- /menu/programashlf2026.html — noindex, nofollow — excluir do sitemap
- /doc/* — bloqueado via robots.txt
- /scripts/* — bloqueado via robots.txt
- /data/* — bloqueado via robots.txt

Sitemap deve listar apenas URLs indexáveis, sempre com arquivo .html explícito.


## 10) Páginas Especiais
- perfil/avaliacao.html — depende de localStorage; publicar com `<meta name="robots" content="noindex, follow">` e sem canonical. Botões e footer seguem padrão; OG/Twitter/JSON-LD são opcionais.
- Páginas com valores explícitos (tabelas de preço, programas) — publicar com `<meta name="robots" content="noindex, nofollow">`; não incluir OG/Twitter; remover canonical.


## 11) Scripts e Dados Protegidos
- Diretório /HLF/scripts/ bloqueado no robots.txt.
- Em cada arquivo de lógica de negócio (ex.: bloco-proposta.js), adicionar na primeira linha:
```js
/* HLF — Arquivo protegido: noindex, nofollow */
```
- Diretório /HLF/data/ bloqueado no robots.txt.


## 12) Topbar e Footer (components/)
- header.html deve conter: logo, navegação principal, CTA WhatsApp com origem configurável (`data-page-slug`).
- footer.html deve conter: identificação do distribuidor, disclaimer oficial, links legais (`/HLF/doc/...`), CTA WhatsApp com origem configurável e links para manifesto/contato.


## 13) Boas Práticas de Performance e Acessibilidade
- Imagens: formato .webp; LCP com `fetchpriority="high"` e `preload`; demais com `loading="lazy"`; atributos `width`, `height`, `alt` descritivo; `decoding="async"`.
- CSS: minificar para produção; manter versão fonte no repositório.
- JS: defer/async quando possível; evitar bloqueio de render.
- Acessibilidade: headings em ordem lógica; ARIA onde necessário; foco visível; contraste adequado; labels e alt text significativos.


## 14) Itens de Governança e Implantação
- Commits de migração devem atualizar: canonical, og:url, JSON-LD (@id, url), links internos, paths de ativos, slug de WhatsApp, robots meta (conforme tipo), inclusão no sitemap quando aplicável.
- Páginas migradas do domínio sem /HLF/ devem ter todos os apontamentos corrigidos.
- Search Console: manter propriedade de `https://edusidegum.github.io/HLF/` e enviar sitemap atualizado.


## 15) Anexos

### Anexo A — Template robots.txt (publicável sem alterações)
```
# Robots.txt — Ecossistema HLF
User-agent: *
Allow: /
Disallow: /HLF/doc/
Disallow: /HLF/data/
Disallow: /HLF/scripts/

User-agent: Googlebot
Allow: /
Disallow: /HLF/doc/
Disallow: /HLF/data/
Disallow: /HLF/scripts/

User-agent: bingbot
Allow: /
Disallow: /HLF/doc/
Disallow: /HLF/data/
Disallow: /HLF/scripts/

Sitemap: https://edusidegum.github.io/HLF/sitemap.xml
```

### Anexo B — Template HTML Base (copiável)
Reutilizar o template integral da Seção 3.1, preenchendo os placeholders da Seção 3.2.

### Anexo C — Tabela de Variáveis por Página
| Variável | Descrição | Exemplo |
|---|---|---|
| [TITLE] | Título da página | Hype Drink — Energia Inteligente |
| [META_DESCRIPTION] | Description única (≤ 160 chars) | Nutrição de alta performance... |
| [H1] | Heading principal (1 único) | A Experiência Hype Drink |
| [SUBTITLE] | Subtítulo do hero | Energia, foco e desempenho |
| [CANONICAL_PATH] | Caminho com pasta/arquivo (sem .html) | hypedrink/index |
| [OG_TITLE] | Título para OG/Twitter | Hype Drink — Energia Inteligente |
| [OG_DESCRIPTION] | Descrição OG/Twitter (≤ 155 chars) | Desempenho com suporte científico... |
| [OG_IMAGE] | Nome da imagem OG (em /img) | hypedrink_og |
| [LCP_IMAGE] | Imagem LCP (em /img) | hypedrink_hero |
| [THEME] | Tema CSS | style_green.css |
| [FONT_MAIN] | Fonte principal (woff2) | Inter-Variable.woff2 |
| [SLUG_WHATSAPP] | Origem do WhatsApp | Vim_da_Pagina_Hypedrink |


---

Este documento é a versão consolidada e explícita do Projeto Ecossistema HLF 2026. Em caso de conflito com versões anteriores, prevalece esta. Qualquer dúvida de aplicação deve ser resolvida priorizando: (1) preservação integral do conteúdo editorial aprovado; (2) regras de SEO/indexação por tipo; (3) domínio e caminhos canônicos com /HLF/ e arquivo .html explícito; (4) trio de saída obrigatório.