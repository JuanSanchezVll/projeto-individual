var database = require("../database/config");

function registrarResultado(idUsuario, idEspecialidade, qtdAcertos, totalPerguntas) {
    var instrucaoSql = `
        INSERT INTO dados_quiz (id_usuario, id_especialidade, qtd_acertos, total_perguntas)
        VALUES (${idUsuario}, ${idEspecialidade}, ${qtdAcertos}, ${totalPerguntas});
    `;
    return database.executar(instrucaoSql);
}

function buscarResultadosUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT dq.*, e.nome_especialidade
        FROM dados_quiz dq
        JOIN especialidade e ON dq.id_especialidade = e.id_especialidade
        WHERE dq.id_usuario = ${idUsuario}
        ORDER BY dq.data_inclusao ASC;
    `;
    return database.executar(instrucaoSql);
}

function buscarUltimoQuiz(idUsuario) {
    var instrucaoSql = `
        SELECT dq.*, e.nome_especialidade
        FROM dados_quiz dq
        JOIN especialidade e ON dq.id_especialidade = e.id_especialidade
        WHERE dq.id_usuario = ${idUsuario}
        ORDER BY dq.data_inclusao DESC
        LIMIT 1;
    `;
    return database.executar(instrucaoSql);
}

function buscarResumoPorEspecialidade(idUsuario) {
    var instrucaoSql = `
        SELECT e.nome_especialidade, COUNT(*) as quizzes_jogados, SUM(dq.qtd_acertos) as total_acertos, SUM(dq.total_perguntas) as total_perguntas
        FROM dados_quiz dq
        JOIN especialidade e ON dq.id_especialidade = e.id_especialidade
        WHERE dq.id_usuario = ${idUsuario}
        GROUP BY e.id_especialidade;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarResultado,
    buscarResultadosUsuario,
    buscarUltimoQuiz,
    buscarResumoPorEspecialidade
};
