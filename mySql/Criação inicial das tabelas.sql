CREATE DATABASE fazenda;
USE fazenda;

CREATE TABLE raca (
	id_raca INT AUTO_INCREMENT NOT NULL,
	nome VARCHAR(255) NOT NULL,
	PRIMARY KEY (id_raca)
);

CREATE TABLE localidade(
	id_local INT AUTO_INCREMENT NOT NULL,
	nome VARCHAR(255) NOT NULL,
	descricao VARCHAR(255),
	PRIMARY KEY (id_local)
);

CREATE TABLE classe_bovina(
	id_classe_bovina INT AUTO_INCREMENT NOT NULL,
	descricao VARCHAR(255) NOT NULL,
	PRIMARY KEY (id_classe_bovina)
);

CREATE TABLE animal (
	id_animal INT AUTO_INCREMENT NOT NULL,
	fk_localidade INT NOT NULL,
  fk_classe_bovina INT NOT NULL,
  fk_raca INT NOT NULL,
    
	nome VARCHAR(255),
	registro VARCHAR(255),
	classe_registro VARCHAR(255) NOT NULL,
	sexo CHAR(10) NOT NULL,
	data_n DATE,
	data_m DATE,
	/*ADD no EXAME*/
	data_cast DATE,
	/**/
	status_ VARCHAR(255),
  peso_kg INT,
    
	PRIMARY KEY (id_animal),
  FOREIGN KEY (fk_localidade) REFERENCES localidade(id_local),
  FOREIGN KEY (fk_classe_bovina) REFERENCES classe_bovina(id_classe_bovina),
	FOREIGN KEY (fk_raca) REFERENCES raca(id_raca)
);

/*
REMOVIDA NO EXAME
CREATE TABLE castracao (
	id_castracao INT AUTO_INCREMENT NOT NULL,
  fk_animal INT NOT NULL,
	data_ DATE NOT NULL,
	PRIMARY KEY (id_castracao),
  FOREIGN KEY (fk_animal) REFERENCES animal(id_animal)
);
*/

CREATE TABLE manejo (
	id_manejo INT NOT NULL AUTO_INCREMENT,
  fk_animal INT NOT NULL,
  tipo_manejo VARCHAR(255) NOT NULL,
  peso_kg INT,
  descricao VARCHAR(255),
  data_ DATE,
  PRIMARY KEY (id_manejo),
  FOREIGN KEY (fk_animal) REFERENCES animal(id_animal)
);