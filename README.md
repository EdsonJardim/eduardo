🚀 PORTAL DSM

Projeto acadêmico de desenvolvimento web com React, Node.js, Express e MySQL
4º DSM — Laboratório de Desenvolvimento Web

📌 1. SOBRE O PROJETO

O Portal DSM é uma aplicação web acadêmica desenvolvida para apresentar informações sobre o curso de Desenvolvimento de Sistemas.

O projeto começou como um Front-end com React + Vite + React Router e foi evoluído para uma aplicação integrada com Backend em Node.js + Express e banco de dados MySQL.

A aplicação utiliza uma arquitetura organizada em:

React
  ↓
API REST
  ↓
Node.js + Express
  ↓
Routes
  ↓
Controllers
  ↓
Models
  ↓
MySQL

🎯 2. OBJETIVO

O objetivo do projeto é colocar em prática conceitos de desenvolvimento web moderno, trabalhando com:

Componentização

React

React Router

API REST

Node.js

Express

Arquitetura MVC

MySQL

Operações CRUD

Integração Front-end + Back-end

Responsividade

Versionamento com Git e GitHub

🛠️ 3. TECNOLOGIAS UTILIZADAS

Front-end

Tecnologia

Utilização

React

Construção da interface

Vite

Ferramenta de desenvolvimento

React Router

Navegação entre páginas

JavaScript / JSX

Desenvolvimento dos componentes

CSS

Estilização e responsividade

Back-end

Tecnologia

Utilização

Node.js

Ambiente de execução

Express

Criação da API

MySQL2

Conexão com o banco de dados

dotenv

Configuração das variáveis de ambiente

CORS

Comunicação entre Front-end e Back-end

📁 4. ESTRUTURA DO PROJETO

O projeto está dividido em dois projetos independentes:

Meus Documentos/
│
├── eduardo/
│   └── Front-end React
│
└── portal-dsm-backend/
    └── Back-end Node.js

Back-end

portal-dsm-backend/
│
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── usuarioController.js
│   │   └── cursoController.js
│   ├── models/
│   │   ├── usuarioModel.js
│   │   └── cursoModel.js
│   └── routes/
│       ├── usuarioRoutes.js
│       └── cursoRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js

O arquivo .env e a pasta node_modules/ não devem ser enviados ao GitHub.

🧩 5. FRONT-END

O Front-end possui as páginas Home, Alunos, Cursos, Sobre e Contato, além de componentes reutilizáveis como Header, Navbar, Card e Footer.

As páginas utilizam React Router para a navegação.

🔄 6. INTEGRAÇÃO COM A API

O React utiliza fetch() para consumir a API criada com Node.js e Express.

Exemplos:

fetch("http://localhost:3000/usuarios")

fetch("http://localhost:3000/cursos")

Os dados são recebidos em formato JSON e apresentados dinamicamente na interface.

🗄️ 7. BANCO DE DADOS

O projeto utiliza o banco:

portal_dsm

Tabela usuarios

id
nome
email
telefone
criado_em

Tabela cursos

id
nome
descricao

🔧 8. API REST

👨‍🎓 Usuários

Método

Rota

Ação

GET

/usuarios

Listar usuários

GET

/usuarios/:id

Buscar usuário

POST

/usuarios

Cadastrar usuário

PUT

/usuarios/:id

Atualizar usuário

DELETE

/usuarios/:id

Excluir usuário

🎓 Cursos

Método

Rota

Ação

GET

/cursos

Listar cursos

GET

/cursos/:id

Buscar curso

POST

/cursos

Cadastrar curso

PUT

/cursos/:id

Atualizar curso

DELETE

/cursos/:id

Excluir curso

🏗️ 9. ARQUITETURA MVC

React
  ↓ HTTP
Routes
  ↓
Controllers
  ↓
Models
  ↓
MySQL

Routes: definem os caminhos e métodos HTTP.

Controllers: recebem requisições, validam dados e coordenam operações.

Models: realizam consultas e alterações no banco.

MySQL: armazena os dados de forma persistente.

🔐 10. VARIÁVEIS DE AMBIENTE

