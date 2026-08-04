/* ============================================================
   HLF Inclusion Engine v5.0
   Footer local + LGPD + GA4/GTM placeholders
   Projeto: HLF (pessoal - Eduardo Sidegum)
   ============================================================ */
(function () {
  'use strict';

  var BASE = 'https://edusidegum.github.io/HLF/';

  function injectFooter() {
    var footer = document.querySelector('footer.site-footer');
    if (!footer) {
      footer = document.createElement('footer');
      footer.className = 'site-footer';
      document.body.appendChild(footer);
    }
    footer.innerHTML =
      '<div class="footer-content">' +
        '<div class="footer-links">' +
          '<a href="' + BASE + 'index.html">Home</a>' +
          '<a href="' + BASE + 'hypedrink/">Hype Drink</a>' +
          '<a href="' + BASE + 'politicadeprivacidade.html">Política de Privacidade</a>' +
          '<a href="https://edusidegum.github.io/edusidegum/sobre.html">Sobre Eduardo Sidegum</a>' +
        '</div>' +
        '<p>Desenvolvido em 31/07/2026 por <a href="https://edusidegum.github.io/edusidegum/sobre.html">Eduardo Sidegum</a> | ' +
        '<a href="https://wa.me/5551999663200">WhatsApp: (51) 99966-3200</a></p>' +
        '<p class="disclaimer">Distribuidor Independente Herbalife</p>' +
      '</div>';
  }

  function injectLGPD() {
    if (localStorage.getItem('hlf_lgpd_consent')) return;
    var banner = document.createElement('div');
    banner.id = 'hlf-lgpd';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-live', 'polite');
    banner.innerHTML =
      '<p>Utilizamos cookies para melhorar sua experiência e analisar o tráfego conforme nossa ' +
      '<a href="' + BASE + 'politicadeprivacidade.html" style="color:#78BE20;text-decoration:underline;">Política de Privacidade</a>.</p>' +
      '<button type="button" id="hlf-lgpd-aceitar">Aceitar</button>';
    document.body.appendChild(banner);
    document.getElementById('hlf-lgpd-aceitar').addEventListener('click', function () {
      localStorage.setItem('hlf_lgpd_consent', 'true');
      banner.remove();
    });
  }

  function injectTracking() {
    // Placeholders - substituir após aprovação da agência
    var GA4_ID = '[GA4_MEASUREMENT_ID]';
    var GTM_ID = '[GTM_CONTAINER_ID]';

    // GTM
    if (GTM_ID.indexOf('GTM') === 0) {
      var gtm = document.createElement('script');
      gtm.async = true;
      gtm.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
      document.head.appendChild(gtm);
    }
    // GA4
    if (GA4_ID.indexOf('G-') === 0) {
      var ga4 = document.createElement('script');
      ga4.async = true;
      ga4.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
      document.head.appendChild(ga4);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', GA4_ID);
    }
  }

  function init() {
    injectFooter();
    injectLGPD();
    injectTracking();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();