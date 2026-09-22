import { useEffect, useState } from "react";

import Notificacao from "../components/Notificacao";
import Confirmacao from "../components/Confirmacao";

function Alunos() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [editandoId, setEditandoId] = useState(null);

  const [notificacao, setNotificacao] = useState(null);
  const [confirmacao, setConfirmacao] = useState(null);

  function mostrarNotificacao(tipo, mensagem) {
    setNotificacao({
      tipo,
      mensagem,
    });

    setTimeout(() => {
      setNotificacao(null);
    }, 4000);
  }

  function carregarUsuarios() {
    setCarregando(true);
    setErro("");

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

        mostrarNotificacao(
          "error",
          "Não foi possível carregar os usuários."
        );
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

      mostrarNotificacao(
        "success",
        editandoId
          ? "Aluno atualizado com sucesso!"
          : "Aluno cadastrado com sucesso!"
      );

      limparFormulario();
      carregarUsuarios();
    } catch (erro) {
      setErro(erro.message);

      mostrarNotificacao(
        "error",
        erro.message
      );
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

    setMensagem("");
    setErro("");
  }

  function excluirAluno(id) {
    setConfirmacao({
      titulo: "Excluir aluno",
      mensagem:
        "Tem certeza que deseja excluir este aluno? Essa ação não poderá ser desfeita.",
      acao: () => confirmarExclusaoAluno(id),
    });
  }

  async function confirmarExclusaoAluno(id) {
    setConfirmacao(null);

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

      mostrarNotificacao(
        "success",
        "Aluno excluído com sucesso!"
      );

      if (editandoId === id) {
        limparFormulario();
      }

      carregarUsuarios();
    } catch (erro) {
      setErro(erro.message);

      mostrarNotificacao(
        "error",
        erro.message
      );
    }
  }

  return (
    <main className="container">

      <Notificacao
        notificacao={notificacao}
        fechar={() => setNotificacao(null)}
      />

      {confirmacao && (
        <Confirmacao
          titulo={confirmacao.titulo}
          mensagem={confirmacao.mensagem}
          confirmar={confirmacao.acao}
          cancelar={() => setConfirmacao(null)}
        />
      )}

      <section className="page-header">
        <span className="badge">
          Comunidade DSM
        </span>

        <h2>Alunos</h2>

        <p>
          Área dedicada aos alunos do curso de
          Desenvolvimento de Sistemas.
        </p>
      </section>

      <section className="contact-content crud-content">
        <div className="contact-card crud-card">

          <h3>
            {editandoId
              ? "✏️ Editar aluno"
              : "🎓 Cadastrar aluno"}
          </h3>

          <form
            onSubmit={salvarAluno}
            className="crud-form"
          >

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

            <div className="crud-form-actions">

              <button
                type="submit"
                className="btn"
              >
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

            </div>

          </form>

          {mensagem && (
            <p>{mensagem}</p>
          )}

          {erro && (
            <p>{erro}</p>
          )}

        </div>
      </section>

      <section className="home-info cards crud-grid">

        {carregando && (
          <p>
            Carregando alunos...
          </p>
        )}

        {!carregando &&
          !erro &&
          usuarios.map((usuario) => (

            <div
              className="info-card card"
              key={usuario.id}
            >

              <div className="card-icon">
                🎓
              </div>

              <h3>
                {usuario.nome}
              </h3>

              <p>
                <strong>E-mail:</strong>{" "}
                {usuario.email}
              </p>

              <p>
                <strong>Telefone:</strong>{" "}
                {usuario.telefone || "Não informado"}
              </p>

              <div className="crud-card-actions">

                <button
                  className="btn"
                  onClick={() =>
                    editarAluno(usuario)
                  }
                >
                  ✏️ Editar
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() =>
                    excluirAluno(usuario.id)
                  }
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