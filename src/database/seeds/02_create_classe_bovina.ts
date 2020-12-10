import Knex from 'knex'

export async function seed(knex: Knex){
  await knex('classe_bovina').insert([
    { descricao: 'Gado de engorda' },
    { descricao: 'Gado de cria' },
    { descricao: 'Gado de leite' },
  ]);
}