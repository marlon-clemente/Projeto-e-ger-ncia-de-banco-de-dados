import Knex from "knex";

import { read } from "../../functions/manip_json";

const manejo = read("manejo");

export async function seed(knex: Knex) {
  await knex("manejo").insert(manejo);
}
