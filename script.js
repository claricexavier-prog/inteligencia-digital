document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os links de abas do menu
    const linksAbas = document.querySelectorAll(".nav-tabs a");

    linksAbas.forEach((link, index) => {
        link.addEventListener("click", (evento) => {
            evento.preventDefault(); // Impede o link de recarregar a página
            
            // Mapeia a ordem dos links para os IDs correspondentes das seções
            const idsDasAbas = ["home", "cidadania", "deepfakes", "combate"];
            const destinoId = idsDasAbas[index];

            ativarAbaPorId(link, destinoId);
        });
    });
});

// Função auxiliar para trocar a aba ativa de forma visual e estrutural
function ativarAbaPorId(elementoClicado, idDaSecao) {
    // 1. Remove a classe 'active' de todos os links do menu
    document.querySelectorAll(".nav-tabs a").forEach(link => link.classList.remove("active"));
    
    // 2. Adiciona a classe 'active' apenas no link que foi clicado
    elementoClicado.classList.add("active");

    // 3. Esconde todas as seções de conteúdo
    document.querySelectorAll(".tab-content").forEach(conteudo => {
        conteudo.classList.remove("active-content");
    });

    // 4. Mostra apenas a seção de conteúdo correspondente
    const secaoAlvo = document.getElementById(idDaSecao);
    if (secaoAlvo) {
        secaoAlvo.classList.add("active-content");
    }
}

// Função extra para fazer os botões de dentro dos "Cards" da Home também mudarem de aba
function mudarAba(evento, idDaSecao) {
    evento.preventDefault();
    
    // Mapeia qual link do menu corresponde ao ID solicitado
    const mapeamentoIndices = { 'home': 0, 'cidadania': 1, 'deepfakes': 2, 'combate': 3 };
    const indiceLink = mapeamentoIndices[idDaSecao];
    
    const todosOsLinks = document.querySelectorAll(".nav-tabs a");
    const linkCorrespondente = todosOsLinks[indiceLink];

    if (linkCorrespondente) {
        ativarAbaPorId(linkCorrespondente, idDaSecao);
        // Rola a página suavemente para o topo do conteúdo
        window.scrollTo({ top: 350, behavior: 'smooth' });
    }
}
