function Notificacao({ notificacao, fechar }) {
  if (!notificacao) {
    return null;
  }

  const tipo = notificacao.tipo || "success";

  const configuracao = {
    success: {
      icone: "✓",
      titulo: "Sucesso",
    },
    error: {
      icone: "!",
      titulo: "Erro",
    },
    warning: {
      icone: "!",
      titulo: "Atenção",
    },
  };

  const atual = configuracao[tipo] || configuracao.success;

  return (
    <div className="notification-container">
      <div className={`notification notification-${tipo}`}>
        <div className="notification-icon">
          {atual.icone}
        </div>

        <div className="notification-content">
          <p className="notification-title">
            {atual.titulo}
          </p>

          <p className="notification-message">
            {notificacao.mensagem}
          </p>
        </div>

        <button
          type="button"
          className="notification-close"
          onClick={fechar}
          aria-label="Fechar notificação"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default Notificacao;