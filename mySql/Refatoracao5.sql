CREATE TABLE destino (
fk_animal INT NOT NULL,
data_ DATE NOT NULL,
fim VARCHAR(1),
PRIMARY KEY(fk_animal),
FOREIGN KEY (fk_animal) REFERENCES animal(id_animal)
);

INSERT INTO destino (fk_animal, data_, fim)
SELECT id_animal, data_m, 'm' FROM animal a WHERE a.status_ = 'morto';

INSERT INTO destino (fk_animal, data_, fim)
SELECT id_animal, '1990-01-01', 'v' FROM animal a WHERE a.status_ = 'vendido';

ALTER TABLE animal DROP COLUMN data_m;
ALTER TABLE animal DROP COLUMN status_;