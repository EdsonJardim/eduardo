import { useEffect, useState } from "react";

function Alunos() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  function carregarUsuarios() {
    setCarregando(true);

    fetch("http://localhost:3000/usuarios")
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Erro ao buscar usuários.");
        }

        return resposta.json();
      })
      .then((dados) => {
        setUsuarios(dados);
        setCarregando(false);
      })
      .catch(() => {
        setErro("Não foi possível carregar os usuários.");
        setCarregando(false);
      });
  }

  useEffect(() => {
    carregarUsuarios();
  }, []);

  async function salvarAluno(evento) {
    evento.preventDefault();

    setMensagem("");
    setErro("");

    const dadosAluno = {
      nome,
      email,
      telefone,
    };

    try {
      const url = editandoId
        ? `http://localhost:3000/usuarios/${editandoId}`
        : "http://localhost:3000/usuarios";

      const metodo = editandoId ? "PUT" : "POST";

      const resposta = await fetch(url, {
        method: metodo,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosAluno),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          dados.mensagem || "Erro ao salvar aluno."
        );
      }

      setMensagem(
        editandoId
          ? "Aluno atualizado com sucesso!"
          : "Aluno cadastrado com sucesso!"
      );

      limparFormulario();
      carregarUsuarios();
    } catch (erro) {
      setErro(erro.message);
    }
  }

  function editarAluno(usuario) {
    setEditandoId(usuario.id);
    setNome(usuario.nome);
    setEmail(usuario.email);
    setTelefone(usuario.telefone || "");

    setMensagem("");
    setErro("");
  }

  function limparFormulario() {
    setEditandoId(null);
    setNome("");
    setEmail("");
    setTelefone("");
  }

  async function excluirAluno(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este aluno?"
    );

    if (!confirmar) {
      return;
    }

    setMensagem("");
    setErro("");

    try {
      const resposta = await fetch(
        `http://localhost:3000/usuarios/${id}`,
        {
          method: "DELETE",
        }
      );

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          dados.mensagem || "Erro ao excluir aluno."
        );
      }

      setMensagem("Aluno excluído com sucesso!");

      if (editandoId === id) {
        limparFormulario();
      }

      carregarUsuarios();
    } catch (erro) {
      setErro(erro.message);
    }
  }

  return (
    <main className="container">
      <section className="page-header">
        <span className="badge">Comunidade DSM</span>

        <h2>Alunos</h2>

        <p>
          Área dedicada aos alunos do curso de Desenvolvimento de Sistemas.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-card">
          <h3>
            {editandoId
              ? "✏️ Editar aluno"
              : "🎓 Cadastrar aluno"}
          </h3>

          <form onSubmit={salvarAluno}>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(evento) =>
                setNome(evento.target.value)
              }
              required
            />

            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(evento) =>
                setEmail(evento.target.value)
              }
              required
            />

            <input
              type="text"
              placeholder="Telefone"
              value={telefone}
              onChange={(evento) =>
                setTelefone(evento.target.value)
              }
            />

            <button type="submit" className="btn">
              {editandoId
                ? "Salvar alterações"
                : "Cadastrar aluno"}
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

      <section className="home-info">
        {carregando && <p>Carregando alunos...</p>}

        {!carregando &&
          usuarios.map((usuario) => (
            <div className="info-card" key={usuario.id}>
              <h3>🎓 {usuario.nome}</h3>

              <p>
                <strong>E-mail:</strong> {usuario.email}
              </p>

              <p>
                <strong>Telefone:</strong> {usuario.telefone}
              </p>

              <div className="hero-buttons">
                <button
                  className="btn"
                  onClick={() => editarAluno(usuario)}
                >
                  ✏️ Editar
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => excluirAluno(usuario.id)}
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

export default Alunos;