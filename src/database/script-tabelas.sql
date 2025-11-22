-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE b612;
USE b612;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(80),
emailUsuario VARCHAR(255) UNIQUE NOT NULL,
senhaUsuario VARCHAR(255) NOT NULL,
resposta VARCHAR(45) NOT NULL
);

CREATE TABLE personagem (
idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
resposta VARCHAR(80),
descricao VARCHAR(255)
);

INSERT INTO personagem (resposta, descricao) VALUES
	('raposa', 'A Raposa ensina sobre laços, afeto e responsabilidade.'),
	('rosa', 'A Rosa representa sensibilidade, cuidado próprio e limites.'),
	('aviador', 'O Aviador simboliza imaginação, coragem e propósito.');
    
UPDATE personagem SET descricao = '“Você se torna eternamente responsável por aquilo que cativa.” Talvez você precise olhar com carinho para os seus laços.'
	WHERE idPersonagem = 1;

UPDATE personagem SET descricao = '“É preciso exigir de cada um o que cada um pode dar.” Talvez seja hora de cuidar de si e colocar limites.'
	WHERE idPersonagem = 2;

UPDATE personagem SET descricao = '“Só se vê bem com o coração. O essencial é invisível aos olhos.” Talvez você precise confiar mais nos seus sonhos.'
	WHERE idPersonagem = 3;

CREATE TABLE quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) NOT NULL
);

INSERT INTO quiz (nome) VALUES
	('Qual conselho você precisa?'),
	('Você se lembra da história?');

CREATE TABLE resultadoQuiz (
idResultado INT PRIMARY KEY AUTO_INCREMENT,
fkQuiz INT NOT NULL,
fkUsuario INT NOT NULL,
fkPersonagem INT NULL,
conselho VARCHAR(255),
FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz),
FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
FOREIGN KEY (fkPersonagem) REFERENCES personagem(idPersonagem)
);

CREATE TABLE pergunta (
idPergunta INT PRIMARY KEY AUTO_INCREMENT,
pergunta VARCHAR(255) NOT NULL,
fkQuiz INT NOT NULL,
FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz)
);

CREATE TABLE resposta (
idResposta INT PRIMARY KEY AUTO_INCREMENT,
fkPergunta INT NOT NULL,
opcao CHAR(1) NOT NULL,
validacao TINYINT NOT NULL,
descricao VARCHAR(255) NOT NULL,
FOREIGN KEY (fkPergunta) REFERENCES pergunta(idPergunta)
);

-- PERGUNTAS/RESPOSTAS DO QUIZZES

-- PRIMEIRA PERGUNTA (QUIZ 2)
INSERT INTO pergunta (idPergunta, pergunta, fkQuiz) VALUES
	(1, 'O que o Pequeno Príncipe fazia em seu planeta antes de viajar?', 2);

INSERT INTO resposta (idResposta, fkPergunta, opcao, validacao, descricao) VALUES
	(1, 1, 'A', 1, 'Cuidava de sua rosa'),
	(2, 1, 'B', 0, 'Caçava estrelas'),
	(3, 1, 'C', 0, 'Construía aviões'),
	(4, 1, 'D', 0, 'Visitava planetas vizinhos diariamente');

-- SEGUNDA PERGUNTA (QUIZ 2)
INSERT INTO pergunta (idPergunta, pergunta, fkQuiz) VALUES
	(2, 'Qual era o maior medo da rosa?', 2);

INSERT INTO resposta (idResposta, fkPergunta, opcao, validacao, descricao) VALUES
	(5, 2, 'A', 0, 'Ser esquecida'),
	(6, 2, 'B', 1, 'Os baobás'),
	(7, 2, 'C', 0, 'O vento'),
	(8, 2, 'D', 0, 'Os tigres');

-- TERCEIRA PERGUNTA (QUIZ 2)
INSERT INTO pergunta (idPergunta, pergunta, fkQuiz) VALUES
	(3, 'Quem ensina ao Pequeno Príncipe o verdadeiro significado de cativar?', 2);

INSERT INTO resposta (idResposta, fkPergunta, opcao, validacao, descricao) VALUES
	(9, 3, 'A', 0, 'A serpente'),
	(10, 3, 'B', 0, 'A rosa'),
	(11, 3, 'C', 1, 'A raposa'),
	(12, 3, 'D', 0, 'O rei');

-- QUARTA PERGUNTA (QUIZ 2)
INSERT INTO pergunta (idPergunta, pergunta, fkQuiz) VALUES
	(4, 'Por que o aviador caiu no deserto do Saara?', 2);

INSERT INTO resposta (idResposta, fkPergunta, opcao, validacao, descricao) VALUES
	(13, 4, 'A', 0, 'Foi levado por uma tempestade'),
	(14, 4, 'B', 1, 'Seu avião quebrou'),
	(15, 4, 'C', 0, 'Ele queria encontrar o Pequeno Príncipe'),
	(16, 4, 'D', 0, 'Ele fazia um mapa do deserto');

-- QUINTA PERGUNTA (QUIZ 2)
INSERT INTO pergunta (idPergunta, pergunta, fkQuiz) VALUES
	(5, 'Segundo a raposa, o que é essencial?', 2);

INSERT INTO resposta (idResposta, fkPergunta, opcao, validacao, descricao) VALUES
	(17, 5, 'A', 0, 'A força'),
	(18, 5, 'B', 0, 'O dinheiro'),
	(19, 5, 'C', 0, 'O amor'),
	(20, 5, 'D', 1, 'O invisível aos olhos');