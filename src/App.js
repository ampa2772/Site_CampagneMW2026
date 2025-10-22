import React from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Cohesion from "./pages/Cohesion";
import Bilan from "./pages/Bilan";
import "./index.css";
import logo from "./Images/logo.png";

function NavBar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand">
          {/* Logo officiel à la place du carré bleu (taille gérée dans .brand-logo) */}
          <img src={logo} alt="Bernay Ville d’Avenir - logo" className="brand-logo" />
          <span>Bernay Ville d’Avenir</span>
        </div>
        <div className="menu">
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/evenements">Événements</NavLink>
          <NavLink to="/cohesion">Cohésion</NavLink>
          <NavLink to="/bilan">Bilan</NavLink>
          {/* Lien GitHub retiré car non utile à la navigation publique */}
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="section">
      <div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem",flexWrap:"wrap"}}>
        <div>© {new Date().getFullYear()} Bernay Ville d’Avenir</div>
        <div className="links">
          <a href="#/" title="Accueil">Accueil</a>
          <a href="#/evenements" title="Événements">Événements</a>
          <a href="#/cohesion" title="Cohésion">Cohésion</a>
          <a href="#/bilan" title="Bilan">Bilan</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  React.useEffect(() => {
    document.title = "Bernay Ville d’Avenir";
  }, []);

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evenements" element={<Events />} />
        <Route path="/cohesion" element={<Cohesion />} />
        <Route path="/bilan" element={<Bilan />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

