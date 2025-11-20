var database = require("../database/config");

function salvarResultado(fkQuiz, fkUsuario, conselho, fkPersonagem) {
    console.log("ACESSEI O quizModel. Enviando dados para o banco.");
    console.log(" Quiz:", fkQuiz, "| Usuário:", fkUsuario, "| Conselho:", conselho, "| Personagem:", fkPersonagem);

    var valorFkPersonagem = fkPersonagem == null || fkPersonagem == undefined
        ? "NULL"
        : Number(fkPersonagem);

    var instrucao = `
        INSERT INTO resultadoQuiz (fkQuiz, fkUsuario, fkPersonagem, conselho)
        VALUES (${fkQuiz}, ${fkUsuario}, ${valorFkPersonagem}, '${conselho}')
        ON DUPLICATE KEY UPDATE
            fkPersonagem = VALUES(fkPersonagem),
            conselho = VALUES(conselho);
    `;

    console.log("Executando SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    salvarResultado
};
