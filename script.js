document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MENU HAMBÚRGUER RESPONSIVO
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });
    }

    // 2. DETECÇÃO DE ROLAGEM COM EFICIÊNCIA (SCROLL REVEAL COM OBSERVER)
    const secoes = document.querySelectorAll(".conteudo-sec");
    
    const opcoesObserver = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const secaoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visivel");
                observer.unobserve(entry.target); // Evita reprocessamento desnecessário
            }
        });
    }, opcoesObserver);

    secoes.forEach(secao => {
        secaoObserver.observe(secao);
    });

    // 3. INJEÇÃO DINÂMICA DO COMPONENTE DE SIMULAÇÃO (QUIZ)
    const areaQuiz = document.getElementById("area-quiz");
    
    if (areaQuiz) {
        const divQuiz = document.createElement("div");
        divQuiz.className = "quiz-container dynamic-card";
        divQuiz.innerHTML = `
            <h3>🛡️ Laboratório de Verificação Social</h3>
            <p class="quiz-pergunta">Um perfil automatizado compartilha um link alarmante sobre um surto de contaminação na rede de abastecimento da cidade dentro de grupos locais. Como proceder?</p>
            
            <div class="quiz-options">
                <button class="btn-quiz" data-status="errado">
                    <span class="opt-marker">A</span> Compartilhar o link rapidamente em redes familiares para garantir o aviso imediato de todos.
                </button>
                <button class="btn-quiz" data-status="certo">
                    <span class="opt-marker">B</span> Reter o link, checar os portais oficiais da companhia de saneamento local e agências de checagem consolidadas.
                </button>
            </div>
            
            <div id="resultado-quiz" class="resultado-quiz-box hide"></div>
        `;
        areaQuiz.appendChild(divQuiz);

        const botoesQuiz = divQuiz.querySelectorAll(".btn-quiz");
        const painelResultado = divQuiz.querySelector("#resultado-quiz");

        botoesQuiz.forEach(botao => {
            botao.addEventListener("click", (e) => {
                // Remove seleções anteriores
                botoesQuiz.forEach(b => b.classList.remove("selected"));
                
                const alvo = e.currentTarget;
                alvo.classList.add("selected");
                const status = alvo.getAttribute("data-status");

                painelResultado.classList.remove("hide", "success", "error");

                if (status === "certo") {
                    painelResultado.innerHTML = "<h4>✅ Protocolo Correto!</h4><p>Interromper o ciclo de compartilhamento por impulso é o método mais eficaz no combate à proliferação de vetores desinformativos artificiais.</p>";
                    painelResultado.classList.add("success");
                } else {
                    painelResultado.innerHTML = "<h4>❌ Atenção ao Risco!</h4><p>O compartilhamento imediato baseado em gatilhos emocionais atua em conformidade com o design malicioso das campanhas de desinformação automatizada.</p>";
                    painelResultado.classList.add("error");
                }
            });
        });
    }

    // 4. DESTAQUE AUTOMÁTICO DO LINK ATIVO
    const linksMenu = document.querySelectorAll(".nav-links a");
    const caminhoAtual = window.location.pathname.split("/").pop();

    linksMenu.forEach(link => {
        if (link.getAttribute("href") === caminhoAtual || (caminhoAtual === "" && link.getAttribute("href") === "index.html")) {
            link.classList.add("active-link");
        }
    });
});
