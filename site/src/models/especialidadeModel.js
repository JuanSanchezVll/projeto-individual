var database = require("../database/config");

function registrarEspecialidade(idUsuario, idEspecialidade) {

    var instrucaoVerificacao = `
        SELECT * 
        FROM usuario_especialidade 
        WHERE id_usuario = ${idUsuario} 
          AND id_especialidade = ${idEspecialidade};
    `;

    return database.executar(instrucaoVerificacao).then((resultado) => {
        if (resultado.length > 0) {
            var instrucaoAtualizar = `
                UPDATE usuario_especialidade 
                SET data_conquista = CURRENT_TIMESTAMP 
                WHERE id_usuario = ${idUsuario} 
                  AND id_especialidade = ${idEspecialidade};
            `;
            return database.executar(instrucaoAtualizar);
        } else {
            var instrucaoInserir = `
                INSERT INTO usuario_especialidade (id_usuario, id_especialidade, data_conquista)
                VALUES (${idUsuario}, ${idEspecialidade}, CURRENT_TIMESTAMP);
            `;
            return database.executar(instrucaoInserir);
        }
    });
}

function buscarEspecialidadesUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT e.id_especialidade, e.nome_especialidade
        FROM especialidade e
        JOIN usuario_especialidade ue ON e.id_especialidade = ue.id_especialidade
        WHERE ue.id_usuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarEspecialidade,
    buscarEspecialidadesUsuario
};
