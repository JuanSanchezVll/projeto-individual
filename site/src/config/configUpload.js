const multer = require("multer");
const crypto = require("crypto");

const diretorio = "public/assets/";

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, diretorio),

    filename: (req, file, cb) => {
        const ext = file.originalname.split(".").pop();
        const nome = crypto.randomBytes(32).toString("hex");
        cb(null, `${nome}.${ext}`);
    }
});

module.exports = multer({ storage });
