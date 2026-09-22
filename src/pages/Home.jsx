function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h2>Bem-vindo</h2>

        <p>
          Um espaço desenvolvido para apresentar informações sobre
          Desenvolvimento de Sistemas, alunos, cursos e a formação acadêmica.
        </p>

        <div className="hero-buttons">
          <a href="/cursos" className="btn">
            Conhecer os cursos
          </a>

          <a href="/sobre" className="btn btn-secondary">
            Sobre o portal
          </a>
        </div>
      </section>

      <section className="home-info">
        <div className="info-card">
          <h3>🎓 Alunos</h3>
          <p>
            Conheça os alunos e as informações relacionadas ao curso.
          </p>
        </div>

        <div className="info-card">
          <h3>💻 Cursos</h3>
          <p>
            Confira os cursos e conteúdos relacionados ao Desenvolvimento de
            Sistemas.
          </p>
        </div>

        <div className="info-card">
          <h3>🚀 Tecnologia</h3>
          <p>
            Projeto desenvolvido utilizando React, Vite e React Router.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;