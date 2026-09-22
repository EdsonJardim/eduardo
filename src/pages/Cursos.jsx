import { useEffect, useState } from "react";
import Card from "../components/Card";

function Cursos() {
  const [cursos, setCursos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  function carregarCursos() {
    setCarregando(true);

    fetch("http://localhost:3000/cursos")
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Erro ao buscar cursos.");
        }

        return resposta.json();
      })
      .then((dados) => {
        setCursos(dados);
        setCarregando(false);
      })
      .catch(() => {
        setErro("Não foi possível carregar os cursos.");
        setCarregando(false);
      });
  }

  useEffect(() => {
    carregarCursos();
  }, []);

  async function salvarCurso(evento) {
    evento.preventDefault();

    setMensagem("");
    setErro("");

    const dadosCurso = {
      nome,
      descricao,
    };

    try {
      const url = editandoId
        ? `http://localhost:3000/cursos/${editandoId}`
        : "http://localhost:3000/cursos";

      const metodo = editandoId ? "PUT" : "POST";

      const resposta = await fetch(url, {
        method: metodo,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosCurso),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          dados.mensagem || "Erro ao salvar curso."
        );
      }

      setMensagem(
        editandoId
          ? "Curso atualizado com sucesso!"
          : "Curso cadastrado com sucesso!"
      );

      limparFormulario();
      carregarCursos();
    } catch (erro) {
      setErro(erro.message);
    }
  }

  function editarCurso(curso) {
    setEditandoId(curso.id);
    setNome(curso.nome);
    setDescricao(curso.descricao);

    setMensagem("");
    setErro("");
  }

  function limparFormulario() {
    setEditandoId(null);
    setNome("");
    setDescricao("");
  }

  async function excluirCurso(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este curso?"
    );

    if (!confirmar) {
      return;
    }

    setMensagem("");
    setErro("");

    try {
      const resposta = await fetch(
        `http://localhost:3000/cursos/${id}`,
        {
          method: "DELETE",
        }
      );

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          dados.mensagem || "Erro ao excluir curso."
        );
      }

      setMensagem("Curso excluído com sucesso!");

      if (editandoId === id) {
        limparFormulario();
      }

      carregarCursos();
    } catch (erro) {
      setErro(erro.message);
    }
  }

  return (
    <main className="container">
      <section className="page-header">
        <span className="badge">Formação acadêmica</span>

        <h2>Cursos</h2>

        <p>
          Conheça algumas das principais áreas de conhecimento do curso de
          Desenvolvimento de Sistemas.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-card">
          <h3>
            {editandoId
              ? "✏️ Editar curso"
              : "🎓 Cadastrar curso"}
          </h3>

          <form onSubmit={salvarCurso}>
            <input
              type="text"
              placeholder="Nome do curso"
              value={nome}
              onChange={(evento) =>
                setNome(evento.target.value)
              }
              required
            />

            <input
              type="text"
              placeholder="Descrição do curso"
              value={descricao}
              onChange={(evento) =>
                setDescricao(evento.target.value)
              }
              required
            />

            <button type="submit" className="btn">
              {editandoId
                ? "Salvar alterações"
                : "Cadastrar curso"}
            </button>

            {editandoId && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={limparFormulario}
              >
                Cancelar
              </button>
            )}
          </form>

          {mensagem && <p>{mensagem}</p>}

          {erro && <p>{erro}</p>}
        </div>
      </section>

      <section className="cards">
        {carregando && <p>Carregando cursos...</p>}

        {!carregando &&
          !erro &&
          cursos.map((curso) => (
            <div className="card" key={curso.id}>
              <div className="card-icon">◆</div>

              <h3>{curso.nome}</h3>

              <p>{curso.descricao}</p>

              <div className="hero-buttons">
                <button
                  className="btn"
                  onClick={() => editarCurso(curso)}
                >
                  ✏️ Editar
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => excluirCurso(curso.id)}
                >
                  🗑️ Excluir
                </button>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
}

export default Cursos;