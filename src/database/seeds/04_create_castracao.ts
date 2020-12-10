import Knex from 'knex'

export async function seed(knex: Knex){
  await knex('castracao').insert([
    { fk_animal: 2, data_: '2019-01-23' },
    { fk_animal: 3, data_: '2018-04-11' },
    { fk_animal: 4, data_: '2019-07-14' },
    { fk_animal: 7, data_: '2018-02-21' },
    { fk_animal: 8, data_: '2018-01-19' },
    { fk_animal: 11, data_: '2019-02-16' },
    { fk_animal: 12, data_: '2018-01-13' },
    { fk_animal: 14, data_: '2019-04-11' },
    { fk_animal: 16, data_: '2018-03-17' },
    { fk_animal: 18, data_: '2018-06-26' },
    { fk_animal: 20, data_: '2019-01-25' },
    { fk_animal: 21, data_: '2019-07-23' },
    { fk_animal: 25, data_: '2018-05-17' },
    { fk_animal: 27, data_: '2018-07-26' },
    { fk_animal: 29, data_: '2018-03-13' },
    { fk_animal: 30, data_: '2019-02-26' },
    { fk_animal: 31, data_: '2019-07-11' },
    { fk_animal: 32, data_: '2018-06-14' },
    { fk_animal: 34, data_: '2018-08-21' },
    { fk_animal: 38, data_: '2018-02-23' },
    { fk_animal: 41, data_: '2019-08-11' },
    { fk_animal: 44, data_: '2018-01-23' },
    { fk_animal: 48, data_: '2018-01-24' },
    { fk_animal: 54, data_: '2019-05-15' },
    { fk_animal: 56, data_: '2019-06-19' },
    { fk_animal: 57, data_: '2018-01-21' },
    { fk_animal: 59, data_: '2019-05-18' }
  ]);
}