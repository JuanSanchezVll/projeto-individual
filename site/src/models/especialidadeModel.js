var database = require("../database/config");

function registrarEspecialidade(idUsuario, idEspecialidade) {
    var sql = `
        INSERT INTO usuario_especialidade (id_usuario, id_especialidade)
        VALUES (?, ?)
        ON DUPLICATE KEY UPDATE data_conquista = CURRENT_TIMESTAMP;
    `;
    return database.executar(sql, [idUsuario, idEspecialidade]);
}

function buscarEspecialidadesUsuario(idUsuario) {
    var sql = `
        SELECT e.id_especialidade, e.nome_especialidade
        FROM especialidade e
        JOIN usuario_especialidade ue ON e.id_especialidade = ue.id_especialidade
        WHERE ue.id_usuario = ?;
    `;
    return database.executar(sql, [idUsuario]);
}

module.exports = {
    registrarEspecialidade,
    buscarEspecialidadesUsuario
};
