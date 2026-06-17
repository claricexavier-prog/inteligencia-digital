document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ANIMAÇÃO DE REVELAÇÃO AO ROLAR A PÁGINA (SCROLL REVEAL)
    const secoes = document.querySelectorAll(".conteudo-sec");

    const checarScroll = () => {
        const gatilho = window.innerHeight * 0.85; // Dispara quando a seção chega a 85% da tela

        secoes.forEach(secao => {
            const topoSecao = secao.getBoundingClientRect().top;

            if (topoSecao < gatilho) {
                secao.classList.add("visivel");
            }
        });
    };

    // Executa uma vez ao carregar e depois a cada scroll
    checarScroll();
    window.addEventListener("scroll", checarScroll);


    // 2. SISTEMA INTERATIVO DE CHECAGEM (MINI-QUIZ)
    // Vamos criar dinamicamente um botão de teste na seção de combate
    const secaoCombate = document.querySelector("#combate .container");
    
    if (secaoCombate) {
        const divQuiz = document.createElement("div");
        divQuiz.className = "quiz-container";
        divQuiz.innerHTML = `
            <h3><br>Teste seus reflexos digitais</h3>
            <p>Você recebeu um vídeo do presidente anunciando que o feriado de amanhã foi cancelado. O que você faz?</p>
            <button class="btn-quiz" data-resposta="errado">Compartilho imediatamente para avisar meus amigos.</button>
            <button class="btn-quiz" data-resposta="certo">Olho o site oficial do governo e portais de notícias antes de acreditar.</button>
            <p id="resultado-quiz" class="resultado-quiz"></p>
        `;
        secaoCombate.appendChild(divQuiz);

        // Lógica dos botões do quiz
        const botoes = divQuiz.querySelectorAll(".btn-quiz");
        const textoResultado = divQuiz.querySelector("#resultado-quiz");

        botoes.forEach(botao => {
            botao.addEventListener("click", (e) => {
                const escolha = e.target.getAttribute("data-resposta");
                
                if (escolha === "certo") {
                    textoResultado.innerHTML = "<strong>✅ Perfeito!</strong> Você agiu como um verdadeiro cidadão digital. A checagem evita o pânico e a desinformação.";
                    textoResultado.style.color = "#38bdf8";
                } else {
                    textoResultado.innerHTML = "<strong>❌ Cuidado!</strong> Vídeos de líderes políticos são os alvos favoritos de <em>Deepfakes</em>. Sempre cheque antes de repassar.";
                    textoResultado.style.color = "#ef4444";
                }
            });
        });
    }
});
