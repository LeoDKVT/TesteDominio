import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Blog from "./components/pages/Blog";
import Contato from "./components/pages/Contato";

export default function App() {
  return (
    //Rotas
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}
