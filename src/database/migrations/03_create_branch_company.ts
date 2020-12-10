import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('branch_company', table=>{
    table.increments('id').primary();
    table.integer('fk_branch')
      .notNullable()
      .references('id')
      .inTable('branch');
    table.integer('fk_company')
      .notNullable()
      .references('id')
      .inTable('company');
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('branch_company');
}