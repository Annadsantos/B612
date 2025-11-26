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

function conselhosQuiz1(req, res) {
    dashboardModels.contarConselhosQuiz1()
        .then(function (resultado) {
            console.log("Conselhos Quiz1:", resultado);
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro em conselhosQuiz1:", erro);
            res.status(500).json(erro);
        });
}

function quiz2Resumo(req, res) {
    console.log("Entrando em quiz2Resumo");

    dashboardModels.resumoQuiz2()
        .then(function (resultado) {

            console.log("Resultado 'puro' quiz2Resumo:", resultado);

            var acima50 = 0;
            var abaixo50 = 0;

            if (!Array.isArray(resultado)) {
                resultado = [];
            }

            resultado.forEach(function (linha) {
                if (!linha.conselho) return;

                var texto = String(linha.conselho);

                var posParenteses = texto.indexOf("(");
                var posPorcento = texto.indexOf("%");

                if (posParenteses == -1 || posPorcento == -1 || posPorcento <= posParenteses) {
                    console.log("Formato inesperado de conselho:", texto);
                    return;
                }

                var numero = "";

                for (var i = posParenteses + 1; i < posPorcento; i++) {
                    var c = texto[i];

                    if (c >= '0' && c <= '9') {
                        numero += c;
                    }
                }

                var percentual = parseInt(numero);

                console.log("numero:", numero, "percentual:", percentual);

                if (!isNaN(percentual)) {
                    if (percentual >= 50) {
                        acima50++;
                    } else {
                        abaixo50++;
                    }
                }
            });

            console.log("Final:", { acima50: acima50, abaixo50: abaixo50 });

            res.status(200).json({
                acima50: acima50,
                abaixo50: abaixo50,
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
    quiz2Resumo,
    conselhosQuiz1
};
