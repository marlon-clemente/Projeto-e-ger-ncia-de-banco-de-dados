CREATE TABLE identificacao(
	id_identificacao INT NOT NULL AUTO_INCREMENT,
	fk_animal INT,
    descricao VARCHAR(255),
	tipo VARCHAR(1),
	PRIMARY KEY (id_identificacao),
	FOREIGN KEY (fk_animal) REFERENCES animal(id_animal)
);

INSERT INTO identificacao (fk_animal, descricao, tipo)
	SELECT id_animal, registro, 'c'
	FROM animal a
	WHERE a.classe_registro = 'chip';

INSERT INTO identificacao (fk_animal, descricao, tipo)
	SELECT id_animal, registro, 't'
	FROM animal a
	WHERE a.classe_registro = 'tatuagem';

INSERT INTO identificacao (fk_animal, descricao, tipo)
	SELECT id_animal, nome, 'n'
	FROM animal a
	WHERE a.classe_registro = 'nome';