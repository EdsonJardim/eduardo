function Contato() {
  return (
    <main className="container">
      <section className="page-header">
        <span className="badge">Fale conosco</span>

        <h2>Contato</h2>

        <p>
          Entre em contato para obter mais informações sobre o Portal DSM e o
          curso de Desenvolvimento de Sistemas.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-card">
          <h3>📧 E-mail</h3>
          <p>
            Envie sua mensagem para obter informações sobre o projeto.
          </p>

          <a href="mailto:contato@portaldsm.com" className="btn">
            Enviar e-mail
          </a>
        </div>

        <div className="contact-card">
          <h3>💬 Atendimento</h3>
          <p>
            Utilize este espaço para entrar em contato com a equipe responsável
            pelo Portal DSM.
          </p>

          <span className="contact-info">
            Segunda a sexta-feira
          </span>
        </div>
      </section>
    </main>
  );
}

export default Contato;