import { getRandonIntegrerIncluise, getRandonData } from "./randon";
import { save, read } from "./manip_json";

export const create_manejo = (num_max_manejo: number) => {
  var vector = [];
  var manejo = {};

  const animal = read("animal");
  var tudo = Object.keys(animal).map((i) => {
    [i];
  });

  for (let j = 0; j <= num_max_manejo; j++) {
    for (let i = 1; i <= tudo.length; i++) {
      let animaLTeramanejo = getRandonIntegrerIncluise(1, 100);
      if (animaLTeramanejo <= 35) {
        let define_manejo = getRandonIntegrerIncluise(1, 2);

        if (define_manejo === 1) {
          manejo = {
            fk_animal: i,
            tipo_manejo: "vacina",
            peso_kg: null,
            data_: getRandonData(),
            descricao: getDescricao(),
          };
        } else {
          manejo = {
            fk_animal: i,
            tipo_manejo: "pesagem",
            peso_kg: getRandonIntegrerIncluise(1000, 2500),
            data_: getRandonData(),
            descricao: null,
          };
        }
        vector.push(manejo);
      }
    }
  }

  save(vector, "manejo");
  // console.log(vector);
};

const getDescricao = () => {
  const medicamento = [
    "Perical",
    "Formoped",
    "Promotor de Engorda",
    "facilite",
    "Antibióticos",
    "Anti-inflamatórios",
    "Carrapaticidas",
    "Antitóxicos",
  ];
  var conc =
    getRandonIntegrerIncluise(15, 90) +
    "ml de " +
    medicamento[getRandonIntegrerIncluise(0, 7)];

  return conc;
};
