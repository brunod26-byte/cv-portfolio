import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function Navbar({ tema, toggleTema }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <Link className="navbar-brand" to="/">
          Mi CV
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link" to="/">
            Inicio
          </Link>

          <Link className="nav-link" to="/about">
            Sobre mí
          </Link>

          <Link className="nav-link" to="/projects">
            Proyectos
          </Link>

          <Link className="nav-link" to="/contact">
            Contacto
          </Link>

        </div>

        <button
          className="btn btn-light"
          onClick={toggleTema}
        >
          {tema === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

      </div>
    </nav>
  )
}

Navbar.propTypes = {
  tema: PropTypes.string.isRequired,
  toggleTema: PropTypes.func.isRequired,
}

export default Navbar