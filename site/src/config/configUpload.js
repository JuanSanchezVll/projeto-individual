const multer = require('multer');
const crypto = require('crypto');

var diretorio = 'public/assets/';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, diretorio);
    },

    filename: function (req, file, cb) {
        var partes = file.originalname.split('.');
        var extensaoArquivo = partes[partes.length - 1];
        var novoNomeArquivo = crypto.randomBytes(64).toString('hex');

        cb(null, novoNomeArquivo + '.' + extensaoArquivo);
    }
});

module.exports = multer({ storage: storage });
