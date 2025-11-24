var database = require("../database/config");

function registrarResultado(idUsuario, idEspecialidade, qtdAcertos, totalPerguntas) {
    var sql = `
    INSERT INTO dados_quiz (id_usuario, id_especialidade, qtd_acertos, total_perguntas)
    VALUES (?, ?, ?, ?)
`;
    return database.executar(sql, [idUsuario, idEspecialidade, qtdAcertos, totalPerguntas]);
}

function buscarResultadosUsuario(idUsuario) {
    var sql = `
        SELECT dq.*, e.nome_especialidade
        FROM dados_quiz dq
        JOIN especialidade e ON dq.id_especialidade = e.id_especialidade
        WHERE dq.id_usuario = ?
        ORDER BY dq.data_inclusao ASC
    `;
    return database.executar(sql, [idUsuario]);
}

function buscarUltimoQuiz(idUsuario) {
    var sql = `
        SELECT dq.*, e.nome_especialidade
        FROM dados_quiz dq
        JOIN especialidade e ON dq.id_especialidade = e.id_especialidade
        WHERE dq.id_usuario = ?
        ORDER BY dq.data_inclusao DESC
        LIMIT 1
    `;
    return database.executar(sql, [idUsuario]);
}

function buscarResumoPorEspecialidade(idUsuario) {
    var sql = `
        SELECT e.nome_especialidade, COUNT(*) as quizzes_jogados, SUM(dq.qtd_acertos) as total_acertos, SUM(dq.total_perguntas) as total_perguntas
        FROM dados_quiz dq
        JOIN especialidade e ON dq.id_especialidade = e.id_especialidade
        WHERE dq.id_usuario = ?
        GROUP BY e.id_especialidade
    `;
    return database.executar(sql, [idUsuario]);
}

module.exports = {
    registrarResultado,
    buscarResultadosUsuario,
    buscarUltimoQuiz,
    buscarResumoPorEspecialidade
};
