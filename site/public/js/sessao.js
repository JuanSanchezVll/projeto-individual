function validarSessao() {
    var dados = sessionStorage.getItem("USUARIO_DADOS");
    if (!dados) {
        window.location = "../login.html";
        return;
    }

    var usuario = JSON.parse(dados);
    var b_usuario = document.getElementById("b_usuario");
    if (b_usuario) {
        if (usuario.nome) {
            b_usuario.innerHTML = usuario.nome;
        } else {
            b_usuario.innerHTML = "";
        }
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}

function carregarMiniPerfil() {
    var usuarioStr = sessionStorage.getItem("USUARIO_DADOS");
    if (!usuarioStr) return;

    var usuario = JSON.parse(usuarioStr);

    var nomeMini = document.getElementById("nomeMini");
    var fotoMini = document.getElementById("fotoMini");

    if (nomeMini) {
        var primeiroNome = usuario.nome ? usuario.nome.split(" ")[0] : "";
        nomeMini.innerText = "Olá " + primeiroNome + "!";
    }

    if (fotoMini) {
        var caminhoFoto = "/assets/imgs/usuario.png";
        if (usuario.imagem_perfil && usuario.imagem_perfil !== "") {
            caminhoFoto = "/assets/" + usuario.imagem_perfil;
        }
        fotoMini.style.backgroundImage = "url('" + caminhoFoto + "')";
    }
}
