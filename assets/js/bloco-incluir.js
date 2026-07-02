const BASE_PATH = '/HLF/'; 

function injetar(arquivo, seletor, posicao) {
    const urlFinal = window.location.origin + BASE_PATH + arquivo;

    fetch(urlFinal)
        .then(r => { if (!r.ok) throw new Error(); return r.text(); })
        .then(html => {
            const alvo = document.querySelector(seletor);
            if (alvo) {
                alvo.insertAdjacentHTML(posicao, html);
                // Normalização de links injetados para o domínio /HLF/
                alvo.querySelectorAll('a, img').forEach(el => {
                    if (el.tagName === 'A' && el.getAttribute('href')) {
                        const href = el.getAttribute('href');
                        if (!href.startsWith('http') && !href.startsWith('#')) {
                            el.href = window.location.origin + BASE_PATH + href.replace(/^\//, '');
                        }
                    }
                    if (el.tagName === 'IMG' && el.getAttribute('src')) {
                        const src = el.getAttribute('src');
                        if (!src.startsWith('http')) {
                            el.src = window.location.origin + BASE_PATH + src.replace(/^\//, '');
                        }
                    }
                });
            }
        })
        .catch(() => console.error(`Falha na injeção: ${urlFinal}`));
}

// Execução do Pipeline de Componentes
injetar('menu/compartilhado/topbar.html', 'body', 'afterbegin');
injetar('menu/compartilhado/footer.html', 'body', 'beforeend');
injetar('menu/compartilhado/bloco-cookies.html', 'body', 'beforeend');
