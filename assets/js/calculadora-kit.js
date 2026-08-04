/* ============================================================
   Calculadora de Kit - Lógica de Negócio
   Cálculo de custo por refeição + descontos Cliente Premium
   ============================================================ */
const CALC_KIT = {
  // Custo por refeição
  custoRefeicao: function (produtosIds) {
    let total = 0;
    let pvTotal = 0;
    produtosIds.forEach(function (id) {
      var p = PRODUTOS_HLF.find(function (item) { return item.id === id; });
      if (p) {
        total += p.preco;
        pvTotal += p.pv;
      }
    });
    // Média de refeições mensais considerando 2 refeições/dia
    var refeicoes = 60;
    var custo = total / refeicoes;
    return {
      custo: custo,
      custoFormatado: custo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
      pvTotal: pvTotal,
      comparativo: "R$ 30,00 fast food",
      economia: (30 - custo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    };
  },

  // Descontos Cliente Premium
  getDescontos: function (preco) {
    return {
      bronze: preco * 0.86,
      prata: preco * 0.77,
      ouro: preco * 0.68
    };
  },

  // Frete grátis
  freteGratis: function (pv) {
    return pv >= 30;
  },

  // Formata moeda pt-BR
  formatarMoeda: function (valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
};