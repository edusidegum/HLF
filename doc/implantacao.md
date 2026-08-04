# Documento de Implantacao - Ecossistema HLF Nivel 5

## 1. Pre-requisitos
- Conta GitHub ativa
- Repositorio criado: HLF
- Git instalado e configurado localmente
- Acesso ao diretorio local: D:\Eduardo\GitHub\HLF\

## 2. Estrutura de Arquivos

HLF/
├── index.html
├── 404.html
├── cadastro.html
├── politicadeprivacidade.html
├── robots.txt
├── sitemap.xml
├── IMPLANTACAO.md
├── VALIDACAO.md
├── EXECUCAO.log
├── perfil/
│   └── perfil.html
├── hypedrink/
│   └── index.html
└── assets/
├── css/
│   └── style.css
├── js/
│   ├── dados-kits.js
│   ├── calculadora-kit.js
│   ├── contato.js
│   ├── bloco-incluir.js
│   └── bloco-protecao.js
└── img/
└── (imagens WebP) 


## 3. Passo a Passo para Deploy
1. Abrir terminal no diretorio D:\Eduardo\GitHub\HLF\
2. `git init`
3. `git add .`
4. `git commit -m "HLF Ecosystem Level 5 - Vs4"`
5. `git remote add origin https://github.com/edusidegum/HLF.git`
6. `git branch -M main`
7. `git push -u origin main`

## 4. Configuracao GitHub Pages
- Acessar o repositorio no GitHub
- Settings > Pages
- Source: Deploy from a branch
- Branch: main, folder: / (root)
- URL final: https://edusidegum.github.io/HLF/

## 5. Verificacao Pos-Deploy
- URL Principal: https://edusidegum.github.io/HLF/
- robots.txt: https://edusidegum.github.io/HLF/robots.txt
- sitemap.xml: https://edusidegum.github.io/HLF/sitemap.xml
- Testar navegacao em todas as paginas
- Validar JSON-LD no Rich Results Test do Google
- Validar Lighthouse (Metas: INP < 200ms, CLS = 0, LCP < 2.5s)

## 6. Placeholders a Substituir
- `[GA4_MEASUREMENT_ID]` em assets/js/bloco-incluir.js
- `[GTM_CONTAINER_ID]` em assets/js/bloco-incluir.js

## 7. Manutencao
- Atualizar data de desenvolvimento no footer em caso de alteracoes estruturais
- Revisao trimestral obrigatoria (01/01, 01/04, 01/07, 01/10)
- Manter dados-kits.js inviolavel (gerar novo hash SHA-256 se houver alteracao autorizada de precos)