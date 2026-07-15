document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('copy', e => {
    e.preventDefault();
    e.clipboardData.setData('text/plain', 'Conteúdo Protegido - Ecossistema HLF @edusidegum. Cópia não autorizada.');
});
