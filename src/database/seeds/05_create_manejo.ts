import Knex from 'knex'

export async function seed(knex: Knex){
  await knex('manejo').insert([
    {
      fk_animal: 1,
      tipo_manejo: 'vacina',
      peso_kg: 1138,
      data_: '2019-03-20',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 3,
      tipo_manejo: 'vacina',
      peso_kg: 1057,
      data_: '2018-05-23',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 4,
      tipo_manejo: 'vacina',
      peso_kg: 773,
      data_: '2018-01-21',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 5,
      tipo_manejo: 'vacina',
      peso_kg: 532,
      data_: '2018-06-24',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 6,
      tipo_manejo: 'vacina',
      peso_kg: 1119,
      data_: '2019-02-20',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 7,
      tipo_manejo: 'vacina',
      peso_kg: 1056,
      data_: '2019-06-20',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 9,
      tipo_manejo: 'vacina',
      peso_kg: 1358,
      data_: '2019-04-12',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 11,
      tipo_manejo: 'vacina',
      peso_kg: 547,
      data_: '2018-08-22',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 13,
      tipo_manejo: 'vacina',
      peso_kg: 548,
      data_: '2019-03-20',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 15,
      tipo_manejo: 'vacina',
      peso_kg: 495,
      data_: '2019-01-17',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 16,
      tipo_manejo: 'vacina',
      peso_kg: 608,
      data_: '2018-04-19',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 17,
      tipo_manejo: 'vacina',
      peso_kg: 475,
      data_: '2018-03-19',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 22,
      tipo_manejo: 'vacina',
      peso_kg: 1444,
      data_: '2018-08-16',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 23,
      tipo_manejo: 'vacina',
      peso_kg: 582,
      data_: '2019-08-10',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 25,
      tipo_manejo: 'vacina',
      peso_kg: 460,
      data_: '2018-05-13',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 29,
      tipo_manejo: 'vacina',
      peso_kg: 852,
      data_: '2019-08-17',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 32,
      tipo_manejo: 'vacina',
      peso_kg: 692,
      data_: '2019-03-10',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 33,
      tipo_manejo: 'vacina',
      peso_kg: 362,
      data_: '2018-02-15',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 34,
      tipo_manejo: 'vacina',
      peso_kg: 849,
      data_: '2019-08-20',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 35,
      tipo_manejo: 'vacina',
      peso_kg: 1086,
      data_: '2018-07-13',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 37,
      tipo_manejo: 'vacina',
      peso_kg: 1292,
      data_: '2018-08-18',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 38,
      tipo_manejo: 'vacina',
      peso_kg: 1065,
      data_: '2019-05-16',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 41,
      tipo_manejo: 'vacina',
      peso_kg: 401,
      data_: '2019-02-14',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 42,
      tipo_manejo: 'vacina',
      peso_kg: 1499,
      data_: '2018-03-19',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 43,
      tipo_manejo: 'vacina',
      peso_kg: 479,
      data_: '2018-02-11',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 47,
      tipo_manejo: 'vacina',
      peso_kg: 478,
      data_: '2018-05-22',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 48,
      tipo_manejo: 'vacina',
      peso_kg: 1096,
      data_: '2019-03-24',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 50,
      tipo_manejo: 'vacina',
      peso_kg: 783,
      data_: '2019-04-12',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 53,
      tipo_manejo: 'vacina',
      peso_kg: 1180,
      data_: '2018-08-12',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 56,
      tipo_manejo: 'vacina',
      peso_kg: 1349,
      data_: '2018-04-16',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 60,
      tipo_manejo: 'vacina',
      peso_kg: 1441,
      data_: '2019-07-20',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 3,
      tipo_manejo: 'vacina',
      peso_kg: 649,
      data_: '2018-03-23',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 7,
      tipo_manejo: 'vacina',
      peso_kg: 1037,
      data_: '2019-04-22',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 11,
      tipo_manejo: 'vacina',
      peso_kg: 687,
      data_: '2019-02-19',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 14,
      tipo_manejo: 'vacina',
      peso_kg: 1013,
      data_: '2019-06-23',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 16,
      tipo_manejo: 'vacina',
      peso_kg: 1199,
      data_: '2018-05-14',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 19,
      tipo_manejo: 'vacina',
      peso_kg: 469,
      data_: '2019-03-14',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 20,
      tipo_manejo: 'vacina',
      peso_kg: 638,
      data_: '2018-05-18',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 22,
      tipo_manejo: 'vacina',
      peso_kg: 1009,
      data_: '2018-03-12',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 23,
      tipo_manejo: 'vacina',
      peso_kg: 1007,
      data_: '2019-04-20',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 27,
      tipo_manejo: 'vacina',
      peso_kg: 891,
      data_: '2018-01-26',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 29,
      tipo_manejo: 'vacina',
      peso_kg: 784,
      data_: '2018-05-19',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 30,
      tipo_manejo: 'vacina',
      peso_kg: 784,
      data_: '2019-07-18',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 32,
      tipo_manejo: 'vacina',
      peso_kg: 632,
      data_: '2018-08-18',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 35,
      tipo_manejo: 'vacina',
      peso_kg: 870,
      data_: '2018-05-11',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 38,
      tipo_manejo: 'vacina',
      peso_kg: 1040,
      data_: '2018-02-19',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 39,
      tipo_manejo: 'vacina',
      peso_kg: 1415,
      data_: '2019-04-14',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 40,
      tipo_manejo: 'vacina',
      peso_kg: 873,
      data_: '2019-08-24',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 42,
      tipo_manejo: 'vacina',
      peso_kg: 1017,
      data_: '2019-05-22',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 46,
      tipo_manejo: 'vacina',
      peso_kg: 1277,
      data_: '2019-06-12',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 47,
      tipo_manejo: 'vacina',
      peso_kg: 1318,
      data_: '2018-08-19',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 50,
      tipo_manejo: 'vacina',
      peso_kg: 504,
      data_: '2018-04-12',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 53,
      tipo_manejo: 'vacina',
      peso_kg: 976,
      data_: '2019-08-18',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 54,
      tipo_manejo: 'vacina',
      peso_kg: 619,
      data_: '2018-08-26',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 55,
      tipo_manejo: 'vacina',
      peso_kg: 816,
      data_: '2019-03-25',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 57,
      tipo_manejo: 'vacina',
      peso_kg: 1089,
      data_: '2018-01-15',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 58,
      tipo_manejo: 'vacina',
      peso_kg: 1133,
      data_: '2018-06-14',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 60,
      tipo_manejo: 'vacina',
      peso_kg: 612,
      data_: '2019-04-18',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 2,
      tipo_manejo: 'vacina',
      peso_kg: 1132,
      data_: '2019-08-25',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 5,
      tipo_manejo: 'vacina',
      peso_kg: 1159,
      data_: '2019-05-15',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 7,
      tipo_manejo: 'vacina',
      peso_kg: 897,
      data_: '2019-07-18',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 8,
      tipo_manejo: 'vacina',
      peso_kg: 908,
      data_: '2019-01-10',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 9,
      tipo_manejo: 'vacina',
      peso_kg: 644,
      data_: '2018-02-14',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 10,
      tipo_manejo: 'vacina',
      peso_kg: 717,
      data_: '2019-02-20',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 11,
      tipo_manejo: 'vacina',
      peso_kg: 777,
      data_: '2019-05-17',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 13,
      tipo_manejo: 'vacina',
      peso_kg: 390,
      data_: '2019-04-19',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 14,
      tipo_manejo: 'vacina',
      peso_kg: 691,
      data_: '2019-01-22',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 17,
      tipo_manejo: 'vacina',
      peso_kg: 1084,
      data_: '2019-07-22',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 18,
      tipo_manejo: 'vacina',
      peso_kg: 455,
      data_: '2018-07-15',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 21,
      tipo_manejo: 'vacina',
      peso_kg: 794,
      data_: '2019-07-22',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 23,
      tipo_manejo: 'vacina',
      peso_kg: 1387,
      data_: '2019-05-14',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 24,
      tipo_manejo: 'vacina',
      peso_kg: 665,
      data_: '2018-08-11',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 25,
      tipo_manejo: 'vacina',
      peso_kg: 534,
      data_: '2019-07-10',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 30,
      tipo_manejo: 'vacina',
      peso_kg: 1481,
      data_: '2018-06-18',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 31,
      tipo_manejo: 'vacina',
      peso_kg: 844,
      data_: '2019-06-11',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 32,
      tipo_manejo: 'vacina',
      peso_kg: 729,
      data_: '2019-04-14',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 33,
      tipo_manejo: 'vacina',
      peso_kg: 536,
      data_: '2018-07-26',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 35,
      tipo_manejo: 'vacina',
      peso_kg: 755,
      data_: '2019-01-17',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 37,
      tipo_manejo: 'vacina',
      peso_kg: 1199,
      data_: '2018-08-23',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 45,
      tipo_manejo: 'vacina',
      peso_kg: 653,
      data_: '2018-08-25',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 48,
      tipo_manejo: 'vacina',
      peso_kg: 897,
      data_: '2018-02-19',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 49,
      tipo_manejo: 'vacina',
      peso_kg: 1227,
      data_: '2019-02-18',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 51,
      tipo_manejo: 'vacina',
      peso_kg: 869,
      data_: '2018-08-20',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 52,
      tipo_manejo: 'vacina',
      peso_kg: 483,
      data_: '2018-07-25',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 53,
      tipo_manejo: 'vacina',
      peso_kg: 1490,
      data_: '2018-04-25',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 57,
      tipo_manejo: 'vacina',
      peso_kg: 1455,
      data_: '2019-07-18',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    },
    {
      fk_animal: 60,
      tipo_manejo: 'vacina',
      peso_kg: 781,
      data_: '2019-05-23',
      descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
    }
  ]);
}