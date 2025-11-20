-- banco
CREATE DATABASE castor;
USE castor;

CREATE TABLE unidade (
  id_unidade INT AUTO_INCREMENT PRIMARY KEY,
  nome_unidade VARCHAR(60) NOT NULL,
  descricao VARCHAR(255),
  qtd_membros INT DEFAULT 0,
  idade_min INT,
  idade_max INT,
  sexo ENUM('M','F','A') DEFAULT 'A'
);

INSERT INTO unidade (nome_unidade, descricao, qtd_membros, idade_min, idade_max, sexo) VALUES
('Diretoria', 'Equipe administrativa do clube', 0, NULL, NULL, 'A'),
('Guepardos', 'Unidade masculina - 10 a 13 anos', 0, 10, 13, 'M'),
('Leões', 'Unidade masculina - 13 a 16 anos', 0, 13, 16, 'M'),
('Panteras', 'Unidade feminina - 10 a 13 anos', 0, 10, 13, 'F'),
('Onças', 'Unidade feminina - 13 a 16 anos', 0, 13, 16, 'F');


SELECT * FROM unidade;

CREATE TABLE usuario (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  dt_nasc DATE NOT NULL,
  sexo ENUM('M','F') NOT NULL,
  email VARCHAR(120) UNIQUE,
  telefone VARCHAR(25),
  nome_responsavel VARCHAR(120),
  telefone_responsavel VARCHAR(25),
  tipo_membro ENUM('DESBRAVADOR','DIRETORIA','VISITANTE','EX_MEMBRO') DEFAULT 'DESBRAVADOR',
  senha_hash VARCHAR(255) NOT NULL
);


INSERT INTO usuario (id_usuario, nome, dt_nasc, sexo, email, telefone, nome_responsavel, telefone_responsavel, tipo_membro, senha_hash) VALUES
-- DIRETORIA (maiores de idade)
(1,'Juan Sanchez', '2004-09-07', 'M', 'juan.sanchez@example.com', '11988887777', NULL, NULL, 'DIRETORIA', 'hash_juan_123'),
(2,'Isabella Moura', '2004-10-31', 'F', 'isabella.moura@example.com', '11977776666', NULL, NULL, 'DIRETORIA', 'hash_isabella_123'),

-- DESBRAVADORES MASCULINOS 10–13 (GUEPARDOS) 3..6
(3,'Pietro Silva', '2013-01-08', 'M', 'pietro.silva@example.com', '11955553333', 'Ricardo Silva', '11944443333', 'DESBRAVADOR', 'hash_pietro_123'),
(4,'Nicolas Andrade', '2013-12-03', 'M', 'nicolas.andrade@example.com', '11944442222', 'Juliana Andrade', '11933332222', 'DESBRAVADOR', 'hash_nicolas_123'),
(5,'Henrique Santos', '2013-11-02', 'M', 'henrique.santos@example.com', '11987651234', 'Roberta Santos', '11996541234', 'DESBRAVADOR', 'hash_henrique_123'),
(6,'Samuel Rocha', '2012-07-18', 'M', 'samuel.rocha@example.com', '11912341200', 'Bruno Rocha', '11950005500', 'DESBRAVADOR', 'hash_samuel_123'),

-- DESBRAVADORES MASCULINOS 13–16 (LEÕES) 7..10
(7,'Wesley Ramos', '2011-04-09', 'M', 'wesley.ramos@example.com', '11966664444', 'Fernanda Ramos', '11955554444', 'DESBRAVADOR', 'hash_wesley_123'),
(8,'Victor Calo', '2010-03-28', 'M', 'victor.calo@example.com', '11922223333', 'Simone Calo', '11911112222', 'DESBRAVADOR', 'hash_victor_123'),
(9,'Carlos Menezes', '2010-10-11', 'M', 'carlos.menezes@example.com', '11933338888', 'Tatiane Menezes', '11922224444', 'DESBRAVADOR', 'hash_carlos_123'),
(10,'Rafael Torres', '2009-12-22', 'M', 'rafael.torres@example.com', '11966665555', 'Lúcia Torres', '11955554444', 'DESBRAVADOR', 'hash_rafael_123'),

