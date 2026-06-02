import { useReducer, useState } from "react"

const initialState = {
  nombre: "",
  email: "",
  mensaje: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "ACTUALIZAR_CAMPO":
      return {
        ...state,
        [action.campo]: action.valor,
      }

    case "RESET":
      return initialState

    default:
      return state
  }
}

function ContactPage() {
  const [form, dispatch] = useReducer(reducer, initialState)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const validar = () => {
    let nuevosErrores = {}

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio"
    }

    if (!form.email.trim()) {
      nuevosErrores.email = "El email es obligatorio"
    } else if (!form.email.includes("@")) {
      nuevosErrores.email = "Ingrese un email válido"
    }

    if (!form.mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es obligatorio";
    } else if (form.mensaje.length < 10) {
      nuevosErrores.mensaje = "Debe tener al menos 10 caracteres"
    }

    setErrores(nuevosErrores)

    return Object.keys(nuevosErrores).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validar()) {
      setEnviado(true)

      dispatch({
        type: "RESET",
      });

      setTimeout(() => {
        setEnviado(false)
      }, 3000)
    }
  }

  const handleChange = (e) => {
    dispatch({
      type: "ACTUALIZAR_CAMPO",
      campo: e.target.name,
      valor: e.target.value,
    })
  }

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="mb-4"> Contacto</h2>

        {enviado && (
          <div className="alert alert-success">
            ¡Mensaje enviado correctamente!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="mb-3">
            <label className="form-label">
              Nombre
            </label>

            <input
              type="text"
              name="nombre"
              className={`form-control ${
                errores.nombre ? "is-invalid" : ""
              }`}
              value={form.nombre}
              onChange={handleChange}
              onBlur={validar}
            />

            {errores.nombre && (
              <div className="invalid-feedback">
                {errores.nombre}
              </div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              name="email"
              className={`form-control ${
                errores.email ? "is-invalid" : ""
              }`}
              value={form.email}
              onChange={handleChange}
              onBlur={validar}
            />

            {errores.email && (
              <div className="invalid-feedback">
                {errores.email}
              </div>
            )}
          </div>

          {/* Mensaje */}
          <div className="mb-3">
            <label className="form-label">
              Mensaje
            </label>

            <textarea
              rows="5"
              name="mensaje"
              className={`form-control ${
                errores.mensaje ? "is-invalid" : ""
              }`}
              value={form.mensaje}
              onChange={handleChange}
              onBlur={validar}
            />

            {errores.mensaje && (
              <div className="invalid-feedback">
                {errores.mensaje}
              </div>
            )}
          </div>

          <button
            className="btn btn-success"
            type="submit"
          >
            Enviar
          </button>

          <button
            className="btn btn-danger ms-2"
            type="button"
            onClick={() =>
              dispatch({ type: "RESET" })
            }
          >
            Reiniciar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage