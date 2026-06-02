import { useState, useEffect } from "react"
import ProjectCard from "../components/ProjectCard"
import proyectosData from "../data/proyectos.json"

function ProjectsPage() {

  const [proyectos, setProyectos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    setProyectos(proyectosData)
    setCargando(false)
  }, [])

  if (cargando)
    return <h2>Cargando...</h2>

  return (
    <div>
      <h2>Mis Proyectos</h2>

      {proyectos.map((proyecto) => (
        <ProjectCard
          key={proyecto.id}
          proyecto={proyecto}
        />
      ))}
    </div>
  )
}

export default ProjectsPage