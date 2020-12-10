import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('company', table=>{
    table.increments('id').primary();
    table.integer('cnpj').notNullable().unique();
    table.string('social_reason').notNullable();
    table.string('fantasy_name').notNullable();
    table.integer('cnae').notNullable();
    table.integer('state_registration').notNullable();
    table.string('business_environment').notNullable();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('company');
}