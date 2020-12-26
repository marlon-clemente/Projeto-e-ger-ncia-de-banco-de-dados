import fs from "fs";

export const save = (data: any, name: string) => {
  const dataSave = JSON.stringify(data);
  fs.writeFileSync(`./src/data/${name}.json`, dataSave, "utf8");
  console.log("Arquivo " + name + "salvo com sucesso!");
};
