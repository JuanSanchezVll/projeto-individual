var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");
var upload = require("../config/configUpload");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});


router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});


router.post("/salvarFoto", upload.single("foto"), function (req, res) {
    usuarioController.salvarFoto(req, res);
});


router.get("/perfil/:idUsuario", function (req, res) {
    usuarioController.buscarPerfil(req, res);
});

module.exports = router;
