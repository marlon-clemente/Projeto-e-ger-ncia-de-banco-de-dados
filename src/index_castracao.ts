import { create_castracao } from "./functions/create_cartracao";

const arg = process.argv.slice(2);

const [num_animal] = arg;

if (num_animal === undefined)
  console.error(
    "Por favor, insira o parametro [numero_de_animais_registrados] "
  );
else create_castracao(parseInt(num_animal));
