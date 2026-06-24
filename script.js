function mudarAba(evento, idDaSecao) {
    evento.preventDefault();

    // Mapeia os IDs para a ordem dos links no menu
    const mapeamentoIndices = { 'home': 0, 'cidadania': 1, 'deepfakes': 2, 'combate': 3 };
    const indiceLink = mapeamentoIndices[idDaSecao];

    // 1. Atualiza a classe ativa nos links do menu
    const todosOsLinks = document.querySelectorAll(".nav-tabs a");
    todosOsLinks.forEach(link => link.classList.remove("active"));
    
    if (todosOsLinks[indiceLink]) {
        todosOsLinks[indiceLink].classList.add("active");
    }

    // 2. Esconde todas as seções
    document.querySelectorAll(".tab-content").forEach(conteudo => {
        conteudo.classList.remove("active-content");
    });

    // 3. Mostra a seção desejada
    const secaoAlvo = document.getElementById(idDaSecao);
    if (secaoAlvo) {
        secaoAlvo.classList.add("active-content");
    }

    // Rola a página de volta para o topo de forma suave se o usuário estiver muito abaixo
    window.scrollTo({ top: 320, behavior: 'smooth' });
}
