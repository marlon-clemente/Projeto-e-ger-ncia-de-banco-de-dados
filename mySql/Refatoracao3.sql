SHOW CREATE TABLE animal;
ALTER TABLE animal DROP FOREIGN KEY animal_ibfk_3;

/* criação da nova coluna */
ALTER TABLE raca ADD COLUMN id_racabovina TINYINT NOT NULL;
/* migração dos dados */
UPDATE raca SET id_racabovina = id_raca;

/* Primeiro removemos o AUTO_INCREMENT */
ALTER TABLE raca MODIFY id_raca INT NOT NULL;
/* Removemos a restrição da chave primaria */
ALTER TABLE raca DROP PRIMARY KEY;
/* Exclui-se a coluna antiga */
ALTER TABLE raca DROP COLUMN id_raca;

/* define id_racabovina como chave primária */
ALTER TABLE raca ADD PRIMARY KEY (id_racabovina);
/* define a id_racabovina como AUTO_INCREMENT */
ALTER TABLE raca MODIFY id_racabovina TINYINT AUTO_INCREMENT;

/* cria-se a coluna fk_racabovina */
ALTER TABLE animal ADD COLUMN fk_racabovina TINYINT NOT NULL;
/* migra-se os dados para a nova coluna */
UPDATE animal SET fk_racabovina = fk_raca;

/* remover coluna antiga */
ALTER TABLE animal DROP COLUMN fk_raca;
/* Tornar coluna nova em chave estrangeira*/
ALTER TABLE animal ADD CONSTRAINT FOREIGN KEY (fk_racabovina) REFERENCES raca(id_racabovina);
