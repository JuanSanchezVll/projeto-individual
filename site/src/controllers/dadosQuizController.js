var dadosQuizModel = require("../models/dadosQuizModel");

function registrarResultado(req, res) {
    var idUsuario = req.body.idUsuario;
    var idEspecialidade = req.body.idEspecialidade;
    var qtdAcertos = req.body.qtdAcertos;
    var totalPerguntas = req.body.totalPerguntas;

    if (!idUsuario || !idEspecialidade || qtdAcertos == null || totalPerguntas == null) {
        return res.status(400).json({ erro: "Dados incompletos para registrar quiz!" });
    }

    dadosQuizModel.registrarResultado(idUsuario, idEspecialidade, qtdAcertos, totalPerguntas)
        .then(function () {
            res.status(200).json({ mensagem: "Resultado registrado com sucesso!" });
        }).catch(function (erro) {
            console.log("Erro ao registrar resultado:", erro);
            res.status(500).json(erro);
        });
}

function listarResultados(req, res) {
    var idUsuario = req.params.idUsuario;

    dadosQuizModel.buscarResultadosUsuario(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log("Erro ao buscar resultados:", erro);
            res.status(500).json(erro);
        });
}

function ultimoQuiz(req, res) {
    var idUsuario = req.params.idUsuario;

    dadosQuizModel.buscarUltimoQuiz(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado[0] || null);
        }).catch(function (erro) {
            console.log("Erro ao buscar último quiz:", erro);
            res.status(500).json(erro);
        });
}

function resumoPorEspecialidade(req, res) {
    var idUsuario = req.params.idUsuario;

    dadosQuizModel.buscarResumoPorEspecialidade(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log("Erro ao buscar resumo:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    registrarResultado,
    listarResultados,
    ultimoQuiz,
    resumoPorEspecialidade
};

