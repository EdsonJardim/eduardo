function Card({ titulo, descricao }) {
  return (
    <article className="card">
      <div className="card-icon">◆</div>

      <h3>{titulo}</h3>

      <p>{descricao}</p>

      <span className="card-link">
        Saiba mais →
      </span>
    </article>
  );
}

export default Card;