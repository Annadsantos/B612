var quizModel = require("../models/quizModel");

function salvarResultado(req, res) {
    var fkQuiz = req.body.fkQuiz;
    var fkUsuario = req.body.fkUsuario;
    var conselho = req.body.conselho;
    var fkPersonagem = req.body.fkPersonagem || null;

    if (fkQuiz == undefined || fkUsuario == undefined || conselho == undefined) {
        res.status(400).send("Preencha tudo para gerar o resultado.");
    } else {
        quizModel.salvarResultado(fkQuiz, fkUsuario, conselho, fkPersonagem)
            .then(function (resultado) {
                res.status(200).json({
                    mensagem: "Salvo!",
                    dados: resultado
                });
            })
            .catch(function (erro) {
                console.log("Erro ao salvar:", erro);
                res.status(500).json(erro);
            });
    }
}
module.exports = {
    salvarResultado
};
