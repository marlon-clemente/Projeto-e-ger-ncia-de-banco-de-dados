import { getRandonIntegrerIncluise, getRandonData } from "./randon";
import { save } from "./manip_json";

export const create_castracao = (num_animal: number) => {
  var vector = [];

  for (let i = 1; i <= num_animal; i++) {
    let def = getRandonIntegrerIncluise(1, 2);

    if (def === 1) {
      let cast = {
        fk_animal: i,
        data_: getRandonData(),
      };
      vector.push(cast);
    }
  }
  save(vector, "castracao");
};
