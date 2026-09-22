function Sobre() {
  return (
    <main className="container">
      <section className="page-header">
        <span className="badge">Conheça o projeto</span>

        <h2>Sobre </h2>

        <p>
          O Portal DSM é um projeto desenvolvido para apresentar informações
          relacionadas ao curso de Desenvolvimento de Sistemas.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h3>🎯 Objetivo</h3>

          <p>
            Criar uma interface moderna e responsiva utilizando React, Vite e
            React Router, colocando em prática os conceitos de desenvolvimento
            front-end.
          </p>
        </div>

        <div className="about-card">
          <h3>⚛️ Tecnologias</h3>

          <p>
            O projeto utiliza React para a construção da interface, Vite como
            ferramenta de desenvolvimento e React Router para a navegação entre
            as páginas.
          </p>
        </div>

        <div className="about-card">
          <h3>🚀 Projeto acadêmico</h3>

          <p>
            Este portal faz parte das atividades de desenvolvimento web do
            curso de Desenvolvimento de Sistemas.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Sobre;