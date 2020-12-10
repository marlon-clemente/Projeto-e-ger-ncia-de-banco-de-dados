import Knex from 'knex'

export async function seed(knex: Knex){
  await knex('localidade').insert([
    { nome: 'Lote 482', descricao:'Clinica Animal' },
    { nome: 'Lote 860', descricao:'Animais engorda' },
    { nome: 'Lote 189', descricao:'Descarte' },
    { nome: 'Lote 089', descricao:'Animais de recria' },
    { nome: 'Lote 179', descricao:'Animais engorda' },
    { nome: 'Lote 130', descricao:'Animais engorda' },
    { nome: 'Lote 781', descricao:'Animais de recria' },
    { nome: 'Lote 197', descricao:'Descarte' },
    { nome: 'Lote 173', descricao:'Animais de recria' },
    { nome: 'Lote 137', descricao:'Clinica Animal' },
    { nome: 'Lote 784', descricao:'Animais de recria' },
    { nome: 'Lote 843', descricao:'Animais engorda' },
    { nome: 'Lote 050', descricao:'Animais de recria' },
    { nome: 'Lote 601', descricao:'Animais engorda' },
    { nome: 'Lote 670', descricao:'Animais de recria' },
    { nome: 'Lote 709', descricao:'Clinica Animal' },
    { nome: 'Lote 907', descricao:'Clinica Animal' },
    { nome: 'Lote 160', descricao:'Clinica Animal' },
    { nome: 'Lote 079', descricao:'Descarte' },
    { nome: 'Lote 741', descricao:'Pastagem' },
    { nome: 'Lote 709', descricao:'Pastagem' },
    { nome: 'Lote 361', descricao:'Pastagem' },
  ]);
}