document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const secoes = document.querySelectorAll(".tab-content");
    const botoesCards = document.querySelectorAll("[data-goto]");

    // função para gerenciar a troca de abas
    function gerenciarAbas(idAlvo) {
        // remove classes ativas do menu
        links.forEach(link => {
            if (link.getAttribute("data-target") === idAlvo) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        // altera a visibilidade das seções
        secoes.forEach(secao => {
            if (secao.id === idAlvo) {
                secao.classList.add("active-content");
            } else {
                secao.classList.remove("active-content");
            }
        });

        // rola a página para o conteúdo
        window.scrollTo({ top: 320, behavior: "smooth" });
    }

    // cliques no menu
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const alvo = link.getAttribute("data-target");
            gerenciarAbas(alvo);
        });
    });

    // cliques nos cards
    botoesCards.forEach(botao => {
        botao.addEventListener("click", () => {
            const alvo = botao.getAttribute("data-goto");
            gerenciarAbas(alvo);
        });
    });
});
