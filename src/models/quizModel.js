var database = require("../database/config");

function salvarResultado(fkQuiz, fkUsuario, conselho) {
    console.log("ACESSEI O quizModel. Enviando dados para o banco.");
    console.log(" Quiz:", fkQuiz, "| Usuário:", fkUsuario, "| Conselho:", conselho);

    var instrucao = `
        INSERT INTO resultadoQuiz (fkQuiz, fkUsuario, conselho)
        VALUES (${fkQuiz}, ${fkUsuario}, '${conselho}')
        ON DUPLICATE KEY UPDATE
            conselho = VALUES(conselho);
    `;

    console.log("Executando SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    salvarResultado
};
