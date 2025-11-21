var database = require("../database/config");

function resultadoConselho() {
    var instrucao = `
        SELECT 
            p.resposta AS personagem,
            COUNT(*) AS total
        FROM resultadoQuiz rq
        JOIN personagem p 
            ON rq.fkPersonagem = p.idPersonagem
        WHERE rq.fkQuiz = 1
        GROUP BY p.resposta;
    `;

    console.log("Executando sql resultadoConselho: \n" + instrucao);
    return database.executar(instrucao);
}

function media() {
    var instrucao = `
SELECT conselho, COUNT(*) AS qtd
FROM resultadoQuiz
GROUP BY conselho;
    `;

    console.log("Executando sql media: \n" + instrucao);
    return database.executar(instrucao);
}

function respostaAviador() {
    var instrucao = `
SELECT conselho, COUNT(*) AS qtd
FROM resultadoQuiz
GROUP BY conselho;
    `;

    console.log("Executando sql respostaAviador: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    resultadoConselho,
    media,
    respostaAviador
};