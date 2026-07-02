// bloco-proposta.js — Motor de Propostas Personalizadas HLF
// Uso: https://edusidegum.github.io/HLF/assets/js/bloco-proposta.js

/* ============================================================
   CATÁLOGO DE PRODUTOS — Preços reais HLF Premium 2026
   ============================================================ */
const CATALOGO = {
  shake1976:   { nome: 'Shake 1976g',        preco: 786, porcoes: 40,  categoria: 'shake' },
  shake550:    { nome: 'Shake 550g',         preco: 246, porcoes: 11,  categoria: 'shake' },
  shakesache:  { nome: 'Shake Sachê',        preco: 87,  porcoes: 3,   categoria: 'shake' },
  nutrev10:    { nome: 'NutreV (10 unidades)', preco: 790, porcoes: 10, categoria: 'nutrev' },
  nutrev1:     { nome: 'NutreV (unidade)',   preco: 79,  porcoes: 1,   categoria: 'nutrev' },
  prot240:     { nome: 'Proteína em pó 240g', preco: 221, porcoes: 12, categoria: 'proteina' },
  prot480:     { nome: 'Proteína em pó 480g', preco: 401, porcoes: 24, categoria: 'proteina' },
  cha51:       { nome: 'Herbal Concentrate 51g', preco: 222, porcoes: 30, categoria: 'cha' },
  cha102:      { nome: 'Herbal Concentrate 102g', preco: 364, porcoes: 60, categoria: 'cha' },
  fiber450:    { nome: 'Fiber Concentrate 450ml', preco: 206, porcoes: 30, categoria: 'fiber' },
  fiberpdr:    { nome: 'Fiber Powder',       preco: 243, porcoes: 30, categoria: 'fiber' },
};

/* ============================================================
   MATRIZ OBJETIVO → PRODUTOS CORE + COMPLEMENTARES
   ============================================================ */
const MATRIZ_OBJETIVO = {
  'reduzir-peso': {
    label: 'Reduzir Peso',
    icone: '⚖️',
    prioridade: ['shake', 'nutrev', 'cha', 'fiber', 'proteina'],
    descricao: 'Programa focado em substituição de refeições com controle calórico e suporte nutricional.'
  },
  'ganhar-musculos': {
    label: 'Ganhar Músculos',
    icone: '💪',
    prioridade: ['shake', 'proteina', 'nutrev', 'cha'],
    descricao: 'Programa hiperproteico para ganho de massa magra com recuperação muscular.'
  },
  'manter-peso': {
    label: 'Manter Peso',
    icone: '✅',
    prioridade: ['shake', 'fiber', 'cha', 'nutrev'],
    descricao: 'Programa de manutenção com equilíbrio nutricional e fibras para saciedade.'
  },
  'vida-saudavel': {
    label: 'Vida Saudável',
    icone: '🌿',
    prioridade: ['shake', 'nutrev', 'fiber', 'cha', 'proteina'],
    descricao: 'Programa completo de nutrição funcional para bem-estar e vitalidade.'
  },
  'rendimento-esporte': {
    label: 'Rendimento no Esporte',
    icone: '🏋️',
    prioridade: ['shake', 'proteina', 'nutrev', 'cha'],
    descricao: 'Programa de alto desempenho com suporte proteico e energético para atletas.'
  }
};

/* ============================================================
   FAIXAS DE INVESTIMENTO × CESTAS
   ============================================================ */
