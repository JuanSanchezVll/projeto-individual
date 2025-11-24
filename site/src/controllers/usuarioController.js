var usuarioModel = require("../models/usuarioModel");

function cadastrar(req, res) {
    usuarioModel.cadastrar(req.body)
        .then(resultado => {
            res.json({ success: true, message: "Cadastro realizado!" });
        })
        .catch(erro => {
            res.json({ success: false, error: erro.sqlMessage || erro });
        });
}

function autenticar(req, res) {
    const { emailServer, senhaServer } = req.body;

    usuarioModel.autenticar(emailServer, senhaServer)
        .then(resultado => {
            if (!resultado || resultado.length === 0) {
                return res.json({ success: false, error: "E-mail ou senha inválidos" });
            }

            const user = resultado[0];

            res.json({
                success: true,
                usuario: {
                    id: user.id,
                    nome: user.nome,
                    email: user.email,
                    imagem_perfil: user.imagem_perfil || null,
                    tipo_membro: user.tipo_membro,
                    id_cargo: user.id_cargo,
                    id_unidade: user.id_unidade,
                    id_classe: user.id_classe,
                    dt_nasc: user.dt_nasc
                }
            });
        })
        .catch(erro => {
            res.json({ success: false, error: erro.sqlMessage || erro });
        });
}

function salvarFotoPerfil(req, res) {
    if (!req.file) {
        return res.json({ success: false, error: "Nenhuma imagem enviada" });
    }

    const idUsuario = req.body.idUsuario;
    const nomeArquivo = req.file.filename;

    usuarioModel.salvarFoto(idUsuario, nomeArquivo)
        .then(() => {
            res.json({ success: true, nomeArquivo });
        })
        .catch(erro => {
            res.json({ success: false, error: erro.sqlMessage || erro });
        });
}

module.exports = {
    cadastrar,
    autenticar,
    salvarFotoPerfil
};
