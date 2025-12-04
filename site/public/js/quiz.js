carregarMiniPerfil();

var perguntasOrdemUnida = [
    { enunciado: "1. O que é Ordem Unida?", alternativas: { a: "Um conjunto de movimentos organizados padronizados", b: "A forma de organizar equipes em acampamento", c: "Um tipo de marcha utilizada apenas no exército" }, correta: "a" },
    { enunciado: "2. Para que serve a Ordem Unida?", alternativas: { a: "Dar disciplina, coordenação e ritmo ao grupo", b: "Apenas para apresentações públicas", c: "Para treinar corrida" }, correta: "a" },
    { enunciado: "3. O comando 'Sentido!' significa:", alternativas: { a: "Ficar imóvel em posição de atenção", b: "Descansar no lugar", c: "Virar à direita" }, correta: "a" },
    { enunciado: "4. O comando 'Esquerda VOLVER!' significa:", alternativas: { a: "Meia-volta", b: "Virar à esquerda em 90°", c: "Virar à direita" }, correta: "b" },
    { enunciado: "5. O comando 'Ordem unida, marcha!'", alternativas: { a: "Iniciar deslocamento marchando", b: "Correr lentamente", c: "Parar imediatamente" }, correta: "a" }
];

var perguntasNosAmarras = [
    { enunciado: "1. Objetivo de um nó?", alternativas: { a: "Decorar cordas", b: "Fixar ou unir objetos", c: "Brincar" }, correta: "b" },
    { enunciado: "2. Nó direito serve para:", alternativas: { a: "Unir duas cordas", b: "Amarrar sapatos", c: "Suspender barracas" }, correta: "a" },
    { enunciado: "3. Nó mais seguro para escalar:", alternativas: { a: "Nó de oito", b: "Laço simples", c: "Meia-volta" }, correta: "a" },
    { enunciado: "4. Nó corrediço serve para:", alternativas: { a: "Ajuste de objetos", b: "Parar corrida", c: "Segurar mochilas" }, correta: "a" },
    { enunciado: "5. Nó de pescador:", alternativas: { a: "Unir duas cordas com segurança", b: "Decorar cordas", c: "Suspender bandeiras" }, correta: "a" }
];

var perguntasAcampamento = [
    { enunciado: "1. Objetivo de um acampamento?", alternativas: { a: "Aprender técnicas e convivência", b: "Dormir ao ar livre", c: "Jogar futebol" }, correta: "a" },
    { enunciado: "2. Como montar barraca?", alternativas: { a: "De qualquer jeito", b: "Seguindo instruções", c: "Encostar na árvore" }, correta: "b" },
    { enunciado: "3. Cuidado essencial na fogueira:", alternativas: { a: "Manter longe das barracas", b: "Acender perto", c: "Nenhum" }, correta: "a" },
    { enunciado: "4. Função do kit primeiros socorros:", alternativas: { a: "Evitar acidentes", b: "Decoração", c: "Só para professores" }, correta: "a" },
    { enunciado: "5. Atitude correta na trilha:", alternativas: { a: "Respeitar natureza", b: "Correr sozinho", c: "Ignorar instruções" }, correta: "a" }
];


var perguntas = [];
var perguntaAtual = 0;
var respostas = {};
var idEspecialidadeAtual = 1;

function iniciarQuiz(idEsp) {
    idEspecialidadeAtual = idEsp;
    perguntaAtual = 0;
    respostas = {};

    if (idEsp === 1) {
        perguntas = perguntasOrdemUnida;
        document.querySelector(".quiz-titulo").innerText = "Especialidade: Ordem Unida";
    } else if (idEsp === 2) {
        perguntas = perguntasNosAmarras;
        document.querySelector(".quiz-titulo").innerText = "Especialidade: Nós e Amarras";
    } else {
        perguntas = perguntasAcampamento;
        document.querySelector(".quiz-titulo").innerText = "Especialidade: Acampamento";
    }

    document.getElementById("telaCategorias").style.display = "none";
    document.getElementById("telaQuiz").style.display = "block";

    carregarPergunta();
}

