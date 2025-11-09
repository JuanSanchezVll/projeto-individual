-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE aquatech;

USE aquatech;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

desc usuario;

alter table usuario add column cpf char(11);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 3', 'XYZ123');


insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2);
insert into aquario (descricao, fk_empresa) values ('Aquário de golfinho', 3);


INSERT INTO medida (dht11_umidade, dht11_temperatura, chave, momento, fk_aquario) VALUES
    (45, 25, 1, '2020-03-01 08:00:00', 1),
    (55, 26, 0, '2021-03-10 10:30:00', 2),
    (60, 27, 1, '2022-05-22 13:45:00', 3);
    
    INSERT INTO medida (dht11_umidade, dht11_temperatura, chave, momento, fk_aquario) VALUES
    (45, 30, 1, '2020-03-03 08:00:00', 1),
    (50, 35, 1, '2020-03-04 08:00:00', 1),
    (60, 15, 1, '2020-03-05 08:00:00', 1);
    
        INSERT INTO medida (dht11_umidade, dht11_temperatura, chave, momento, fk_aquario) VALUES
    (14, 20, 1, '2020-03-10 08:00:00', 2);
    
    INSERT INTO medida (dht11_umidade, dht11_temperatura, chave, momento, fk_aquario) VALUES
    (20, 20, 1, '2020-03-11 08:00:00', 3);



select * from usuario;
select * from medida;
select * from aquario;
select * from empresa;
select * from aviso;


    

INSERT INTO medida (dht11_umidade, dht11_temperatura, chave, momento, fk_aquario) VALUES
    (45, 25, 1, '2020-03-01 08:00:00', 1),
    (55, 26, 0, '2021-03-10 10:30:00', 2),
    (60, 27, 1, '2022-05-22 13:45:00', 1),
    (70, 28, 1, '2022-09-15 15:10:00', 2),
    (65, 26, 0, '2023-01-08 09:00:00', 1),
    (72, 29, 1, '2023-04-19 18:25:00', 2),
    (68, 27, 0, '2023-08-02 14:10:00', 1),
    (75, 28, 1, '2024-02-10 07:45:00', 2),
    (80, 30, 1, '2024-06-30 12:00:00', 1),
    (85, 31, 0, '2024-10-20 16:30:00', 2);
    
    
    INSERT INTO medida (dht11_umidade, dht11_temperatura, chave, momento, fk_aquario) VALUES
    (45, 25, 1, '2020-03-01 08:00:00', 1),
    (55, 26, 0, '2021-03-10 10:30:00', 2);
    
    INSERT INTO medida (dht11_umidade, dht11_temperatura, chave, momento, fk_aquario) VALUES
    (80, 70, 1, '2025-11-08 08:00:00', 1);
    
    INSERT INTO medida (dht11_umidade, dht11_temperatura, chave, momento, fk_aquario) VALUES
    (90, 80, 1, '2025-11-07 08:00:00', 2);
  
    
    
    




