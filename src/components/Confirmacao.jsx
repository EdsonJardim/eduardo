function Confirmacao({
  titulo,
  mensagem,
  confirmar,
  cancelar,
}) {
  return (
    <div className="confirm-overlay">
      <div className="confirm-modal">
        <div className="confirm-icon">
          !
        </div>

        <h3>{titulo}</h3>

        <p>{mensagem}</p>

        <div className="confirm-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={cancelar}
          >
            Cancelar
          </button>

          <button
            type="button"
            className="btn"
            onClick={confirmar}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmacao;