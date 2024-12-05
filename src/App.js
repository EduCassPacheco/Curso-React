import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Footer from "./components/Layouts/Footer";
import NavBar from "./components/Layouts/NavBar";

function App() {
  return (
    <Router>
      <NavBar/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
    
  );
}

export default App;

