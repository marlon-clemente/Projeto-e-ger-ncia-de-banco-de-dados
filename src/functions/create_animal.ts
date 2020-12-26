import { boi } from "../data/nome_boi";
import { vaca } from "../data/nome_vaca";

import { save } from "./manip_json";

import { getRandonIntegrerIncluise, getRandonData } from "./randon";

export const create_animal = (num_animal: number) => {
  const todo = [];

  for (let i = 0; i < num_animal; i++) {
    const {
      nome,
      registro,
      classe_registro,
      sexo,
    } = get_identificacao_animal();

    const { data_n, data_m, status_ } = get_status_and_datas();

    const animal = {
      fk_localidade: getRandonIntegrerIncluise(1, 23),
      fk_classe_bovina: get_fk_classe_bovina(sexo),
      fk_raca: getRandonIntegrerIncluise(1, 20),
      nome,
      registro,
      classe_registro,
      sexo,
      data_n,
      data_m,
      status_,
      peso: getRandonIntegrerIncluise(350, 1500),
    };
    todo.push(animal);
  }

  save(todo, "animal");

  // console.log(todo);
};

const get_status_and_datas = () => {
  let data_n: string, data_m: string | null, status_: string;

  let r_status = getRandonIntegrerIncluise(1, 3);
  // vivo ou vendido
  if (r_status === 1 || r_status === 2) {
    data_m = null;
    data_n = getRandonData();
    status_ = r_status === 1 ? "vivo" : "vendido";
  }
  // morto
  else {
    data_n = getRandonData();
    data_m = getRandonData();
    status_ = "morto";
  }
  return { data_n, data_m, status_ };
};

const get_fk_classe_bovina = (sexo: string) => {
  if (sexo === "femea" || sexo === "f") {
    return getRandonIntegrerIncluise(1, 3);
  } else {
    return getRandonIntegrerIncluise(1, 2);
  }
};

const get_identificacao_animal = () => {
  let nome: string | null,
    registro: string | null,
    classe_registro: string | null,
    sexo: string;

  let randomRegistro = getRandonIntegrerIncluise(1, 3);

  const sexoTemp = ["macho", "m", "femea", "f"];

  let randonSexo = getRandonIntegrerIncluise(0, 3);

  if (randomRegistro === 1) {
    nome = get_nome(randonSexo);
    classe_registro = "nome";
    registro = null;
    sexo = sexoTemp[randonSexo];
  } else {
    let registerName = Math.random().toString(36).substring(8);
    nome = null;
    registro = registerName;
    classe_registro = randomRegistro === 2 ? "tatuagem" : "chip";
    sexo = sexoTemp[randonSexo];
  }

  return { nome, registro, classe_registro, sexo };
};

const get_nome = (randonSexo: number): string => {
  let name: string = "";
  if (randonSexo === 0 || randonSexo === 1) {
    /* eh macho */
    let nameB = getRandonIntegrerIncluise(boi.length - 1, 1);
    name = boi[nameB];
  } else if (randonSexo === 2 || randonSexo === 3) {
    /* eh femea */
    let nameV = Math.floor(Math.random() * (vaca.length - 1)) + 1;
    name = vaca[nameV];
  }
  return name;
};
