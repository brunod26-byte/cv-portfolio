import PropTypes from "prop-types"

function ProjectCard({ proyecto }) {
  return (
    <div className="card mb-3">

      <div className="card-body">

        <h3>{proyecto.nombre}</h3>

        <p>{proyecto.descripcion}</p>

        <p>
          {proyecto.tecnologias.join(", ")}
        </p>

      </div>

    </div>
  )
}

ProjectCard.propTypes = {
  proyecto: PropTypes.object.isRequired,
}

export default ProjectCard