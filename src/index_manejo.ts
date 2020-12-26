import { create_manejo } from "./functions/create_manejo";

const arg = process.argv.slice(2);

const [num_manejo] = arg;

if (num_manejo === undefined)
  console.error("Por favor, insira o parametro [numero_manejo_por_animal] ");
else create_manejo(parseInt(num_manejo));
