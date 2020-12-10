import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('contact_email', table=>{
    table.increments('id').primary();
    table.integer('fk_company')
      .references('id')
      .inTable('company');
    table.integer('fk_client')
      .references('id')
      .inTable('client');
    table.string('email')
      .notNullable();
    table.string('type') // default or xml
      .notNullable();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('contact_email');
}