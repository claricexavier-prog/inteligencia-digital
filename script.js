document.addEventListener("DOMContentLoaded", () => {
    
    // 1. EFEITO DE SURGIMENTO SUAVE (SCROLL REVEAL)
    const secoes = document.querySelectorAll(".conteudo-sec");

    const checarScroll = () => {
        const gatilho = window.innerHeight * 0.85;

        secoes.forEach(secao => {
            const topoSecao = secao.getBoundingClientRect().top;
            if (topoSecao < gatilho) {
                secao.classList.add("visivel");
            }
        });
    };

    checarScroll();
    window.addEventListener("scroll", checarScroll);


    // 2. INJEÇÃO DO QUIZ APENAS NA PÁGINA DE DESINFORMAÇÃO
    const areaQuiz = document.getElementById("area-quiz");
    
    if (areaQuiz) {
        const divQuiz = document.createElement("div");
        divQuiz.className = "quiz-container";
        divQuiz.innerHTML = `
            <h3>🛡️ Teste de Reflexo Digital</h3>
            <p>Um perfil com foto de inteligência artificial mandou um link alarmante sobre contaminação da água na sua cidade no grupo do bairro. O que você faz?</p>
            <button class="btn-quiz" data-resposta="errado">Repasso o link imediatamente nos outros grupos para alertar conhecidos.</button>
            <button class="btn-quiz" data-resposta="certo">Não compartilho e procuro o canal oficial de saneamento ou jornais locais para checar.</button>
            <p id="resultado-quiz" class="resultado-quiz"></p>
        `;
        areaQuiz.appendChild(divQuiz);

        // Lógica de resposta do Quiz
        const botoes = divQuiz.querySelectorAll(".btn-quiz");
        const textoResultado = divQuiz.querySelector("#resultado-quiz");

        botoes.forEach(botao => {
            botao.addEventListener("click", (e) => {
                const escolha = e.target.getAttribute("data-resposta");
                
                if (escolha === "certo") {
                    textoResultado.innerHTML = "<strong>✅ Resposta Correta!</strong> Quebrar a corrente de compartilhamento é o passo mais eficaz para matar a desinformação.";
                    textoResultado.style.color = "#38bdf8";
                } else {
                    textoResultado.innerHTML = "<strong>❌ Alerta de Perigo!</strong> Compartilhar por impulso gera pânico coletivo desnecessário. Sempre verifique fontes oficiais antes.";
                    textoResultado.style.color = "#ef4444";
                }
            });
        });
    }

    // 3. DESTACAR A PÁGINA ATUAL NO MENU
    const linksMenu = document.querySelectorAll(".nav-links a");
    const paginaAtual = window.location.pathname.split("/").pop();

    linksMenu.forEach(link => {
        if (link.getAttribute("href") === paginaAtual) {
            link.style.color = "#38bdf8";
            link.style.fontWeight = "bold";
        }
    });
});
