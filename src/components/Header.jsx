import { FaUserCircle, FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import "./Header.css";
import logo from "../assets/avimet-logo.png";


//esto ayudo gpt, pero no esta muy bien, hay que hacerlo de nuevo
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-box">
        <img src={logo} alt="AVIMET Logo" className="logo" />
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars className="menu-icon" />
      </div>

      <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
        <a href="#" className="nav-link">
          Inicio
        </a>
        <a href="#" className="nav-link">
          Destinos
        </a>
        <a href="#" className="nav-link">
          Reserva tu viaje
        </a>
        <div className="search-container">
          <input type="text" placeholder="Buscar..." className="search-input" />
          <FaSearch className="search-icon" />
        </div>
        <FaUserCircle className="user-icon" />
      </nav>
    </header>
  );
}
