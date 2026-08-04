
## Mapeamento Página ↔ Schema ↔ Indexação

| Página | Schema Principal | Indexação |
|--------|------------------|-----------|
| Home (`index.html`) | `LocalBusiness` + `mainEntity` | Sim |
| Hype Drink (`hypedrink/`) | `Product` + `mainEntity` | Sim |
| Perfil (`perfil/perfil.html`) | `WebApplication` | Não |
| Cadastro (`cadastro.html`) | `WebApplication` | Não |
| Política de Privacidade | `WebPage` | Sim |

## Cláusulas Pétreas

1. **Imutabilidade de dados:** fórmulas, métricas, tabelas de preços e cálculos de custo por refeição são invioláveis.
2. **Conformidade Herbalife:** páginas com valores (`/perfil/`, `/cadastro.html`) permanecem em `noindex, nofollow` com bloqueio total para todos os crawlers, incluindo IA.
3. **Zero emojis** em qualquer página. Uso exclusivo de ícones via CSS/SVG.
4. **Imagens:** exclusivamente WebP com EXIF higienizado.
5. **Disclaimer:** "Distribuidor Independente Herbalife" visível em todas as páginas.
6. **Funil sagrado:** três saídas. Nenhuma outra.

## Instalação e Deploy

### Pré-requisitos

- Conta GitHub
- Git instalado
- Diretório de trabalho: `D:\Eduardo\GitHub\HLF\`

### Deploy
```bash
git init
git add .
git commit -m "HLF Ecosystem Level 5 - Vs4"
git remote add origin https://github.com/edusidegum/HLF.git
git branch -M main
git push -u origin main