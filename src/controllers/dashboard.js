var dashboardModels = require("../models/dashboard");

function resultadoPersonagem(req, res) {
    dashboardModels.resultadoConselho()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => {
            console.log("Erro em resultadoPersonagem:", erro);
            res.status(500).json(erro);
        });
}

function mediaAcertosErros(req, res) {
    dashboardModels.media()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => {
            console.log("Erro em mediaAcertosErros:", erro);
            res.status(500).json(erro);
        });
}

function desenhoAviador(req, res) {
    dashboardModels.respostaAviador()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => {
            console.log("Erro em desenhoAviador:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    resultadoPersonagem,
    mediaAcertosErros,
    desenhoAviador
};