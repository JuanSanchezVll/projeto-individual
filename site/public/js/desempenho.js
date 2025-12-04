function salvarDadosDesempenho(ultimoQuiz, resumo, todosResultados) {
    try {
        var strUltimoQuiz = JSON.stringify(ultimoQuiz);
        var strResumo = JSON.stringify(resumo);
        var strTodosResultados = JSON.stringify(todosResultados);

        sessionStorage.setItem("DESENVOLVIMENTO_ULTIMO_QUIZ", strUltimoQuiz);
        sessionStorage.setItem("DESENVOLVIMENTO_RESUMO", strResumo);
        sessionStorage.setItem("DESENVOLVIMENTO_TODOS_RESULTADOS", strTodosResultados);

    } catch (e) {
        console.log("Erro ao salvar desempenho:", e);
    }
}

function obterDadosDesempenho() {
    var ultimoQuiz = null;
    var resumo = null;
    var todosResultados = null;

    try {
        var tmp = sessionStorage.getItem("DESENVOLVIMENTO_ULTIMO_QUIZ");
        if (tmp != null) {
            ultimoQuiz = JSON.parse(tmp);
        }

        tmp = sessionStorage.getItem("DESENVOLVIMENTO_RESUMO");
        if (tmp != null) {
            resumo = JSON.parse(tmp);
        }

        tmp = sessionStorage.getItem("DESENVOLVIMENTO_TODOS_RESULTADOS");
        if (tmp != null) {
            todosResultados = JSON.parse(tmp);
        }

    } catch (e) {
        console.log("Erro ao ler desempenho:", e);
    }

    var dados = {};
    dados.ultimoQuiz = ultimoQuiz;
    dados.resumo = resumo;
    dados.todosResultados = todosResultados;

    return dados;
}