const PRODUTO_POR_FAIXA = {
  // [investimento/dia] → { produtos: [{ id, qtd, uso }] }
  10: {
    produtos: [
      { id: 'shakesache', qtd: 3, uso: 'Café da manhã' },
    ],
    extras: ['cha51'],
    nome_programa: 'Introdução ao Bem-Estar'
  },
  15: {
    produtos: [
      { id: 'shake550', qtd: 1, uso: 'Café da manhã' },
      { id: 'cha51', qtd: 1, uso: 'Pré-treino / tarde' },
    ],
    extras: [],
    nome_programa: 'Iniciante 30d'
  },
  20: {
    produtos: [
      { id: 'shake550', qtd: 1, uso: 'Substituição de refeição' },
      { id: 'cha51', qtd: 1, uso: 'Termogênico diário' },
      { id: 'nutrev1', qtd: 3, uso: 'Vitaminas diárias' },
    ],
    extras: ['fiber450'],
    nome_programa: 'Básico 30d'
  },
  25: {
    produtos: [
      { id: 'shake550', qtd: 2, uso: '2 refeições/dia' },
      { id: 'cha51', qtd: 1, uso: 'Termogênico' },
      { id: 'nutrev1', qtd: 5, uso: 'Vitaminas' },
    ],
    extras: ['fiber450', 'prot240'],
    nome_programa: 'Básico Completo 30d'
  },
  30: {
    produtos: [
      { id: 'shake1976', qtd: 1, uso: 'Todas as refeições' },
      { id: 'cha102', qtd: 1, uso: 'Termogênico completo' },
      { id: 'nutrev1', qtd: 5, uso: 'Vitaminas' },
    ],
    extras: ['fiber450'],
    nome_programa: 'Turbo 30d'
  },
  35: {
    produtos: [
      { id: 'shake1976', qtd: 1, uso: 'Todas as refeições' },
      { id: 'cha102', qtd: 1, uso: 'Termogênico completo' },
      { id: 'nutrev10', qtd: 1, uso: 'Vitaminas (30 dias)' },
      { id: 'prot240', qtd: 1, uso: 'Lanche proteico' },
    ],
    extras: ['fiber450'],
    nome_programa: 'Super Turbo 30d'
  },
  40: {
    produtos: [
      { id: 'shake1976', qtd: 1, uso: 'Todas as refeições' },
      { id: 'cha102', qtd: 1, uso: 'Termogênico' },
      { id: 'nutrev10', qtd: 1, uso: 'Vitaminas' },
      { id: 'prot480', qtd: 1, uso: 'Recuperação muscular' },
      { id: 'fiber450', qtd: 1, uso: 'Fibras diárias' },
    ],
    extras: [],
    nome_programa: 'Seca Barriga 30d'
  },
  45: {
    produtos: [
      { id: 'shake1976', qtd: 1, uso: 'Todas as refeições' },
      { id: 'cha102', qtd: 1, uso: 'Termogênico' },
      { id: 'nutrev10', qtd: 1, uso: 'Vitaminas' },
      { id: 'prot480', qtd: 1, uso: 'Recuperação muscular' },
      { id: 'fiber450', qtd: 1, uso: 'Fibras' },
    ],
    extras: ['shakesache'],
    nome_programa: 'Seca Barriga Premium 30d'
  },
  50: {
    produtos: [
      { id: 'shake1976', qtd: 2, uso: 'Estoque 60 dias' },
      { id: 'cha102', qtd: 1, uso: 'Termogênico' },
      { id: 'nutrev10', qtd: 1, uso: 'Vitaminas 30d' },
      { id: 'prot480', qtd: 1, uso: 'Proteína completa' },
      { id: 'fiber450', qtd: 1, uso: 'Fibras' },
    ],
    extras: ['shakesache'],
    nome_programa: 'Programa Completo Premium'
  }
};

/* ============================================================
   FUNÇÃO PRINCIPAL: calcular proposta
   ============================================================ */
function calcularProposta(objetivo, investimentoDiario) {
  const objMeta = MATRIZ_OBJETIVO[objetivo];
  const faixa = PRODUTO_POR_FAIXA[investimentoDiario];
  if (!objMeta || !faixa) return null;

  const itens = faixa.produtos.map(p => {
    const prod = CATALOGO[p.id];
    return {
      id: p.id,
      nome: prod.nome,
      qtd: p.qtd,
      precoUnit: prod.preco,
      subtotal: prod.preco * p.qtd,
      uso: p.uso,
      porcoes: prod.porcoes * p.qtd
    };
  });

  const totalMensal = itens.reduce((acc, i) => acc + i.subtotal, 0);
  const custoPorDia = totalMensal / 30;
  const custoPorPorcao = custoPorDia / itens.reduce((acc, i) => acc + i.qtd, 0);

  return {
    objetivo: objMeta.label,
    icone: objMeta.icone,
    descricao: objMeta.descricao,
    programa: faixa.nome_programa,
    investimentoDiario,
    itens,
    totalMensal,
    custoPorDia: Math.round(custoPorDia * 100) / 100,
    extras: faixa.extras.map(e => CATALOGO[e].nome)
  };
}

/* ============================================================
   GERAR HTML DA PROPOSTA
   ============================================================ */
