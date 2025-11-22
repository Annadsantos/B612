var dashboardModels = require("../models/dashboard");

function respostasImagem(req, res) {
    console.log("Entrando em respostasImagem");
    dashboardModels.contarRespostasImagem()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro em respostasImagem:", erro);
            res.status(500).json(erro);
        });
}

function resultadoPersonagem(req, res) {
    dashboardModels.resultadoConselho()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro em resultadoPersonagem:", erro);
            res.status(500).json(erro);
        });
}

function quiz2Resumo(req, res) {
    dashboardModels.resumoQuiz2()
        .then(function (resultado) {

            console.log("Resultado bruto quiz2Resumo:", resultado);

            let acima50 = 0;
            let abaixo50 = 0;

            resultado.forEach(function (linha) {
                if (!linha.conselho) return;

                let texto = linha.conselho;

                let antesParenteses = texto.indexOf("(");
                let posPorcento = texto.indexOf("%");

                if (antesParenteses != -1 && posPorcento != -1) {
                    let numeroStr = texto.slice(antesParenteses + 1, posPorcento).trim();
                    let percentual = Number(numeroStr);

                    console.log("Percentual encontrado:", percentual);

                    if (!isNaN(percentual)) {
                        if (percentual >= 50) {
                            acima50++;
                        } else {
                            abaixo50++;
                        }
                    }
                }
            });
            console.log("Final:", { acima50, abaixo50 });

            res.status(200).json({
                acima50,
                abaixo50,
                total: acima50 + abaixo50
            });
        })
        .catch(function (erro) {
            console.log("Erro em quiz2Resumo:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    respostasImagem,
    resultadoPersonagem,
    quiz2Resumo
};
