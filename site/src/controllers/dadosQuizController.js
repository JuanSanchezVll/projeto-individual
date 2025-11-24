var dadosQuizModel = require("../models/dadosQuizModel");

function registrarResultado(req, res) {
    const { idUsuario, idEspecialidade, qtdAcertos, totalPerguntas } = req.body;

    if (!idUsuario || !idEspecialidade || qtdAcertos == null || totalPerguntas == null) {
        return res.status(400).json({ erro: "Dados incompletos para registrar quiz!" });
    }

    dadosQuizModel.registrarResultado(idUsuario, idEspecialidade, qtdAcertos, totalPerguntas)
        .then(() => res.status(200).json({ mensagem: "Resultado registrado com sucesso!" }))
        .catch(erro => {
            console.error("Erro ao registrar resultado:", erro);
            res.status(500).json(erro);
        });
}

function listarResultados(req, res) {
    const idUsuario = req.params.idUsuario;

    dadosQuizModel.buscarResultadosUsuario(idUsuario)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => {
            console.error("Erro ao buscar resultados:", erro);
            res.status(500).json(erro);
        });
}

function ultimoQuiz(req, res) {
    const idUsuario = req.params.idUsuario;

    dadosQuizModel.buscarUltimoQuiz(idUsuario)
        .then(resultado => res.status(200).json(resultado[0] || null))
        .catch(erro => {
            console.error("Erro ao buscar último quiz:", erro);
            res.status(500).json(erro);
        });
}

function resumoPorEspecialidade(req, res) {
    const idUsuario = req.params.idUsuario;

    dadosQuizModel.buscarResumoPorEspecialidade(idUsuario)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => {
            console.error("Erro ao buscar resumo:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    registrarResultado,
    listarResultados,
    ultimoQuiz,
    resumoPorEspecialidade
};
