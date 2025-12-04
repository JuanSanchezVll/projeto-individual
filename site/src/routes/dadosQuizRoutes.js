var express = require("express");
var router = express.Router();
var dadosQuizController = require("../controllers/dadosQuizController");


router.post("/registrar", function (req, res) {
    dadosQuizController.registrarResultado(req, res);
});


router.get("/listar/:idUsuario", function (req, res) {
    dadosQuizController.listarResultados(req, res);
});


router.get("/ultimo/:idUsuario", function (req, res) {
    dadosQuizController.ultimoQuiz(req, res);
});


router.get("/resumo/:idUsuario", function (req, res) {
    dadosQuizController.resumoPorEspecialidade(req, res);
});

module.exports = router;
