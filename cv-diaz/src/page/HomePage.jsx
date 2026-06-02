import { Link } from "react-router-dom"
import SkillBadge from "../components/SkillBadge"

function HomePage() {

  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap"
  ];

  return (
    <div className="container mt-5">

      <h2>Inicio</h2>

      <div className="card p-4 mb-4">

        <h2>Bruno Díaz</h2>

        <h3>Analista en Sistemas de Computacion</h3>

        <img
          src="https://via.placeholder.com/200"
          alt="foto"
          className="mb-3"
        />

        <h4 className="mt-3">Skills</h4>

        <div className="mb-3">
          {skills.map((skill, index) => (
            <SkillBadge
              key={index}
              skill={skill}
            />
          ))}
        </div>

        <Link
          className="btn btn-primary"
          to="/contact"
        >
          Contactarme
        </Link>

      </div>

    </div>
  )
}

export default HomePage