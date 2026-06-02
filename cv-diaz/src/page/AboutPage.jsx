import { useState } from "react"
import SkillBadge from "../components/SkillBadge"

function AboutPage() {

  const [mostrar, setMostrar] = useState(true)

  const habilidades = [
    "React",
    "Node",
    "MySQL",
    "Git"
  ];

  return (
    <div className="container mt-5">

      <div className="card p-4">

        <div>

          <h2>Sobre mí</h2>

          <p>
            Estudiante de Analista en Sistemas
          </p>

          <button
            className="btn btn-warning"
            onClick={() => setMostrar(!mostrar)}
          >
            Mostrar/Ocultar
          </button>

          {mostrar && (
            <>
              <h3 className="mt-3">
                Habilidades
              </h3>

              {habilidades.map((hab, index) => (
                <SkillBadge
                  key={index}
                  skill={hab}
                />
              ))}
            </>
          )}

        </div>

      </div>
    </div>
  )
}

export default AboutPage