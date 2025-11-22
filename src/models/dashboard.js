var database = require("../database/config");

function contarRespostasImagem() {
    var instrucao = `
        SELECT resposta,
               COUNT(*) AS qtd
        FROM usuario
        WHERE resposta IS NOT NULL
        GROUP BY resposta;
    `;
    console.log("Executando sql contarRespostasImagem: \n" + instrucao);
    return database.executar(instrucao);
}

function contarConselhosQuiz1() {
    var instrucao = `
        SELECT 
            p.resposta AS personagem,
            COUNT(*) AS qtd
        FROM resultadoQuiz rq
        JOIN personagem p 
            ON rq.fkPersonagem = p.idPersonagem
        WHERE rq.fkQuiz = 1
        GROUP BY p.resposta;
    `;
    console.log("Executando sql contarConselhosQuiz1: \n" + instrucao);
    return database.executar(instrucao);
}

function resumoQuiz2() {
    var instrucao = `
        SELECT conselho
        FROM resultadoQuiz
        WHERE fkQuiz = 2;
    `;
    console.log("Executando sql resumoQuiz2: \n" + instrucao);
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

module.exports = {
    contarRespostasImagem,
    contarConselhosQuiz1,
    resumoQuiz2,
    media
};