-- DESBRAVADORAS FEMININAS 10–13 (PANTERAS) 11..14
(11,'Marina Oliveira', '2011-06-21', 'F', 'marina.oliveira@example.com', '11912341234', 'Fábio Oliveira', '11998769876', 'DESBRAVADOR', 'hash_marina_123'),
(12,'Larissa Prado', '2012-02-10', 'F', 'larissa.prado@example.com', '11995123456', 'Claudia Prado', '11999992222', 'DESBRAVADOR', 'hash_larissa_123'),
(13,'Aline Ferreira', '2013-03-05', 'F', 'aline.ferreira@example.com', '11977778888', 'Marcela Ferreira', '11988887777', 'DESBRAVADOR', 'hash_aline_123'),
(14,'Julia Costa', '2011-11-17', 'F', 'julia.costa@example.com', '11944443333', 'Patrícia Costa', '11955554444', 'DESBRAVADOR', 'hash_julia_123'),

-- DESBRAVADORAS FEMININAS 13–16 (ONÇAS) 15..18
(15,'Fernanda Valle', '2009-09-14', 'F', 'fernanda.valle@example.com', '11933331111', 'Paulo Valle', '11922221111', 'DESBRAVADOR', 'hash_fernanda_123'),
(16,'Bruna Ribeiro', '2009-05-22', 'F', 'bruna.ribeiro@example.com', '11944446666', 'Elaine Ribeiro', '11955557777', 'DESBRAVADOR', 'hash_bruna_123'),
(17,'Camila Duarte', '2010-01-29', 'F', 'camila.duarte@example.com', '11966663333', 'Marcos Duarte', '11911115555', 'DESBRAVADOR', 'hash_camila_123'),
(18,'Patricia Silva', '2010-12-14', 'F', 'patricia.silva@example.com', '11999990000', 'Rosa Silva', '11988886666', 'DESBRAVADOR', 'hash_patricia_123'),

-- RESTANTE DIRETORIA 19..26
(19,'Marcos Diretoria', '1985-03-10', 'M', 'marcos.diretor@example.com', '11911112222', NULL, NULL, 'DIRETORIA', 'hash_marcos_123'),
(20,'Ana Diretoria', '1989-07-22', 'F', 'ana.diretora@example.com', '11922223333', NULL, NULL, 'DIRETORIA', 'hash_ana_123'),
(21,'Roberto Diretoria', '1978-11-05', 'M', 'roberto.diretor@example.com', '11933334444', NULL, NULL, 'DIRETORIA', 'hash_roberto_123'),
(22,'Lucia Diretoria', '1982-02-17', 'F', 'lucia.diretora@example.com', '11944445555', NULL, NULL, 'DIRETORIA', 'hash_lucia_123'),
(23,'Carlos Instrutor', '1990-01-30', 'M', 'carlos.instrutor@example.com', '11955556666', NULL, NULL, 'DIRETORIA', 'hash_carlos_instrutor_123'),
(24,'Fernanda Chefe', '1987-09-12', 'F', 'fernanda.chefe@example.com', '11966667777', NULL, NULL, 'DIRETORIA', 'hash_fernanda_chefe_123'),
(25,'Paulo Logistica', '1986-04-08', 'M', 'paulo.logistica@example.com', '11977778888', NULL, NULL, 'DIRETORIA', 'hash_paulo_log_123'),
(26,'Julia Comunicação', '1992-12-20', 'F', 'julia.comu@example.com', '11988889999', NULL, NULL, 'DIRETORIA', 'hash_julia_comu_123');

SELECT * FROM usuario;

