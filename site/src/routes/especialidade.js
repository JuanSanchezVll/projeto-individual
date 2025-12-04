var express = require("express");
var router = express.Router();
var especialidadeController = require("../controllers/especialidadeController");


router.post("/ganhar", function (req, res) {
    especialidadeController.ganharEspecialidade(req, res);
});


router.get("/listar/:idUsuario", function (req, res) {
    especialidadeController.listarDoUsuario(req, res);
});

module.exports = router;
