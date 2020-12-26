## Script para geração de dados fakes

Disciplina de Projeto e Gerência de Banco de Dados | UFSM - 2020/2

O script é responsável por gerar as informações fakes do projeto da disciplina e também inser os mesmos no banco de dados.

### Setup
Instalar dependências yarn
```
yarn install
```

### Geração dos dados
O script gera os registros de acordo com cada tabela do banco de dados. Os dados são gerados seguindo algumas decisões. Os mesmos são armazenados na pasta `data` em um objeto `JSON` que logo mais será inserido no banco de dados.

Para criar o animal, use o comando abaixo, onde `[num_animal]` é o número de animais que deseja-se que o script gere
```
yarn run animal [num_animal]
```
Use o comando abaixo para criar os manejos, onde `[manejo_max]` é o número máximo de manejo que um animal possa ter
```
yarn run manejo [manejo_max]
```

### Inserção dos dados
Para a inserção dos dados no banco, é usado o query builder [KnexJs](http://knexjs.org/). 
Como o trabalho trata-se do desenvolvimento de um projeto de banco de dados, as migrations não são utilidadas para a criação das tabelas. Essa etapa deve ser elaborada de forma natural usando o banco de dados MySQL. Os scripts MySQL estão na pasta `mySql` do projeto.

1º - Criar o banco de dados e suas respectivas tabelas;
2º - Editar o arquivo `knexfile.ts` da raiz do projeto, inserindo as credenciais da conexão; 
3º - Executar o comando para criação das seeds no projeto;
```
yarn run knex:seed
```
Pronto! 