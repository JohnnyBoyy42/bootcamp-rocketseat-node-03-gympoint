# Descrição do Projeto

Essa é uma aplicação desenvolvida em Node.js, faz parte de um conjunto de desafios para estudos. A aplicação tem por objetivo, gerenciar um funcionamento de uma academia, envios de e-mail para novas matriculas, fazendo um resumo do plano escolhido, preco, duração do plano. autenticação JWT, cadastro de usuários, upload de arquivos e fichas de treinos. O desafio também possui um front-end feito em React e mobile usando React-Native.

# Instalação

Executar o comando **yarn install**

**Em caso de erro, executar os seguintes passos**

- **yarn sequelize db:migrate**
- criar arquivo **.env** e preenche-lo seguindo exemplo do arquivo **.env.example**

# Rodar projeto

executar comando **yarn dev**

# Bibliotecas utilizadas

- Foi utilizado Postgres como banco de dados.
- Foi usado Mongo para armazenamento e recuperação de notificações.
- Foi usado Mongoose para operações do Mongo.
- Foi usado Redis para o gerenciamento de filas de envio de email.
- Foi utilizado Sequelize como ORM, criação de migrations e operações no banco de dados.
- Foi usado o framework Express para gerenciamento de rotas.
- Foi usado Yup para validar os dados do modelo.
- Foi usado jsonwebtoken para autenticação JWT.
- Foi usado NodeMailer para o envio de emails.
- Foi usado Handlebars para templates de email.
- Foi usado Multer para gerenciamento de uploads de arquivo na aplicação.
- Foi usado BeeQue para criação de filas de envio de email.
- Foi usado Eslint para formatação do código.
- Foi usado Sentry para monitoramento de erros no servidor.

# Documentacao da API

## Login

- [Login no sistema](doc/session/login.md) : `POST /sessions`

## Users

- [Cadastro de usuário](doc/user/user_registration.md) : `POST /users`
- [Atualização de usuário](doc/user/user_update.md) : `PUT /users`

## Files

- [Upload de arquivo](doc/file/file_upload.md) : `POST /files`

## Plans

- [Consulta planos disponíveis](doc/plan/get_all_plans.md) : `GET /plan`
