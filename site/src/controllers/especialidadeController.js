var especialidadeModel = require("../models/especialidadeModel");

function ganharEspecialidade(req, res) {
    const idUsuario = req.body.idUsuario;
    const idEspecialidade = req.body.idEspecialidade;

    if (!idUsuario || !idEspecialidade) {
        return res.status(400).json({ erro: "idUsuario ou idEspecialidade não enviados!" });
    }

    especialidadeModel.registrarEspecialidade(idUsuario, idEspecialidade)
        .then(() => res.status(200).json({ mensagem: "Especialidade adicionada com sucesso!" }))
        .catch(erro => {
            console.error("Erro ao adicionar especialidade:", erro);
            res.status(500).json(erro);
        });
}

function listarDoUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    especialidadeModel.buscarEspecialidadesUsuario(idUsuario)
        .then((resultado) => {
            res.status(200).json(resultado);
        })
        .catch((erro) => {
            console.log("Erro ao buscar especialidades:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    ganharEspecialidade,
    listarDoUsuario
};
