var express = require("express");
var router = express.Router();

var dadosQuizController = require("../controllers/dadosQuizController");

router.post("/registrar", (req, res) => dadosQuizController.registrarResultado(req, res));

router.get("/listar/:idUsuario", (req, res) => dadosQuizController.listarResultados(req, res));

router.get("/ultimo/:idUsuario", (req, res) => dadosQuizController.ultimoQuiz(req, res));

router.get("/resumo/:idUsuario", (req, res) => dadosQuizController.resumoPorEspecialidade(req, res));

module.exports = router;
