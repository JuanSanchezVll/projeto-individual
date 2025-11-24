var mysql = require("mysql2");

var mySqlConfig = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Foundever.25",
    database: process.env.DB_DATABASE || "castor",
    port: process.env.DB_PORT || 3307
};

function executar(instrucao, valores = []) {
    return new Promise((resolve, reject) => {

        var conexao = mysql.createConnection(mySqlConfig);

        conexao.connect((erro) => {
            if (erro) {
                console.error("DATABASE: Erro ao conectar:", erro);
                reject(erro);
                return;
            }
        });

        conexao.query(instrucao, valores, (erro, resultados) => {
            conexao.end();

            if (erro) {
                console.error("DATABASE ERROR:", erro.sqlMessage);
                reject(erro);
            } else {
                resolve(resultados);
            }
        });

        conexao.on("error", (erro) => {
            console.error("DATABASE: Erro de conexão:", erro.sqlMessage);
        });
    });
}

module.exports = { executar };