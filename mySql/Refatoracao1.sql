ALTER TABLE animal ADD COLUMN peso DECIMAL(7,3);
ALTER TABLE manejo ADD COLUMN peso DECIMAL(7,3);

UPDATE animal SET peso = peso_kg;
UPDATE manejo SET peso = peso_kg;

ALTER TABLE animal DROP COLUMN peso_kg;
ALTER TABLE manejo DROP COLUMN peso_kg;