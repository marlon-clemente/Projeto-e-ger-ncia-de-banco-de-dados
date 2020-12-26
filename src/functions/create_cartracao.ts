export const create_castracao = () => {
  var vector = [];

  for (let i = 1; i <= 60; i++) {
    let def = Math.floor(Math.random() * (3 - 1)) + 1;

    if (def === 1) {
      let cast = {
        fk_animal: i,
        tipo_manejo: getTipo_manejo(),
        data_: create_data(),
      };
      vector.push(cast);
    }
  }
  console.log(vector);
};

const getTipo_manejo = () => {
  let m = ["vacina", "pesagem"];
  let def = Math.floor(Math.random() * (2 - 1)) + 1;
  const maj = m[def];
  return maj;
};

const create_data = () => {
  let r_dia = Math.floor(Math.random() * (27 - 10)) + 10;
  let r_mes = Math.floor(Math.random() * (9 - 1)) + 1;
  let r_ano = Math.floor(Math.random() * (2020 - 2018)) + 2018;

  const data = r_ano + "-0" + r_mes + "-" + r_dia;
  return data;
};
