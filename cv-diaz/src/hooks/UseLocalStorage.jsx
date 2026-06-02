import { useState, useEffect } from "react"

const UseLocalStorage = (clave, valorInicial) => {
  const [valor, setValor] = useState(() => {
    const item = localStorage.getItem(clave)
    return item ? JSON.parse(item) : valorInicial
  });

  useEffect(() => {
    localStorage.setItem(clave, JSON.stringify(valor))
  }, [clave, valor])

  return [valor, setValor]
}

export default UseLocalStorage