var express = require("express");
var router = express.Router();
var usuarioController = require("../controllers/usuarioController");
var upload = require("../config/configUpload");

router.post("/cadastrar", usuarioController.cadastrar);
router.post("/autenticar", usuarioController.autenticar);
router.post("/salvarFoto", upload.single("foto"), usuarioController.salvarFotoPerfil);

module.exports = router;
