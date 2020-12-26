import Knex from "knex";
import { read } from "../../functions/manip_json";

const data = read("animal");

export async function seed(knex: Knex) {
  await knex("animal").insert(data);
}
