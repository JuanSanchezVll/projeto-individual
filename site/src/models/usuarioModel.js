var database = require("../database/config");

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT 
            id_usuario AS id,
            nome,
            email,
            senha,
            tipo_membro,
            id_cargo,
            id_unidade,
            id_classe,
            dt_nasc,
            imagem_perfil
        FROM usuario 
        WHERE email = '${email}' 
        AND senha = '${senha}';
    `;
    return database.executar(instrucaoSql);
}

function cadastrar(nome, dt_nasc, tipo_membro, id_cargo, id_unidade, id_classe, email, senha) {
    var instrucaoSql = `
        INSERT INTO usuario 
        (nome, dt_nasc, tipo_membro, id_cargo, id_unidade, id_classe, email, senha) 
        VALUES 
        ('${nome}', '${dt_nasc}', '${tipo_membro}', '${id_cargo}', '${id_unidade}', '${id_classe}', '${email}', '${senha}');
    `;
    return database.executar(instrucaoSql);
}

function salvarFoto(idUsuario, nomeArquivo) {
    var instrucaoSql = `
        UPDATE usuario
        SET imagem_perfil = '${nomeArquivo}'
        WHERE id_usuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

function buscarPerfil(idUsuario) {
    var instrucaoSql = `
        SELECT *
        FROM usuario
        WHERE id_usuario = ${idUsuario};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    salvarFoto,
    buscarPerfil
};
