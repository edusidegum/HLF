// ══════════ INCLUIR DINÂMICO — BASE LOCAL ═══════════
// Adicione no HTML: <script src="assets/js/bloco-incluir.js" defer></script>
(function() {
const BASE = 'https://edusidegum.github.io/HLF/';
function injetar(arquivo, seletorAlvo, posicao) {
return fetch(BASE + arquivo + '?v=' + Date.now())
.then(r => r.text())
.then(html => {
const alvo = document.querySelector(seletorAlvo);
if (alvo) alvo.insertAdjacentHTML(posicao, html);
})
.catch(() => {});
}
// Banner de cookies
injetar('compartilhado/bloco-cookies.html', 'body', 'beforeend');
// GA4 / GTM
injetar('compartilhado/bloco-ga4-gtm.html', 'head', 'beforeend');
// Proteção contra cópia (condicional)
if (document.querySelector('meta[name="protecao-copia"]')) {
var s = document.createElement('script');
s.src = BASE + 'assets/js/bloco-protecao.js?v=' + Date.now();
document.head.appendChild(s);
}
// ═══ LÓGICA COOKIES ═══
document.addEventListener('click', function(e) {
if (e.target.id === 'btn-aceitar-cookies') {
var banner = document.getElementById('cookie-banner');
if (banner) banner.style.display = 'none';
localStorage.setItem('lgpd_cookies_aceitos', '1');
}
});
// ═══ FOOTER — LINKS LEGAIS E AUTOR ═══
document.addEventListener('DOMContentLoaded', function() {
var footer = document.querySelector('footer') || document.querySelector('.footer') || document.body;
var div = document.createElement('div');
div.style.cssText = 'text-align:center;margin-top:12px;font-size:0.7rem;color:#888;';
div.innerHTML  = '<a href="' + BASE + 'compartilhado/politicadeprivacidade.html" style="color:#888;text-decoration:none;">Política de Privacidade</a>';
div.innerHTML += ' | <a href="' + BASE + 'compartilhado/termosdeuso.html" style="color:#888;text-decoration:none;">Termos de Uso</a>';
div.innerHTML += '<br><a href="https://edusidegum.github.io/edusidegum/sobre.html" style="color:#888;text-decoration:none;">Desenvolvido por EduSidegum</a>';
footer.appendChild(div);
});
})();
