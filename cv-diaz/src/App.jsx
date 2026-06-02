import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ProjectsPage from "./page/ProjectsPage";
import ContactPage from "./page/ContactPage";
 import UseLocalStorage from "./hooks/UseLocalStorage";

function App() {
  const [tema, setTema] = UseLocalStorage("tema", "light");

  const toggleTema = () => {
    setTema(tema === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`min-vh-100 ${
        tema === "dark"
          ? "bg-dark text-light"
          : "bg-light text-dark"
      }`}
    >
      <Navbar tema={tema} toggleTema={toggleTema} />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
