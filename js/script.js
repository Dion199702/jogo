
let personagemEscolhida = "";
let faseAtual = 0;
let fases = [
    {
        pergunta: "O código do cofre é a notação científica de 0.0000051.",
        alternativas: ["A) 5,1 x 10⁻⁵", "B) 5,1 x 10⁻⁶", "C) 5,1 x 10⁻⁴", "D) 51 x 10⁻⁷"],
        correta: "B"
    },
    {
        pergunta: "Qual a notação científica de 920000000?",
        alternativas: ["A) 9,2 x 10⁷", "B) 92 x 10⁶", "C) 9,2 x 10⁸", "D) 0,92 x 10⁹"],
        correta: "C"
    }
];

function escolherPersonagem(nome) {
    personagemEscolhida = nome;
    alert("Você escolheu: " + nome);
}

function iniciarJogo() {
    const nome = document.getElementById("nome").value;
    if (!nome || !personagemEscolhida) {
        alert("Digite seu nome e escolha uma personagem!");
        return;
    }
    document.getElementById("tela-inicial").style.display = "none";
    document.getElementById("jogo").style.display = "block";
    carregarFase();
}

function carregarFase() {
    const fase = fases[faseAtual];
    document.getElementById("fase-titulo").textContent = "Fase " + (faseAtual + 1);
    document.getElementById("pergunta").textContent = fase.pergunta;
    const alternativasDiv = document.getElementById("alternativas");
    alternativasDiv.innerHTML = "";
    fase.alternativas.forEach((alt, index) => {
        const letra = ["A", "B", "C", "D"][index];
        const btn = document.createElement("button");
        btn.textContent = alt;
        btn.onclick = () => verificarResposta(letra);
        alternativasDiv.appendChild(btn);
    });
}

function verificarResposta(resposta) {
    const correta = fases[faseAtual].correta;
    if (resposta === correta) {
        mostrarAnimacao();
        faseAtual++;
        if (faseAtual < fases.length) {
            setTimeout(carregarFase, 1500);
        } else {
            setTimeout(() => alert("Parabéns! Você completou todas as fases!"), 1500);
        }
    } else {
        alert("Resposta incorreta! Tente novamente.");
    }
}

function mostrarAnimacao() {
    const personagemDiv = document.getElementById("personagem-animada");
    personagemDiv.innerHTML = '<img src="images/' + personagemEscolhida.toLowerCase() + '_animada.gif" />';
}
