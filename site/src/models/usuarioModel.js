var database = require("../database/config");

function cadastrar(usuario) {
    const instrucaoSql = `
        INSERT INTO usuario
        (nome, dt_nasc, tipo_membro, email, senha, id_cargo, id_unidade, id_classe)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `;
    return database.executar(instrucaoSql, [
        usuario.nome,
        usuario.dt_nasc,
        usuario.tipo_membro,
        usuario.email,
        usuario.senha,
        usuario.id_cargo,
        usuario.id_unidade,
        usuario.id_classe
    ]);
}

function autenticar(email, senha) {
    const instrucaoSql = `
        SELECT 
            id_usuario AS id,
            nome,
            email,
            imagem_perfil,
            tipo_membro,
            id_cargo,
            id_unidade,
            id_classe,
            dt_nasc
        FROM usuario 
        WHERE email = ? AND senha = ?;
    `;

    return database.executar(instrucaoSql, [email, senha]);
}


function buscarPerfil(idUsuario) {
    const instrucaoSql = `
        SELECT 
            id_usuario AS id,
            nome,
            dt_nasc,
            tipo_membro,
            id_cargo,
            id_unidade,
            id_classe,
            imagem_perfil
        FROM usuario
        WHERE id_usuario = ?;
    `;
    return database.executar(instrucaoSql, [idUsuario]);
}

function salvarFoto(idUsuario, nomeArquivo) {
    const instrucaoSql = `
        UPDATE usuario
        SET imagem_perfil = ?
        WHERE id_usuario = ?;
    `;
    return database.executar(instrucaoSql, [nomeArquivo, idUsuario]);
}

module.exports = {
    cadastrar,
    autenticar,
    buscarPerfil,
    salvarFoto
};
