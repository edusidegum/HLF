// contato.js — Configuração centralizada de canais de contato
// Altere aqui e reflita em todas as páginas do ecossistema HLF
// Trio de Saída: Cadastro, Catálogo, WhatsApp
const BASE_URL = 'https://edusidegum.github.io/';

const CONTATO = Object.freeze({
  whatsapp: Object.freeze({
    numero: '5551999663200',
    mensagemPadrao: 'Olá, vi sua página sobre HLF, e quero saber mais',
    /** Gera URL com slug da página atual (opcional) */
    url(slug) {
      const suffixo = slug ?  (Vim da página: ) : '';
      return https://wa.me/?text=;
    }
  }),
  catalogo: Object.freeze({
    url: 'https://catalogoherbalife.com.br/edusidegum'
  }),
  cadastro: Object.freeze({
    url: ${BASE_URL}HLF/cadastro/cadastro.html
  }),
  autor: Object.freeze({
    url: ${BASE_URL}edusidegum/sobre.html
  })
});

window.CONTATO = CONTATO;
