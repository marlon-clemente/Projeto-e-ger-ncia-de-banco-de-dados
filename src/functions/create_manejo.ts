export const create_manejo = () => {
  var vector = [];
  
  
  
  for (let i=1; i <= 60; i++){

    let def = Math.floor(Math.random() * (3 - 1)) + 1;
    
    if (def === 1){
      let cast = {
        fk_animal: i,
        tipo_manejo: getTipo_manejo(),
        peso_kg: get_peso(),
        data_: create_data(),
        descricao: 'Possíveis anotações sobre o manejo podem ser encontradas aqui '
      } 
      vector.push(cast)
    }
  }
  console.log(vector)
}

const getTipo_manejo = () => {
  let m = [ 'vacina', 'pesagem' ];
  let def = Math.floor(Math.random() * (1 - 0)) + 0;
  const maj = m[def] 
  return maj
}

const get_peso = () =>{
  let MAXIMO_LOCALIZACAO = 1500;
  let id = Math.floor(Math.random() * (MAXIMO_LOCALIZACAO - 350)) + 350;
  return id;
}

const create_data = () => {
  let r_dia = Math.floor(Math.random() * (27 - 10)) + 10;
  let r_mes = Math.floor(Math.random() * (9 - 1)) + 1;
  let r_ano = Math.floor(Math.random() * (2020 - 2018)) + 2018;


  const data = r_ano + '-0' + r_mes + '-' + r_dia;
  return data;
}