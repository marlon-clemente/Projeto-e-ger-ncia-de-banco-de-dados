export const getRandonIntegrerIncluise = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandonData = () => {
  const dia = getRandonIntegrerIncluise(10, 28);
  const mes = getRandonIntegrerIncluise(1, 9);
  const ano = getRandonIntegrerIncluise(2014, 2020);
  const data = ano + "-0" + mes + "-" + dia;
  return data;
};
