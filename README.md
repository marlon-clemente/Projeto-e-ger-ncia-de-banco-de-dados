## Script para geração de dados fakes

Disciplina de Projeto e Gerência de Banco de Dados | UFSM - 2020/2

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


