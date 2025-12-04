function carregarPerfilNaTela() {
    var usuarioStr = sessionStorage.getItem("USUARIO_DADOS");
    if (!usuarioStr) return;

    var usuario = JSON.parse(usuarioStr);

    carregarMiniPerfil();

    var fotoGrande = document.getElementById("fotoGrande");
    var caminhoFoto = "../assets/imgs/usuario.png";
    if (usuario.imagem_perfil && usuario.imagem_perfil != "") {
        caminhoFoto = "../assets/" + usuario.imagem_perfil;
    }
    if (fotoGrande) {
        fotoGrande.style.backgroundImage = "url('" + caminhoFoto + "')";
    }

    var nomeElem = document.getElementById("nomeUsuario");
    var emailElem = document.getElementById("emailUsuario");
    var idadeElem = document.getElementById("idadeUsuario");
    var tipoElem = document.getElementById("tipoMembro");
    var cargoElem = document.getElementById("cargoUsuario");
    var unidadeElem = document.getElementById("unidadeUsuario");
    var classeElem = document.getElementById("classeUsuario");

    if (nomeElem) nomeElem.innerText = usuario.nome;
    if (emailElem) emailElem.innerText = usuario.email;
    if (idadeElem) idadeElem.innerText = calcularIdade(usuario.dt_nasc);
    if (tipoElem) tipoElem.innerText = tiposMembroMap[usuario.tipo_membro];
    if (cargoElem) cargoElem.innerText = cargosMap[usuario.id_cargo];
    if (unidadeElem) unidadeElem.innerText = unidadesMap[usuario.id_unidade];
    if (classeElem) classeElem.innerText = classesMap[usuario.id_classe];

    fetch("/especialidade/listar/" + usuario.id, { cache: 'no-store' })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                console.log("Erro ao buscar especialidades:", response.status);
                return [];
            }
        })
        .then(function (lista) {
            usuario.especialidades = lista;
            sessionStorage.setItem("USUARIO_DADOS", JSON.stringify(usuario));
            carregarEspecialidades();
        })
        .catch(function (erro) {
            console.log("Erro na requisição de especialidades:", erro);
        });
}

function configurarUpload() {
    const inputFile = document.getElementById("input_file");
    inputFile.addEventListener("change", function () {
        const arquivo = this.files[0];
        if (!arquivo) return;

        const usuario = JSON.parse(sessionStorage.getItem("USUARIO_DADOS"));
        if (!usuario || !usuario.id) return;

        const formData = new FormData();
        formData.append("foto", arquivo);
        formData.append("idUsuario", usuario.id);

        console.log("Enviando arquivo:", arquivo.name);

        fetch("/usuarios/salvarFoto", { method: "POST", body: formData })
            .then(res => res.json())
            .then(json => {
                console.log("Upload resposta:", json);
                if (!json.success) return alert("Erro ao enviar foto");

                const caminho = `/assets/${json.nomeArquivo}`;
                document.getElementById("fotoGrande").style.backgroundImage = `url('${caminho}')`;
                document.getElementById("fotoMini").style.backgroundImage = `url('${caminho}')`;

                usuario.imagem_perfil = json.nomeArquivo;
                sessionStorage.setItem("USUARIO_DADOS", JSON.stringify(usuario));
            })
            .catch(err => console.error("Erro no fetch upload:", err));
    });
}
