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


CREATE TABLE jogo2048 (
idJogo INT PRIMARY KEY AUTO_INCREMENT,
pontuacao INT,
dtJogo DATE DEFAULT (CURRENT_DATE),
fkUsuario INT,
	CONSTRAINT fkUsuarioJogo2048
		FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE personagem (
idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
resposta VARCHAR(80),
descricao VARCHAR(255)
);

CREATE TABLE votacao (
fkUsuario INT,
fkPersonagem INT,
FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario),
FOREIGN KEY(fkPersonagem) REFERENCES personagem(idPersonagem),
PRIMARY KEY (fkUsuario, fkPersonagem),
qntdVotos INT,
vitorioso VARCHAR(45)
);

CREATE TABLE quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45)
);

CREATE TABLE resultadoQuiz (
fkQuiz INT,
fkUsuario INT,
FOREIGN KEY(fkQuiz) REFERENCES quiz(idQuiz),
FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario),
PRIMARY KEY(fkQuiz, fkUsuario),
conselho VARCHAR(255)
);

CREATE TABLE pergunta (
idPergunta INT PRIMARY KEY AUTO_INCREMENT,
pergunta VARCHAR(255),
fkQuiz INT,
FOREIGN KEY(fkQuiz) REFERENCES quiz(idQuiz)
);

CREATE TABLE resposta (
idResposta INT PRIMARY KEY AUTO_INCREMENT,
fkPergunta INT,
FOREIGN KEY(fkPergunta) REFERENCES pergunta(idPergunta),
opcao CHAR(1),
validacao TINYINT NOT NULL,
descricao VARCHAR(255)
);