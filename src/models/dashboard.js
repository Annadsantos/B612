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
    SELECT q.nome AS quiz,
    COUNT(*) AS qtd
        FROM resultadoQuiz rq
            JOIN quiz q ON rq.fkQuiz = q.idQuiz
                GROUP BY rq.fkQuiz;

    `;

    console.log("Executando sql media: \n" + instrucao);
    return database.executar(instrucao);
}

function respostaAviador() {
    var instrucao = `
        SELECT fkQuiz, COUNT(*) AS qtd
        FROM resultadoQuiz
        GROUP BY fkQuiz; 
    `;

    console.log("Executando sql respostaAviador: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    resultadoConselho,
    media,
    respostaAviador
};