document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/perfil-data.json')
        .then(r => r.json())
        .then(data => {
            const u = data.perfil.usuario;
            document.getElementById('nome').textContent = u.nome;
            document.getElementById('handle').textContent = u.handle;
            document.getElementById('bio').textContent = u.bio;
            document.getElementById('btn-whatsapp').href = u.whatsapp_link;
        })
        .catch(e => console.error('Erro ao carregar dados:', e));
});