As configurações do banco ficam no arquivo .env:

PORTA=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=portal_dsm

O .env está protegido pelo .gitignore e não deve ser versionado.

▶️ 11. EXECUTANDO O BACK-END

Entre na pasta:

cd /c/Users/AsusBook/OneDrive/Documentos/"Meus Documentos"/portal-dsm-backend

Instale as dependências:

npm install

Inicie o servidor:

node server.js

O Back-end ficará disponível em:

http://localhost:3000

▶️ 12. EXECUTANDO O FRONT-END

Entre na pasta:

cd /c/Users/AsusBook/OneDrive/Documentos/"Meus Documentos"/eduardo

Instale as dependências:

npm install

Inicie o Vite:

npm run dev

O Front-end ficará disponível normalmente em:

http://localhost:5173/

🧪 13. TESTES REALIZADOS

Usuários

Listar usuários

Buscar usuário por ID

Cadastrar usuário

Editar usuário

Excluir usuário

Cursos

Listar cursos

Buscar curso por ID

Cadastrar curso

Editar curso

Excluir curso

Integração

React consumindo a API

Dados carregados do MySQL

Cadastro pelo React

Edição pelo React

Exclusão pelo React

Atualização da lista após operações

🎨 14. RESPONSIVIDADE E ESTILIZAÇÃO

O projeto possui CSS personalizado para criar uma interface moderna e responsiva, incluindo Header, Navbar, Hero, botões, cards, formulários, páginas, rodapé e grids responsivos.

Também foi utilizado um favicon personalizado em:

public/favicon-portal-dsm.png

📦 15. COMANDOS PRINCIPAIS

Front-end

npm run dev
npm run build
npm run lint
npm run preview

Back-end

node server.js

Git

git add .
git commit -m "mensagem"
git push
git pull

🐙 16. VERSIONAMENTO

O Back-end possui um repositório próprio no GitHub:

portal-dsm-backend

https://github.com/EdsonJardim/portal-dsm-backend

A branch principal utilizada é:

main

Arquivos sensíveis e dependências locais não são enviados ao repositório:

.env
node_modules/

✅ 17. O QUE JÁ FOI IMPLEMENTADO

[x] Projeto Front-end com React + Vite
[x] React Router configurado
[x] Header
[x] Navbar
[x] Card reutilizável
[x] Footer
[x] Página Home
[x] Página Alunos
[x] Página Cursos
[x] Página Sobre
[x] Página Contato
[x] CSS personalizado
[x] Layout responsivo
[x] Favicon personalizado
[x] Backend com Node.js
[x] API com Express
[x] Arquitetura MVC
[x] Conexão com MySQL
[x] CRUD de usuários
[x] CRUD de cursos
[x] Integração React + API
[x] Testes das operações
[x] Git configurado
[x] Backend publicado no GitHub

🎓 18. RELAÇÃO COM A ATIVIDADE ACADÊMICA

O projeto aplica conceitos de desenvolvimento Front-end e Back-end, incluindo React, componentização, rotas, API REST, Node.js, Express, MVC, MySQL, CRUD, integração entre sistemas e Git/GitHub.

👨‍💻 19. INFORMAÇÕES DO PROJETO

Projeto: Portal DSM
Curso: Desenvolvimento de Sistemas
Turma: 4º DSM
Disciplina: Laboratório de Desenvolvimento Web
Front-end: React + Vite
Back-end: Node.js + Express
Banco de dados: MySQL

🏁 20. CONCLUSÃO

O Portal DSM evoluiu de uma aplicação Front-end para uma aplicação web integrada, com interface em React, API desenvolvida com Node.js e Express e persistência de dados utilizando MySQL.

Atualmente, o sistema possui CRUD completo para alunos e cursos, permitindo cadastrar, consultar, editar e excluir registros diretamente pela interface do Portal DSM.

A separação entre Front-end, Routes, Controllers, Models e banco de dados proporciona uma estrutura organizada e preparada para futuras funcionalidades.

📌 PORTAL DSM

Desenvolvimento de Sistemas • 4º DSM
Laboratório de Desenvolvimento Web