CREATE TABLE unidade_usuario (
  id_unidade_usuario INT AUTO_INCREMENT PRIMARY KEY,
  id_unidade INT NOT NULL,
  id_usuario INT NOT NULL,
  data_entrada DATE DEFAULT NULL,
  data_saida DATE DEFAULT NULL,
  conselheiro TINYINT(1) DEFAULT 0,
  conselheiro_associado TINYINT(1) DEFAULT 0,
  FOREIGN KEY (id_unidade) REFERENCES unidade(id_unidade),
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- DIRETORIA (id_unidade = 1)
INSERT INTO unidade_usuario (id_unidade, id_usuario, data_entrada) VALUES
(1, 1, '2024-01-01'),  -- Juan (Diretoria)
(1, 2, '2024-01-01'),  -- Isabella (Diretoria)
(1,19, '2024-01-01'),  -- Marcos Diretor
(1,20, '2024-01-01'),  -- Ana Diretora
(1,21, '2024-01-01'),  -- Roberto Diretor
(1,22, '2024-01-01'),  -- Lucia Diretora
(1,23, '2024-01-01'),  -- Carlos Instrutor
(1,24, '2024-01-01'),  -- Fernanda Chefe
(1,25, '2024-01-01'),  -- Paulo Logistica
(1,26, '2024-01-01');  -- Julia Comunicação

-- GUEPARDOS (id_unidade = 2) 3..6
INSERT INTO unidade_usuario (id_unidade, id_usuario, data_entrada) VALUES
(2, 3, '2024-02-01'),
(2, 4, '2024-02-01'),
(2, 5, '2024-02-01'),
(2, 6, '2024-02-01');

-- LEÕES (id_unidade = 3) 7..10
INSERT INTO unidade_usuario (id_unidade, id_usuario, data_entrada) VALUES
(3, 7, '2024-02-01'),
(3, 8, '2024-02-01'),
(3, 9, '2024-02-01'),
(3,10, '2024-02-01');

-- PANTERAS (id_unidade = 4) 11..14
INSERT INTO unidade_usuario (id_unidade, id_usuario, data_entrada) VALUES
(4,11, '2024-02-01'),
(4,12, '2024-02-01'),
(4,13, '2024-02-01'),
(4,14, '2024-02-01');

-- ONÇAS (id_unidade = 5) 15..18
INSERT INTO unidade_usuario (id_unidade, id_usuario, data_entrada) VALUES
(5,15, '2024-02-01'),
(5,16, '2024-02-01'),
(5,17, '2024-02-01'),
(5,18, '2024-02-01');

SELECT * FROM unidade_usuario;


CREATE TABLE cargo (
  id_cargo INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(80) NOT NULL,
  afazeres VARCHAR(255)
);

INSERT INTO cargo (id_cargo, nome, afazeres) VALUES
(1, 'Diretor', 'Responsável pela administração geral do clube'),
(2, 'Diretor Associado', 'Auxilia a direção e supervisiona setores do clube'),
(3, 'Capelão', 'Responsável pela parte espiritual e apoio religioso'),
(4, 'Secretário', 'Registro, documentação e relatórios'),
(5, 'Tesoureiro', 'Gestão financeira e controle de caixa'),
(6, 'Conselheiro de Unidade', 'Acompanha uma unidade específica'),
(7, 'Instrutor', 'Ministra especialidades e treinamentos'),
(8, 'Coordenador de Atividades', 'Planeja atividades e acampamentos'),
(9, 'Logística', 'Materiais, equipamentos e transporte'),
(10,'Comunicação', 'Fotos, redes e divulgação');

SELECT * FROM cargo;

CREATE TABLE cargo_usuario (
  id_cargo_usuario INT AUTO_INCREMENT PRIMARY KEY,
  fk_cargo INT NOT NULL,
  fk_usuario INT NOT NULL,
  data_entrada DATE,
  data_saida DATE DEFAULT NULL,
  FOREIGN KEY (fk_cargo) REFERENCES cargo(id_cargo),
  FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario) 
);

-- Atribuir cada cargo a um membro da diretoria (um por cargo)
-- IDs de diretoria: 1,2,19..26 (total 10 pessoas)
INSERT INTO cargo_usuario (fk_cargo, fk_usuario, data_entrada) VALUES
(1, 1, '2023-01-01'),  -- Diretor -> Juan
(2,19, '2023-01-01'),  -- Diretor Associado -> Marcos Diretor
(3,20, '2023-01-01'),  -- Capelão -> Ana Diretora
(4, 2, '2023-01-01'),  -- Secretário -> Isabella
(5,21, '2023-01-01'),  -- Tesoureiro -> Roberto Diretor
(6,22, '2023-01-01'),  -- Conselheiro de Unidade -> Lucia Diretor(a)
(7,23, '2023-01-01'),  -- Instrutor -> Carlos Instrutor (apenas 1 instrutor da diretoria)
(8,24, '2023-01-01'),  -- Coordenador de Atividades -> Fernanda Chefe
(9,25, '2023-01-01'),  -- Logística -> Paulo Logistica
(10,26,'2023-01-01');  -- Comunicação -> Julia Comu

