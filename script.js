document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const secoes = document.querySelectorAll(".tab-content");
    const botoescards = document.querySelectorAll("[data-goto]");

    // função principal para gerenciar a troca de abas
    function gerenciarabas(idalvo) {
        // remove classes ativas do menu
        links.forEach(link => {
            if (link.getAttribute("data-target") === idalvo) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        // altera a visibilidade das seções de conteúdo
        secoes.forEach(secao => {
            if (secao.id === idalvo) {
                secao.classList.add("active-content");
            } else {
                secao.classList.remove("active-content");
            }
        });

        // roda a página de forma suave para o conteúdo
        window.scrollTo({ top: 320, behavior: "smooth" });
    }

    // ouvinte para cliques no menu de abas
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const alvo = link.getAttribute("data-target");
            gerenciarabas(alvo);
        });
    });

    // ouvinte para os botões de dentro dos cards da página inicial
    botoescards.forEach(botao => {
        botao.addEventListener("click", () => {
            const alvo = botao.getAttribute("data-goto");
            gerenciarabas(alvo);
        });
    });
});