function carregarPergunta() {
    var p = perguntas[perguntaAtual];

    var html = "<h2>" + p.enunciado + "</h2><div class='alternativas'>";
    for (var letra in p.alternativas) {
        html += "<label class='alternativa'>" +
            "<input type='radio' name='alt' value='" + letra + "' " +
            (respostas[perguntaAtual] === letra ? "checked" : "") + ">" +
            letra.toUpperCase() + ") " + p.alternativas[letra] +
            "</label>";
    }
    html += "</div>";

    document.getElementById("areaPergunta").innerHTML = html;

    if (perguntaAtual === perguntas.length - 1) {
        document.getElementById("btnAvancar").style.display = "none";
        document.getElementById("btnSubmeter").style.display = "block";
    } else {
        document.getElementById("btnAvancar").style.display = "block";
        document.getElementById("btnSubmeter").style.display = "none";
    }
}

function avancar() {
    var selecionada = document.querySelector("input[name='alt']:checked");
    if (!selecionada) {
        alert("Selecione uma alternativa!");
        return;
    }

    respostas[perguntaAtual] = selecionada.value;
    perguntaAtual++;
    carregarPergunta();
}

function voltar() {
    if (perguntaAtual === 0) {
        voltarCategorias();
        return;
    }
    perguntaAtual--;
    carregarPergunta();
}

function voltarCategorias() {
    perguntaAtual = 0;
    respostas = {};
    document.getElementById("telaCategorias").style.display = "block";
    document.getElementById("telaQuiz").style.display = "none";

    var divResultado = document.getElementById("resultadoFinal");
    divResultado.style.display = "none";
    divResultado.innerHTML = "";
}

function salvarEspecialidade(idEspecialidade) {
    var usuarioStr = sessionStorage.getItem("USUARIO_DADOS");
    if (!usuarioStr) return;

    var usuario = JSON.parse(usuarioStr);


    fetch("/especialidade/ganhar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idUsuario: usuario.id, idEspecialidade: idEspecialidade })
    });

    var nomeEsp = "Acampamento";
    if (idEspecialidade === 1) nomeEsp = "Ordem Unida";
    else if (idEspecialidade === 2) nomeEsp = "Nós e Amarras";

    if (!usuario.especialidades) usuario.especialidades = [];

    var jaExiste = false;
    for (var i = 0; i < usuario.especialidades.length; i++) {
        if (usuario.especialidades[i].id_especialidade === idEspecialidade) {
            jaExiste = true;
            break;
        }
    }

    if (!jaExiste) {
        usuario.especialidades.push({ id_especialidade: idEspecialidade, nome_especialidade: nomeEsp });
    }

    sessionStorage.setItem("USUARIO_DADOS", JSON.stringify(usuario));
}

function finalizarQuiz() {
    var selecionada = document.querySelector("input[name='alt']:checked");
    if (!selecionada) {
        alert("Selecione uma alternativa!");
        return;
    }

    respostas[perguntaAtual] = selecionada.value;

    var acertos = 0;
    for (var i = 0; i < perguntas.length; i++) {
        if (respostas[i] === perguntas[i].correta) acertos++;
    }

    var usuarioStr = sessionStorage.getItem("USUARIO_DADOS");
    if (!usuarioStr) return;

    var usuario = JSON.parse(usuarioStr);


    fetch("/dadosQuiz/registrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            idUsuario: usuario.id,
            idEspecialidade: idEspecialidadeAtual,
            qtdAcertos: acertos,
            totalPerguntas: perguntas.length
        })
    });

    var div = document.getElementById("resultadoFinal");
    div.style.display = "block";
    document.getElementById("telaQuiz").style.display = "none";

    var nomeEsp = "Acampamento";
    if (idEspecialidadeAtual === 1) nomeEsp = "Ordem Unida";
    else if (idEspecialidadeAtual === 2) nomeEsp = "Nós e Amarras";

    if (acertos >= 3) {
        div.innerHTML = "<h2>Meus Parabéns!!</h2>" +
            "<p>Você acertou <strong>" + acertos + "</strong> de " + perguntas.length + "!</p>" +
            "<p>Você ganhou a especialidade de " + nomeEsp + "!</p>" +
            "<button id='btnPerfil'>Ir para o perfil</button>";
        salvarEspecialidade(idEspecialidadeAtual);
        document.getElementById("btnPerfil").onclick = function () { window.location.href = "tela-perfil.html"; };
    } else {
        div.innerHTML = "<h2>Boa tentativa!</h2>" +
            "<p>Você acertou <strong>" + acertos + "</strong> de " + perguntas.length + ".</p>" +
            "<button onclick='voltarCategorias()' id='btnPerfil'>Tentar novamente</button>";
    }
}