SELECT cu.id_cargo_usuario, c.nome AS cargo, u.id_usuario, u.nome AS diretor, cu.data_entrada
FROM cargo_usuario cu
JOIN cargo c ON cu.fk_cargo = c.id_cargo
JOIN usuario u ON cu.fk_usuario = u.id_usuario
ORDER BY c.id_cargo;

SELECT * FROM cargo_usuario;


CREATE TABLE especialidade (
  id_especialidade INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  categoria VARCHAR(100) NOT NULL
);

INSERT INTO especialidade (id_especialidade, nome, categoria) VALUES
(1,'Nós e Amarras','Atividades Recreativas'),
(2,'Resgate Básico','Ciência e Saúde'),
(3,'Arte Culinária','Habilidades Domésticas'),
(4,'Conservação Ambiental','Estudo da Natureza'),
(5,'Primeiros Socorros - Básico','Ciência e Saúde'),
(6,'Crochê','Artes e Habilidades Manuais'),
(7,'Mapa e Bússola','Atividades Recreativas'),
(8,'Sobrevivência','Atividades Recreativas'),
(9,'Música - Básico','Artes e Habilidades Manuais'),
(10,'Computação - Básico','Atividades Profissionais');

SELECT * FROM especialidade;


-- TABELA: info_especialidade (usa id_usuario)
-- Cada desbravador terá pelo menos 3 especialidades
-- Instrutor (da diretoria) será usado como instrutor nas linhas.
CREATE TABLE info_especialidade (
  id_info INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  id_especialidade INT NOT NULL,
  nivel VARCHAR(50),
  data_inclusao DATE,
  instrutor VARCHAR(120),
  observacao TEXT,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
  FOREIGN KEY (id_especialidade) REFERENCES especialidade(id_especialidade)
);

-- 'Carlos Instrutor' (id 23) como o nome do instrutor para estes registros:
-- Atribuir 3 especialidades por desbravador (usuários 3..18).

INSERT INTO info_especialidade (id_usuario, id_especialidade, nivel, data_inclusao, instrutor) VALUES
-- usuario 3 (Pietro) -> 1,2,3
(3,1,'Completo','2024-03-01','Carlos Instrutor'),
(3,2,'Em andamento','2024-03-01','Carlos Instrutor'),
(3,3,'Em andamento','2024-03-01','Carlos Instrutor'),

-- usuario 4 (Nicolas) -> 1,4,5
(4,1,'Completo','2024-03-02','Carlos Instrutor'),
(4,4,'Em andamento','2024-03-02','Carlos Instrutor'),
(4,5,'Planejado','2024-03-02','Carlos Instrutor'),

-- usuario 5 (Henrique) -> 2,3,7
(5,2,'Completo','2024-03-03','Carlos Instrutor'),
(5,3,'Em andamento','2024-03-03','Carlos Instrutor'),
(5,7,'Planejado','2024-03-03','Carlos Instrutor'),

-- usuario 6 (Samuel) -> 1,8,9
(6,1,'Completo','2024-03-04','Carlos Instrutor'),
(6,8,'Em andamento','2024-03-04','Carlos Instrutor'),
(6,9,'Planejado','2024-03-04','Carlos Instrutor'),

-- usuario 7 (Wesley) -> 3,5,8
(7,3,'Completo','2024-03-05','Carlos Instrutor'),
(7,5,'Em andamento','2024-03-05','Carlos Instrutor'),
(7,8,'Em andamento','2024-03-05','Carlos Instrutor'),

-- usuario 8 (Victor) -> 2,4,7
(8,2,'Completo','2024-03-06','Carlos Instrutor'),
(8,4,'Em andamento','2024-03-06','Carlos Instrutor'),
(8,7,'Planejado','2024-03-06','Carlos Instrutor'),

-- usuario 9 (Carlos M.) -> 1,6,9
(9,1,'Completo','2024-03-07','Carlos Instrutor'),
(9,6,'Em andamento','2024-03-07','Carlos Instrutor'),
(9,9,'Planejado','2024-03-07','Carlos Instrutor'),

-- usuario 10 (Rafael) -> 3,5,10
(10,3,'Completo','2024-03-08','Carlos Instrutor'),
(10,5,'Em andamento','2024-03-08','Carlos Instrutor'),
(10,10,'Planejado','2024-03-08','Carlos Instrutor'),