function gerarHTMLProposta(dados) {
  const proposta = calcularProposta(dados.objetivo, dados.investimento);
  if (!proposta) return '<p style="color:red;">Não foi possível gerar a proposta. Verifique os dados.</p>';

  // Interpretação do score
  const score = dados.score.total;
  let nivelSaude, corNivel;
  if (score >= 16) { nivelSaude = 'Ótimo 🌟'; corNivel = '#3CB371'; }
  else if (score >= 11) { nivelSaude = 'Bom 👍'; corNivel = '#66CDAA'; }
  else if (score >= 6) { nivelSaude = 'Regular ⚠️'; corNivel = '#DAA520'; }
  else { nivelSaude = 'Precisa de atenção ❤️‍🩹'; corNivel = '#CD5C5C'; }

  let html = `
    <!-- CABEÇALHO DO CLIENTE -->
    <div class="proposta-header">
      <div class="proposta-cliente">
        <div class="cliente-nome">${dados.nome || 'Cliente'}</div>
        <div class="cliente-meta">
          <span>📊 Score: ${score}/22 — <strong style="color:${corNivel}">${nivelSaude}</strong></span>
          <span>🎯 Objetivo: ${proposta.icone} ${proposta.objetivo}</span>
          <span>💰 Investimento: <strong>R$ ${dados.investimento},00/dia</strong></span>
        </div>
      </div>
    </div>

    <!-- PROGRAMA RECOMENDADO -->
    <div class="proposta-destaque">
      <div class="destaque-tag">PROPOSTA RECOMENDADA</div>
      <div class="destaque-titulo">${proposta.icone} ${proposta.programa}</div>
      <div class="destaque-desc">${proposta.descricao}</div>
    </div>

    <!-- TABELA DE PRODUTOS -->
    <table class="proposta-tabela">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Qtd</th>
          <th>Uso</th>
          <th>Unit.</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        ${proposta.itens.map(i => `
          <tr>
            <td><strong>${i.nome}</strong></td>
            <td>${i.qtd}x</td>
            <td style="font-size:0.85rem;color:#8CA89A;">${i.uso}</td>
            <td>R$ ${i.precoUnit.toFixed(2)}</td>
            <td style="font-weight:700;">R$ ${i.subtotal.toFixed(2)}</td>
          </tr>
        `).join('')}
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" style="text-align:right;font-weight:700;">Total do mês</td>
          <td style="font-weight:800;font-size:1.15rem;color:#3CB371;">R$ ${proposta.totalMensal.toFixed(2)}</td>
        </tr>
      </tfoot>
    </table>

    <!-- EXTRAS -->
    ${proposta.extras.length ? `
      <div class="proposta-extras">
        <strong>🧩 Sugestões extras:</strong> ${proposta.extras.join(', ')}
      </div>
    ` : ''}

    <!-- RESUMO FINANCEIRO -->
    <div class="proposta-resumo">
      <div class="resumo-card">
        <span class="resumo-label">Custo por dia</span>
        <span class="resumo-valor">R$ ${proposta.custoPorDia.toFixed(2)}</span>
      </div>
      <div class="resumo-card">
        <span class="resumo-label">Custo por refeição</span>
        <span class="resumo-valor">R$ ${(proposta.custoPorDia / proposta.itens.length).toFixed(2)}</span>
      </div>
      <div class="resumo-card">
        <span class="resumo-label">Invest. informado</span>
        <span class="resumo-valor" style="color:${proposta.custoPorDia <= dados.investimento ? '#3CB371' : '#DAA520'}">
          R$ ${dados.investimento},00/dia
          ${proposta.custoPorDia <= dados.investimento ? ' ✅' : ' ⚠️ ajuste necessário'}
        </span>
      </div>
    </div>

    <!-- BENEFÍCIOS TAGGEADOS -->
    <div class="proposta-beneficios">
      <div class="beneficio-tag">✅ Controle calórico</div>
      <div class="beneficio-tag">✅ Nutrição completa</div>
      <div class="beneficio-tag">✅ Saciedade prolongada</div>
      <div class="beneficio-tag">✅ Energia diária</div>
      <div class="beneficio-tag">✅ Suporte proteico</div>
    </div>
  `;

  return html;
}

/* ============================================================
   GERAR TABELA COMPARATIVA — TODAS AS 9 FAIXAS
   ============================================================ */
function gerarTabelaComparativa(objetivo) {
  const objMeta = MATRIZ_OBJETIVO[objetivo];
  if (!objMeta) return '';

  const faixas = [10,15,20,25,30,35,40,45,50];

  let rows = faixas.map(valor => {
    const prop = calcularProposta(objetivo, valor);
    if (!prop) return '';
    return `
      <tr>
        <td><strong>R$ ${valor},00/dia</strong></td>
        <td>${prop.programa}</td>
        <td>R$ ${prop.totalMensal.toFixed(2)}</td>
        <td>R$ ${prop.custoPorDia.toFixed(2)}</td>
        <td style="font-size:0.82rem;">${prop.itens.map(i => i.nome.replace('Herbal Concentrate','Chá').replace(' em pó','')).join(', ')}</td>
      </tr>
    `;
  }).join('');

  return `
    <h3 style="color:#fff;margin-top:30px;">📊 Comparativo — Todas as faixas para <strong>${objMeta.icone} ${objMeta.label}</strong></h3>
    <table class="proposta-tabela comparativa">
      <thead>
        <tr>
          <th>Invest./dia</th>
          <th>Programa</th>
          <th>Total/mês</th>
          <th>Custo/dia</th>
          <th>Cesta resumida</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

/* ============================================================
   GERAR LINK WHATSAPP
   ============================================================ */
function gerarLinkWhatsApp(dados) {
  const proposta = calcularProposta(dados.objetivo, dados.investimento);
  if (!proposta) return '#';

  const itensTxt = proposta.itens.map(i => `${i.qtd}x ${i.nome} — R$ ${i.subtotal.toFixed(2)}`).join('\n');

  const mensagem = `Olá! 👋 Quero saber mais sobre esta proposta personalizada:

*Perfil:* ${dados.nome || 'Cliente'} | Score: ${dados.score.total}/22
*Objetivo:* ${proposta.icone} ${proposta.objetivo}
*Programa:* ${proposta.programa}
*Investimento:* R$ ${dados.investimento},00/dia

*Cesta:*
${itensTxt}
*Total mensal:* R$ ${proposta.totalMensal.toFixed(2)}

Podemos conversar?`;

  return `https://wa.me/5551999663200?text=${encodeURIComponent(mensagem)}`;
}
