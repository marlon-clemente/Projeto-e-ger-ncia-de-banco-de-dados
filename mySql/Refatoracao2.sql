UPDATE animal SET sexo = 'm' WHERE sexo = 'macho';
UPDATE animal SET sexo = 'f' WHERE sexo = 'femea';

ALTER TABLE animal MODIFY sexo VARCHAR(2);