var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.autenticar(email, senha).then(function (resultado) {
            console.log("Resultados encontrados: " + resultado.length);
            console.log("Resultado: " + JSON.stringify(resultado));

            if (resultado.length == 1) {
                res.json({
                    id: resultado[0].id,
                    nome: resultado[0].nome,
                    email: resultado[0].email,
                    dt_nasc: resultado[0].dt_nasc,
                    tipo_membro: resultado[0].tipo_membro,
                    id_cargo: resultado[0].id_cargo,
                    id_unidade: resultado[0].id_unidade,
                    id_classe: resultado[0].id_classe,
                    imagem_perfil: resultado[0].imagem_perfil
                });
            } else if (resultado.length == 0) {
                res.status(403).send("Email e/ou senha inválido(s)");
            } else {
                res.status(403).send("Mais de um usuário com o mesmo email e senha!");
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var dt_nasc = req.body.dtNascServer;
    var tipo_membro = req.body.tipoMembroServer;
    var id_cargo = req.body.cargoServer;
    var id_unidade = req.body.unidadeServer;
    var id_classe = req.body.classeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (dt_nasc == undefined) {
        res.status(400).send("Sua data de nascimento está undefined!");
    } else if (tipo_membro == undefined) {
        res.status(400).send("Seu tipo de membro está undefined!");
    } else if (id_cargo == undefined) {
        res.status(400).send("Seu cargo está undefined!");
    } else if (id_unidade == undefined) {
        res.status(400).send("Sua unidade está undefined!");
    } else if (id_classe == undefined) {
        res.status(400).send("Sua classe está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.cadastrar(
            nome, dt_nasc, tipo_membro, id_cargo, id_unidade, id_classe, email, senha
        ).then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
}

function salvarFoto(req, res) {
    if (!req.file) {
        return res.status(400).send("Nenhuma imagem enviada");
    }

    var idUsuario = req.body.idUsuario;
    var nomeArquivo = req.file.filename;

    usuarioModel.salvarFoto(idUsuario, nomeArquivo).then(function () {
        res.json({
            success: true,
            nomeArquivo: nomeArquivo
        });
    }).catch(function (err) {
        res.status(500).send(err);
    });
}

function buscarPerfil(req, res) {
    var idUsuario = req.params.idUsuario;

    usuarioModel.buscarPerfil(idUsuario).then(function (resultado) {
        res.json(resultado);
    }).catch(function (err) {
        res.status(500).send(err);
    });
}

module.exports = {
    autenticar,
    cadastrar,
    salvarFoto,
    buscarPerfil
};
