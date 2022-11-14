## Aplication for register Interest Points

Ao clonar o projeto antes de tudo instale os pacotes utilizando o comando:

```sh
yarn install
```

Após instalar os pacotes e dependências crie sua base de dados postgres e configure as variáveis de ambiente do projeto, você pode copiar o arquivo `env.example`:

```sh
SERVER_PORT=

DATABASE_DIALECT=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_NAME=
```

Com tudo configurado você pode encontrar a collection com as requisições dentro da pasta `documents`. É uma collection exportada pelo `Insomnia` e já possui as variáveis de ambiente configuradas.


Pronto! Seu ambiente está pronto para executar a API, agora vamos descrever os comandos disponíveis...

Rodar projeto em typescript:
```sh
yarn dev
```

Realizar a build do projeto:
```sh
yarn build
```

Rodar projeto após a build:
```sh
yarn start
```

Executar testes unitários:
```sh
yarn test
```

Criar nova migration do sequelize:
```sh
yarn migrate:generate example-name
```

Rodar migrations do sequelize:
```sh
yarn migrate:run
```

Resetar migrations do sequelize:
```sh
yarn migrate:reset
```
