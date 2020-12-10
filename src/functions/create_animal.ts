import { boi } from '../data/nome_boi';
import { vaca } from '../data/nome_vaca';

export const create_animal = () => {

  const todo = [];

  for (let i = 0; i < 60; i++ ){
    const { nome, registro, classe_registro, sexo } = get_identificacao_animal();
    const { data_n, data_m, status_ } = get_status_and_datas();
    
    const animal = {
      fk_localidade : get_fk_localizacao(),
      fk_classe_bovina : get_fk_classe_bovina(sexo),
      fk_raca : get_fk_raca(),
      nome,
      registro,
      classe_registro,
      sexo,
      data_n,
      data_m,
      status_,
      peso : get_peso()
    }
    todo.push(animal);
  }

  console.log(todo)
}

const get_status_and_datas = () => {
  let
    data_n,
    data_m,
    status_;

  let r_status = Math.floor(Math.random() * (3 - 1)) + 1;
  // vivo ou vendido
  if (r_status === 1){
    data_m = '1901-01-01',
    data_n = create_data();
    status_ = 'vivo'
  }   
  // morto
  else {
    data_n = create_data();
    data_m = create_data();
    status_ = 'morto'
  }
  return { data_n, data_m, status_}
}

const create_data = () => {
  let r_dia = Math.floor(Math.random() * (27 - 10)) + 10;
  let r_mes = Math.floor(Math.random() * (9 - 1)) + 1;
  let r_ano = Math.floor(Math.random() * (2020 - 2014)) + 2014;


  const data = r_ano + '-0' + r_mes + '-' + r_dia;
  return data;
}

const get_peso = () =>{
  let MAXIMO_LOCALIZACAO = 1500;
  let id = Math.floor(Math.random() * (MAXIMO_LOCALIZACAO - 350)) + 350;
  return id;
}

const get_fk_raca = () =>{
  let MAXIMO_LOCALIZACAO = 20;
  let id = Math.floor(Math.random() * (MAXIMO_LOCALIZACAO - 1)) + 1;
  return id;
}

const get_fk_classe_bovina = (sexo:string) => {
  if (sexo === 'femea' || sexo === 'f'){
    let MAXIMO_LOCALIZACAOf = 3;
    let idf = Math.floor(Math.random() * (MAXIMO_LOCALIZACAOf - 1)) + 1;
    return idf;
  } else {
    let MAXIMO_LOCALIZACAO = 2;
    let id = Math.floor(Math.random() * (MAXIMO_LOCALIZACAO - 1)) + 1;
    return id;
  }
}

const get_fk_localizacao = () => {
  let MAXIMO_LOCALIZACAO = 23;
  let id = Math.floor(Math.random() * (MAXIMO_LOCALIZACAO - 1)) + 1;
  return id;
}

const get_identificacao_animal = () => {
  let
    nome:any = '' || undefined,
    registro = '',
    classe_registro = '',
    sexo = '';

  let randomRegistro = Math.floor(Math.random() * (3 - 1)) + 1;
  
  const sexoTemp = [
    'macho', 'm', 'femea', 'f'
  ]
  
  let min = Math.ceil(0);
  let max = Math.floor(3);
  let randonSexo = Math.floor(Math.random() * (max - min)) + min;

  /* Buscar por nome */
  if(randomRegistro === 1){
    nome = get_nome(randonSexo),
    registro = '',
    classe_registro = 'nome',
    sexo = sexoTemp[randonSexo]
  }
  /* define um registro != de nome */
  else {
    let register = Math.random().toString(36).substring(8);
    let registerClass = Math.floor(Math.random() * (3 - 1)) + 1;

    nome = '',
    registro = register,
    classe_registro = registerClass === 1 ? 'tatuagem' : 'chip',
    sexo = sexoTemp[randonSexo]
  }

  return { nome, registro, classe_registro, sexo };
}

const get_nome = (randonSexo: number) => {
  if( randonSexo === 0 || randonSexo === 1){ /* eh macho */
    let nameB = Math.floor(Math.random() * (boi.length - 1)) + 1;
    return boi[nameB]
  }

  else if ( randonSexo === 2 || randonSexo === 3) { /* eh femea */
    let nameV = Math.floor(Math.random() * (vaca.length - 1)) + 1;
    return vaca[nameV]
  }
}