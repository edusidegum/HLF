function injetar(arquivo, seletor, posicao) {
    // Detecta se está na raiz ou subpasta (perfil, doc, hypedrink)
    const isRoot = !window.location.pathname.includes('/perfil/') && 
                   !window.location.pathname.includes('/doc/') && 
                   !window.location.pathname.includes('/hypedrink/') &&
                   !window.location.pathname.includes('/transformacao21/');
    
    const prefixo = isRoot ? '' : '../';
    const urlFinal = prefixo + arquivo;

    fetch(urlFinal)
        .then(r => { if (!r.ok) throw new Error(); return r.text(); })
        .then(html => {
            const alvo = document.querySelector(seletor);
            if (alvo) alvo.insertAdjacentHTML(posicao, html);
        })
        .catch(() => console.warn(`Falha ao injetar: ${urlFinal}`));
}

// Injeções Automáticas
injetar('menu/compartilhado/bloco-ga4-gtm.html', 'head', 'afterbegin');
injetar('menu/compartilhado/topbar.html', 'body', 'afterbegin');
injetar('menu/compartilhado/footer.html', 'body', 'beforeend');
injetar('menu/compartilhado/bloco-cookies.html', 'body', 'beforeend');
