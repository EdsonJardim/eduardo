# Portal DSM — Front-end

Front-end do **Portal DSM**, projeto acadêmico desenvolvido para o **4º DSM — Laboratório de Desenvolvimento Web**.

A aplicação foi desenvolvida utilizando **React + Vite**, com navegação através do React Router e integração com a API REST do back-end desenvolvido em **Node.js + Express**.

---

## 📌 Sobre o Projeto

O **Portal DSM** é uma aplicação web criada para apresentar informações relacionadas ao curso de **Desenvolvimento de Sistemas**.

O projeto possui uma interface moderna, responsiva e organizada em componentes reutilizáveis, além de realizar comunicação com o back-end para gerenciamento de alunos e cursos.

A aplicação está dividida em diferentes páginas:

- Página inicial;
- Alunos;
- Cursos;
- Sobre;
- Contato.

---

## 🎯 Objetivo

O objetivo do projeto é desenvolver uma aplicação web utilizando os principais conceitos estudados no **Laboratório de Desenvolvimento Web**, trabalhando com:

- Desenvolvimento de interfaces com React;
- Componentização;
- Roteamento entre páginas;
- Consumo de API REST;
- Operações CRUD;
- Comunicação entre Front-end e Back-end;
- Organização de projetos;
- Controle de versão com Git e GitHub;
- Desenvolvimento de interfaces responsivas.

---

## ⚙️ Funcionalidades

### 🏠 Página Inicial

Apresenta o Portal DSM e fornece acesso às principais áreas da aplicação.

### 🎓 Alunos

A página de alunos possui integração com a API e permite:

- Listar alunos;
- Cadastrar alunos;
- Editar alunos;
- Excluir alunos.

### 💻 Cursos

A página de cursos possui integração com a API e permite:

- Listar cursos;
- Cadastrar cursos;
- Editar cursos;
- Excluir cursos.

### ℹ️ Sobre

Apresenta informações sobre o Portal DSM, seu objetivo e as tecnologias utilizadas.

### 📞 Contato

Disponibiliza uma página destinada às informações de contato do portal.

### 🧭 Navegação

O projeto utiliza **React Router** para realizar a navegação entre as páginas da aplicação.

---

## 🛠️ Tecnologias Utilizadas

### Front-end

- React
- Vite
- React Router
- JavaScript
- JSX
- HTML5
- CSS3

### Integração com Back-end

- Fetch API
- API REST
- Node.js
- Express
- MySQL

### Versionamento

- Git
- GitHub

---

## 📁 Estrutura do Projeto

```text
eduardo/
│
├── public/
│   └── favicon-portal-dsm.png
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── Alunos.jsx
│   │   ├── Contato.jsx
│   │   ├── Cursos.jsx
│   │   ├── Home.jsx
│   │   └── Sobre.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
🧩 Componentes

O projeto utiliza componentes reutilizáveis para organizar a interface.

Header

Responsável pela apresentação do nome do Portal DSM e das informações do curso.

Navbar

Responsável pela navegação entre as páginas:

Início;
Alunos;
Cursos;
Sobre;
Contato.
Card

Componente utilizado para apresentar informações em formato de cards.

Footer

Responsável pelas informações apresentadas no rodapé da aplicação.

📄 Páginas

O projeto possui as seguintes rotas:

Rota	Página
/	Página Inicial
/alunos	Alunos
/cursos	Cursos
/sobre	Sobre
/contato	Contato
🔌 Integração com o Back-end

O front-end realiza requisições HTTP para o back-end do Portal DSM utilizando a Fetch API.

O servidor back-end é executado em:

http://localhost:3000
👥 Endpoints de Usuários
GET     /usuarios
GET     /usuarios/:id
POST    /usuarios
PUT     /usuarios/:id
DELETE  /usuarios/:id
🎓 Endpoints de Cursos
GET     /cursos
GET     /cursos/:id
POST    /cursos
PUT     /cursos/:id
DELETE  /cursos/:id

A comunicação entre as aplicações ocorre da seguinte forma:

┌─────────────────────┐
│     React / Vite    │
│     Front-end       │
└──────────┬──────────┘
           │
           │ HTTP / Fetch API
           ▼
┌─────────────────────┐
│   Node.js + Express │
│       API REST      │
└──────────┬──────────┘
           │
           │ SQL
           ▼
┌─────────────────────┐
│        MySQL        │
│    portal_dsm       │
└─────────────────────┘
🔄 Operações CRUD

O Portal DSM utiliza operações CRUD para gerenciamento dos dados.

Operação	HTTP	Descrição
Create	POST	Cadastrar
Read	GET	Consultar
Update	PUT	Editar
Delete	DELETE	Excluir

Essas operações são utilizadas nas funcionalidades de Alunos e Cursos.

📱 Responsividade

A interface foi desenvolvida utilizando CSS para proporcionar uma experiência adequada em diferentes dispositivos.

O projeto possui adaptação para:

🖥️ Desktop;
💻 Notebook;
📱 Smartphone;
📲 Tablet.
🚀 Como Executar o Projeto
1. Clonar o repositório
git clone https://github.com/EdsonJardim/eduardo.git
2. Entrar na pasta
cd eduardo
3. Instalar as dependências
npm install
4. Executar o projeto
npm run dev

O Vite disponibilizará a aplicação no endereço informado pelo terminal, normalmente:

http://localhost:5173/
🔗 Executando o Projeto Completo

Para utilizar todas as funcionalidades do Portal DSM, é necessário executar também o back-end.

Front-end
npm run dev

Servidor:

http://localhost:5173
Back-end

No projeto portal-dsm-backend:

node server.js

Servidor:

http://localhost:3000

Com os dois servidores funcionando:

React
  │
  │ http://localhost:5173
  ▼
Portal DSM
  │
  │ Fetch API
  ▼
Node.js + Express
  │
  │ SQL
  ▼
MySQL
📦 Dependências Principais

O projeto utiliza principalmente:

React
React DOM
React Router
Vite

As versões e demais dependências podem ser consultadas no arquivo:

package.json
🗃️ Controle de Versão

O projeto utiliza Git para controle de versão e GitHub para hospedagem do código-fonte.

Repositório do Front-end:

GitHub — eduardo

Repositório do Back-end:

GitHub — portal-dsm-backend

🎓 Projeto Acadêmico

4º DSM — Laboratório de Desenvolvimento Web

Projeto desenvolvido como atividade acadêmica do curso de Desenvolvimento de Sistemas.

👨‍💻 Desenvolvedor

Edson Eduardo Soares Jardim

Projeto desenvolvido com:

React;
Vite;
React Router;
Node.js;
Express;
MySQL;
Git;
GitHub.
📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e educacionais.
