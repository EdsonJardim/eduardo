import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to="/">Início</Link>
      <Link to="/alunos">Alunos</Link>
      <Link to="/cursos">Cursos</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
}

export default Navbar;