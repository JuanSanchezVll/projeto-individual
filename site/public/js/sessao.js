function validarSessao() {
    const usuario = JSON.parse(sessionStorage.getItem("USUARIO_DADOS"));
    if (!usuario) {
        window.location = "../login.html";
        return;
    }

    const elementoNome = document.getElementById("b_usuario");
    if (elementoNome) elementoNome.innerText = usuario.nome;
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

function aguardar() {
    const divAguardar = document.getElementById("div_aguardar");
    if (divAguardar) divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    const divAguardar = document.getElementById("div_aguardar");
    const divErrosLogin = document.getElementById("div_erros_login");

    if (divAguardar) divAguardar.style.display = "none";
    if (texto && divErrosLogin) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

function calcularIdade(dataNasc) {
    if (!dataNasc) return "-";
    const hoje = new Date();
    const nasc = new Date(dataNasc);
    let idade = hoje.getFullYear() - nasc.getFullYear();
    const m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
    return idade;
}

function carregarPerfilNaTela() {

    fetch(`/especialidade/listar/${usuario.id}`)
        .then(res => res.json())
        .then(especialidades => {

            console.log("Especialidades recebidas do backend:", especialidades); 
            const cardsContainer = document.getElementById("card-esp");
            if (!cardsContainer) return;

            cardsContainer.innerHTML = ""; 

            especialidades.forEach(e => {
                let icone = "";
                switch (e.nome_especialidade) {
                    case "Ordem Unida": icone = "ordem-unidawebp.webp"; break;
                    case "Nós e Amarras": icone = "nos-amarras.webp"; break;
                    case "Acampamento": icone = "acampamento.webp"; break;
                    case "Cidadania Cristã": icone = "missionarias.png"; break;
                    case "Intercessor": icone = "missionarias2.png"; break;
                    case "Evangelismo": icone = "missionarias2.webp"; break;
                    case "Astronomia": icone = "astronomia.png"; break;
                    case "Árvores": icone = "arvores.webp"; break;
                    case "Répteis": icone = "repteis.webp"; break;
                    default: icone = "pdrao.png";
                }

                const card = document.createElement("div");
                card.classList.add("card-esp");
                card.innerHTML = `
                    <img src="../assets/icones/dashboard/${icone}" alt="${e.nome_especialidade}">
                    <span>${e.nome_especialidade}</span>
                `;
                cardsContainer.appendChild(card);
            });
        })
        .catch(err => console.error("Erro ao carregar especialidades:", err));





    const usuario = JSON.parse(sessionStorage.getItem("USUARIO_DADOS"));
    if (!usuario) return;

    const tituloPerfil = document.getElementById("tituloPerfil");
    if (tituloPerfil) tituloPerfil.innerText = `Olá, ${usuario.nome || "Usuário"}!`;

    const nomeMini = document.getElementById("nomeMini");
    if (nomeMini) nomeMini.innerText = usuario.nome ? usuario.nome.split(" ")[0] : "Usuário";

    let caminho = ""; 

    if (usuario.imagem_perfil && usuario.imagem_perfil.trim() !== "" && usuario.imagem_perfil !== "null") {
        caminho = `../assets/imgs/${usuario.imagem_perfil}`;
    }

    const fotoGrande = document.getElementById("fotoGrande");
    const fotoMini = document.getElementById("fotoMini");

    if (fotoGrande) fotoGrande.style.backgroundImage = caminho ? `url('${caminho}')` : "none";
    if (fotoMini) fotoMini.style.backgroundImage = caminho ? `url('${caminho}')` : "none";

    const idade = calcularIdade(usuario.dt_nasc);

    if (document.getElementById("nomeUsuario")) document.getElementById("nomeUsuario").innerText = usuario.nome || "-";
    if (document.getElementById("idadeUsuario")) document.getElementById("idadeUsuario").innerText = idade;
    if (document.getElementById("emailUsuario")) document.getElementById("emailUsuario").innerText = usuario.email || "-";

    if (document.getElementById("tipoMembro")) document.getElementById("tipoMembro").innerText = usuario.tipo_membro || "-";
    if (document.getElementById("cargoUsuario")) document.getElementById("cargoUsuario").innerText = usuario.id_cargo || "-";
    if (document.getElementById("unidadeUsuario")) document.getElementById("unidadeUsuario").innerText = usuario.id_unidade || "-";
    if (document.getElementById("classeUsuario")) document.getElementById("classeUsuario").innerText = usuario.id_classe || "-";


}

function salvarDadosDesempenho(ultimoQuiz, resumo, todosResultados) {
    sessionStorage.setItem("DESENVOLVIMENTO_ULTIMO_QUIZ", JSON.stringify(ultimoQuiz));
    sessionStorage.setItem("DESENVOLVIMENTO_RESUMO", JSON.stringify(resumo));
    sessionStorage.setItem("DESENVOLVIMENTO_TODOS_RESULTADOS", JSON.stringify(todosResultados));
}

function obterDadosDesempenho() {
    const ultimoQuiz = JSON.parse(sessionStorage.getItem("DESENVOLVIMENTO_ULTIMO_QUIZ"));
    const resumo = JSON.parse(sessionStorage.getItem("DESENVOLVIMENTO_RESUMO"));
    const todosResultados = JSON.parse(sessionStorage.getItem("DESENVOLVIMENTO_TODOS_RESULTADOS"));
    return { ultimoQuiz, resumo, todosResultados };
}
