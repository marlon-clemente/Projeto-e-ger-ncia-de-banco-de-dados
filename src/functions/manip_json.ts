import fs from "fs";

export const save = (data: any, name: string) => {
  const dataSave = JSON.stringify(data);
  fs.writeFileSync(`./src/data/${name}.json`, dataSave, "utf8");
  console.log("Arquivo " + name + "salvo com sucesso!");
};

export const read = (name: string) => {
  const data = JSON.parse(fs.readFileSync(`./src/data/${name}.json`, "utf-8"));
  return data;
};
