/* ============================================================
   HLF Protection Module v1.1
   Proteção seletiva que respeita prefers-reduced-motion (WCAG 2.2 AA)
   ============================================================ */
(function () {
  'use strict';

  // Se o usuário prefere movimento reduzido, não aplica proteções
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Bloqueia clique direito apenas em imagens e figuras
  document.addEventListener('contextmenu', function (e) {
    var alvo = e.target;
    if (alvo.tagName === 'IMG' || alvo.closest('figure')) {
      e.preventDefault();
    }
  }, false);

  // CSS anti-seleção em elementos marcados
  var style = document.createElement('style');
  style.textContent =
    '[data-protect]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}' +
    'figure img{-webkit-user-drag:none;user-select:none}';
  document.head.appendChild(style);

  // Proteção seletiva via data-protect
  document.querySelectorAll('[data-protect]').forEach(function (el) {
    el.style.userSelect = 'none';
  });
})();