function carregarEspecialidades() {
    var usuario = JSON.parse(sessionStorage.getItem("USUARIO_DADOS"));
    if (!usuario) return;

    var container = document.getElementById("card-esp");
    if (!container) return;

    container.innerHTML = "";

    var lista = usuario.especialidades;
    if (!lista || lista.length === 0) {
        container.innerHTML = '<p class="sem-especialidade">Nenhuma especialidade conquistada ainda.</p>';
        return;
    }

    var icones = {
        "Ordem Unida": "ordem-unida.webp",
        "Nós e Amarras": "nos-amarras.webp",
        "Acampamento": "acampamento.webp",
        "Cidadania Cristã": "missionarias.png",
        "Intercessor": "missionarias2.png",
        "Evangelismo": "missionarias2.webp",
        "Astronomia": "astronomia.png",
        "Árvores": "arvores.webp",
        "Répteis": "repteis.webp"
    };

    for (var i = 0; i < lista.length; i++) {
        var e = lista[i];
        var card = document.createElement("div");
        card.className = "card-esp";

        var icone = icones[e.nome_especialidade];
        if (!icone) {
            icone = "padrao.png";
        }

        card.innerHTML = '<img src="../assets/icones/dashboard/' + icone + '">' +
            '<span>' + e.nome_especialidade + '</span>';

        container.appendChild(card);
    }
}
