CREATE TABLE vacina (
	id_manejo INT,
  dose_ml INT NOT NULL DEFAULT 0,
  medicacao VARCHAR(255) DEFAULT 'Não atibuído',
  PRIMARY KEY(id_manejo),
  FOREIGN KEY (id_manejo) REFERENCES manejo(id_manejo)
)

CREATE TABLE castracao_m (
	id_manejo INT,
  PRIMARY KEY(id_manejo),
	
  FOREIGN KEY (id_manejo) REFERENCES manejo(id_manejo)
)

CREATE TABLE pesagem (
	id_manejo INT,
	peso DECIMAL(7,3),
  PRIMARY KEY(id_manejo),
  FOREIGN KEY (id_manejo) REFERENCES manejo(id_manejo)
)

CREATE TABLE descricao_vacina (
	id_manejo INT,
    texto VARCHAR(255) NOT NULL,
    PRIMARY KEY(id_manejo),
    FOREIGN KEY (id_manejo) REFERENCES vacina(id_manejo)
);


INSERT INTO vacina (id_manejo, dose_ml, medicacao)
	SELECT id_manejo, 0, 'Não atibuído'
	FROM manejo
	WHERE tipo_manejo = 'vacina';

INSERT INTO manejo (fk_animal, data_, tipo_manejo)
	SELECT id_animal, data_cast, 'castracao'
	FROM animal a WHERE a.data_cast is not null;

INSERT INTO castracao_m ( id_manejo )
	SELECT m.id_manejo
	FROM animal a join manejo m on a.id_animal = m.fk_animal AND m.tipo_manejo = 'castracao';

ALTER TABLE manejo DROP COLUMN tipo_manejo;
ALTER TABLE manejo DROP COLUMN descricao;
ALTER TABLE manejo DROP COLUMN peso;

