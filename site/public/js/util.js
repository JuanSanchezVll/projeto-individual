var tiposMembroMap = {
    1: "Desbravador",
    2: "Diretoria",
    3: "Visitante"
};

var cargosMap = {
    1: "Diretor", 2: "D. Associado", 3: "Capelão", 4: "Secretário", 5: "Tesoureiro",
    6: "Conselheiro", 7: "Instrutor", 8: "Coord. Atividades", 9: "Logística",
    10: "Comunicação", 11: "N/A"
};

var unidadesMap = {
    1: "Diretoria", 2: "Guepardos", 3: "Leões", 4: "Panteras", 5: "Onças", 6: "N/A"
};

var classesMap = {
    1: "Amigo", 2: "Companheiro", 3: "Pesquisador", 4: "Pioneiro",
    5: "Excursionista", 6: "Guia", 7: "N/A"
};

function calcularIdade(dataNasc) {
    if (!dataNasc) return "-";

    var anoNasc = parseInt(dataNasc.substring(0, 4));
    var anoAtual = 2025;
    var idade = anoAtual - anoNasc;
    return idade;
}
