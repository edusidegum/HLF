(function () {
  "use strict";
  var D = { sugerido:0, bronze:0.14, prata:0.23, ouro:0.32 };
  var R = { sugerido:"Preço Sugerido", bronze:"Bronze (14%)", prata:"Prata (23%)", ouro:"Ouro (32%)" };
  var REF_FF = 30, REF_C = 15;
  function fmt(v) { return "R$ " + v.toFixed(2).replace(".",","); }
  function buscar(id) { return TABELA_PRODUTOS.find(function(p){return p.id===id;})||null; }
  function porCat(cat) { return TABELA_PRODUTOS.filter(function(p){return p.categoria===cat;}); }
  function custoRefeicao(prod, nivel) {
    if(!prod) return null;
    if(!D[nivel]) nivel="sugerido";
    var pf = prod[nivel];
    var cr = pf / prod.porcoes;
    var cd = cr * 2;
    return {
      produto: prod.nome, categoria: prod.categoria, nivel: nivel,
      rotulo: R[nivel], precoEmbalagem: pf, porcoes: prod.porcoes,
      custoRefeicao: cr, custoDia: cd, custoMes: cd * 30,
      economiaFast: REF_FF - cr, economiaCaseiro: REF_C - cr,
      pctFF: ((1 - cr/REF_FF)*100).toFixed(0),
      pctC: ((1 - cr/REF_C)*100).toFixed(0)
    };
  }
  function compNiveis(prod) {
    return ["sugerido","bronze","prata","ouro"].map(function(n){return custoRefeicao(prod,n);});
  }
  function recomendar(objetivo, orcDia, nivel) {
    if(!nivel) nivel="ouro";
    var mapa = {
      emagrecimento:["Substitutos de Refeição","Fibras","Lanches Saudáveis"],
      performance:["Nutrição Esportiva","Proteínas","Bebidas Herbalife"],
      imunidade:["Tabletes","Bebida Nutricional","Nutrição Complementar"],
      energia:["Bebidas Herbalife","Nutrição Esportiva","Substitutos de Refeição"]
    };
    var cats = mapa[objetivo] || ["Substitutos de Refeição"];
    var res = [];
    var lim = orcDia || 999;
    cats.forEach(function(cat){
      porCat(cat).forEach(function(p){
        var c = custoRefeicao(p, nivel);
        c.encaixe = c.custoDia <= lim ? "dentro" : "acima";
        res.push(c);
      });
    });
    return res.sort(function(a,b){return a.custoRefeicao - b.custoRefeicao;});
  }
  function textoComp(calc) {
    if(!calc) return "";
    return [
      "📊 " + calc.produto,
      "   " + calc.rotulo + ": " + fmt(calc.custoRefeicao) + "/refeição",
      "   Embalagem: " + fmt(calc.precoEmbalagem) + " (" + calc.porcoes + " porções)",
      "   Custo dia (2 ref): " + fmt(calc.custoDia),
      "   Custo mês: " + fmt(calc.custoMes),
      "",
      "   ⚡ vs Fast food (R$ 30,00): economia de " + fmt(calc.economiaFast) + " (" + calc.pctFF + "%)",
      "   🥗 vs Caseiro (R$ 15,00): economia de " + fmt(calc.economiaCaseiro) + " (" + calc.pctC + "%)"
    ].join("\n");
  }
  function tabelaComp(prod) {
    var n = compNiveis(prod);
    var h = '<table class="tabela-custo"><thead><tr>'
      + '<th>Nível</th><th>Desconto</th><th>Preço</th><th>Custo/refeição</th><th>Custo/dia (2x)</th><th>Custo/mês</th>'
      + '</tr></thead><tbody>';
    n.forEach(function(c){
      h += '<tr><td><strong>' + c.rotulo + '</strong></td><td>'
        + (c.nivel==="sugerido"?"—": D[c.nivel]*100 + "%") + '</td><td>' + fmt(c.precoEmbalagem)
        + '</td><td><strong>' + fmt(c.custoRefeicao) + '</strong></td><td>' + fmt(c.custoDia)
        + '</td><td>' + fmt(c.custoMes) + '</td></tr>';
    });
    h += '</tbody></table>';
    return h;
  }
  function disclaimer() {
    return '<div class="disclaimer" style="font-size:0.85rem;color:#666;margin-top:16px;padding:12px;border:1px solid #ddd;border-radius:8px;background:#f9f9f9;">'
      + '<p><strong>📌 Cliente Premium Herbalife 2026</strong></p>'
      + '<p>Descontos progressivos por Pontos de Volume (PV) acumulados em 12 meses:</p>'
      + '<ul><li><strong>Bronze (14%)</strong> — Nível inicial ao se cadastrar</li>'
      + '<li><strong>Prata (23%)</strong> — Ao acumular 100 PV em 12 meses</li>'
      + '<li><strong>Ouro (32%)</strong> — Ao acumular 500 PV em 12 meses</li></ul>'
      + '<p>📦 <strong>Frete grátis</strong> para pedidos acima de 30 PV em todo o Brasil. Satisfação garantida ou seu dinheiro de volta em até 30 dias.</p>'
      + '<p style="font-size:0.75rem;color:#999;">Valores válidos para 2026. Consulte regulamento no MyHerbalife Brasil. Imagens meramente ilustrativas. Resultados variam.</p>'
      + '</div>';
  }
  window.CALC_KIT = {
    custoRefeicao:custoRefeicao, compararNiveis:compNiveis, recomendarKit:recomendar,
    gerarTextoComparacao:textoComp, gerarTabelaComparativa:tabelaComp,
    disclaimerClientePremium:disclaimer, buscarProduto:buscar, filtrarPorCategoria:porCat,
    fmt:fmt, REF_FASTFOOD:REF_FF, REF_CASEIRO:REF_C
  };
  console.log("[calculadora-kit.js] " + TABELA_PRODUTOS.length + " produtos.");
})();