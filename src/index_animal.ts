import { create_animal } from "./functions/create_animal";

const arg = process.argv.slice(2);

const [num_animal] = arg;

if (num_animal === undefined)
  console.error("Por favor, insira o parametro [numero_animal] ");
else create_animal(parseInt(num_animal));
