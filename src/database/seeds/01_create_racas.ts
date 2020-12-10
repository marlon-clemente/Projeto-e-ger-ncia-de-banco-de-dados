import Knex from 'knex'

export async function seed(knex: Knex){
  await knex('raca').insert([
    { nome: 'Angus' },
    { nome: 'Nelore' },
    { nome: 'Brahman' },
    { nome: 'Brangus' },
    { nome: 'Senepol' },
    { nome: 'Hereford' },
    { nome: 'Guzera' },
    { nome: 'Bonsmara' },
    { nome: 'Braford' },
    { nome: 'Caraçu' },
    { nome: 'Canchin' },
    { nome: 'Indubrasil' },
    { nome: 'Pardo-suiço' },
    { nome: 'Holandes' },
    { nome: 'Jersey' },
    { nome: 'Girolando' },
    { nome: 'Gir Leiteiro' },
    { nome: 'Ayrshire' },
    { nome: 'Guernsey' },
    { nome: 'Normando' },
  ]);
}