-- user 11 (Marina) -> 1,2,9
(11,1,'Completo','2024-03-09','Carlos Instrutor'),
(11,2,'Em andamento','2024-03-09','Carlos Instrutor'),
(11,9,'Planejado','2024-03-09','Carlos Instrutor'),

-- usuario 12 (Larissa) -> 2,7,3
(12,2,'Completo','2024-03-10','Carlos Instrutor'),
(12,7,'Em andamento','2024-03-10','Carlos Instrutor'),
(12,3,'Planejado','2024-03-10','Carlos Instrutor'),

-- usuario 13 (Aline) -> 1,4,6
(13,1,'Completo','2024-03-11','Carlos Instrutor'),
(13,4,'Em andamento','2024-03-11','Carlos Instrutor'),
(13,6,'Planejado','2024-03-11','Carlos Instrutor'),

-- usuario 14 (Julia) -> 3,9,10
(14,3,'Completo','2024-03-12','Carlos Instrutor'),
(14,9,'Em andamento','2024-03-12','Carlos Instrutor'),
(14,10,'Planejado','2024-03-12','Carlos Instrutor'),

-- usuario 15 (Fernanda) -> 5,8,2
(15,5,'Completo','2024-03-13','Carlos Instrutor'),
(15,8,'Em andamento','2024-03-13','Carlos Instrutor'),
(15,2,'Planejado','2024-03-13','Carlos Instrutor'),

-- usuario 16 (Bruna) -> 1,7,4
(16,1,'Completo','2024-03-14','Carlos Instrutor'),
(16,7,'Em andamento','2024-03-14','Carlos Instrutor'),
(16,4,'Planejado','2024-03-14','Carlos Instrutor'),

-- usuario 17 (Camila) -> 3,6,8
(17,3,'Completo','2024-03-15','Carlos Instrutor'),
(17,6,'Em andamento','2024-03-15','Carlos Instrutor'),
(17,8,'Planejado','2024-03-15','Carlos Instrutor'),

-- usuario 18 (Patricia) -> 2,5,10
(18,2,'Completo','2024-03-16','Carlos Instrutor'),
(18,5,'Em andamento','2024-03-16','Carlos Instrutor'),
(18,10,'Planejado','2024-03-16','Carlos Instrutor');

-- especialidades por desbravador
SELECT u.id_usuario, u.nome, e.id_especialidade, e.nome AS especialidade, ie.nivel
FROM info_especialidade ie
JOIN usuario u ON ie.id_usuario = u.id_usuario
JOIN especialidade e ON ie.id_especialidade = e.id_especialidade
ORDER BY u.id_usuario, ie.id_especialidade;


CREATE TABLE classe (
  id_classe INT AUTO_INCREMENT PRIMARY KEY,
  nome_classe VARCHAR(100) NOT NULL,
  idade_min INT,
  idade_max INT
);

INSERT INTO classe (id_classe, nome_classe, idade_min, idade_max) VALUES
(1,'Amigo',10,10),
(2,'Companheiro',11,11),
(3,'Pesquisador',12,12),
(4,'Pioneiro',13,13),
(5,'Excursionista',14,14),
(6,'Guia',15,15);

SELECT * FROM classe;


-- TABELA: usuario_classe — usa id_usuario
-- 1 classe por usuario com base na idade calculada em 2024-02-01
CREATE TABLE usuario_classe (
  id_usuario_classe INT AUTO_INCREMENT PRIMARY KEY,
  id_classe INT NOT NULL,
  id_usuario INT NOT NULL,
  data_inclusao DATE,
  data_saida DATE DEFAULT NULL,
  FOREIGN KEY (id_classe) REFERENCES classe(id_classe),
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) 
);

-- Calculamos as idades em 01/02/2024 (mesma referência usada anteriormente)
-- Usando os valores de dt_nasc conhecidos, inserimos a classe correspondente àquela idade:
-- mapeamento: 10->1, 11->2, 12->3, 13->4, 14->5, 15->6

