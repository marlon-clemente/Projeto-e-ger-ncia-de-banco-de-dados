import Knex from "knex";

import { read } from "../../functions/manip_json";

export async function seed(knex: Knex) {
  const manejo = await read("manejo");

  await knex("manejo").insert(manejo);
}