-- Com base nos dt_nasc acima as inserções são:
INSERT INTO usuario_classe (id_classe, id_usuario, data_inclusao) VALUES
(2, 3, '2024-02-01'),  -- Pietro (idade 11) -> Companheiro
(1, 4, '2024-02-01'),  -- Nicolas (idade 10) -> Amigo
(2, 5, '2024-02-01'),  -- Henrique (11) -> Companheiro
(2, 6, '2024-02-01'),  -- Samuel (11) -> Companheiro
(3, 7, '2024-02-01'),  -- Wesley (12) -> Pesquisador
(4, 8, '2024-02-01'),  -- Victor (13) -> Pioneiro
(4, 9, '2024-02-01'),  -- Carlos (13) -> Pioneiro
(5,10, '2024-02-01'),  -- Rafael (14) -> Excursionista
(3,11, '2024-02-01'),  -- Marina (12) -> Pesquisador
(2,12, '2024-02-01'),  -- Larissa (11) -> Companheiro
(1,13, '2024-02-01'),  -- Aline (10) -> Amigo
(3,14, '2024-02-01'),  -- Julia (12) -> Pesquisador
(5,15, '2024-02-01'),  -- Fernanda (14) -> Excursionista
(5,16, '2024-02-01'),  -- Bruna (14) -> Excursionista
(5,17, '2024-02-01'),  -- Camila (14) -> Excursionista
(4,18, '2024-02-01');  -- Patricia (13) -> Pioneiro

-- desbravador por classe
SELECT uc.id_usuario_classe, u.id_usuario, u.nome, c.nome_classe
FROM usuario_classe uc
JOIN usuario u ON uc.id_usuario = u.id_usuario
JOIN classe c ON uc.id_classe = c.id_classe
ORDER BY uc.id_usuario_classe;


CREATE TABLE dados_quiz (
  id_dados_quiz INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  qtd_acertos INT DEFAULT 0,
  qtd_erros INT DEFAULT 0,
  data_inclusao DATE,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) 
);

INSERT INTO dados_quiz (id_usuario, qtd_acertos, qtd_erros, data_inclusao) VALUES
(3, 8, 2, '2025-03-01'),
(4, 7, 3, '2025-04-05'),
(5, 9, 1, '2025-02-20');

SELECT * FROM dados_quiz;
























-- ___________________________________________________________________________________________________

-- Unindo todas as tabelas
SELECT 
    uu.id_unidade_usuario,
    u.id_usuario,
    u.nome AS nome_usuario,
    u.dt_nasc,
    u.sexo,
    un.id_unidade,
    un.nome_unidade,
    un.sexo AS sexo_unidade,
    un.idade_min,
    un.idade_max,
    uu.data_entrada,
    uu.data_saida,
    uu.conselheiro,
    uu.conselheiro_associado
FROM unidade_usuario uu
JOIN usuario u 
    ON uu.id_usuario = u.id_usuario
JOIN unidade un 
    ON uu.id_unidade = un.id_unidade
ORDER BY uu.id_unidade_usuario ASC;

-- Listar apenas a Diretoria
SELECT 
    u.id_usuario,
    u.nome,
    u.tipo_membro,
    un.nome_unidade,
    uu.data_entrada
FROM unidade_usuario uu
JOIN usuario u ON uu.id_usuario = u.id_usuario
JOIN unidade un ON uu.id_unidade = un.id_unidade
WHERE un.nome_unidade = 'Diretoria';

-- Contar quantos membros cada unidade tem
SELECT 
    un.nome_unidade,
    COUNT(uu.id_usuario) AS total_membros
FROM unidade_usuario uu
JOIN unidade un ON uu.id_unidade = un.id_unidade
GROUP BY un.nome_unidade;

-- Lista completa e formatada por unidade
SELECT 
    CONCAT('[', un.nome_unidade, '] ', u.nome) AS unidade_membro,
    u.sexo,
    DATE_FORMAT(uu.data_entrada, '%d/%m/%Y') AS entrada
FROM unidade_usuario uu
JOIN usuario u ON uu.id_usuario = u.id_usuario
JOIN unidade un ON uu.id_unidade = un.id_unidade
ORDER BY un.id_unidade, u.nome;

-- Listar membros por unidade
SELECT 
    un.nome_unidade,
    u.nome AS membro,
    u.sexo,
    uu.data_entrada
FROM unidade_usuario uu
JOIN usuario u ON uu.id_usuario = u.id_usuario
JOIN unidade un ON uu.id_unidade = un.id_unidade
ORDER BY un.nome_unidade, u.nome;
