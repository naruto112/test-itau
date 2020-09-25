import React from "react";
import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/logo-itau.png";
import { FiPower } from "react-icons/fi";

import "./styles.css";

export default function Header() {
  const name = localStorage.getItem("school@name");
  const history = useHistory();
  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <div className="header-container">
      <header>
        <img src={logoImg} alt="Itau" />
        <span>Bem Vinda, {name}</span>

        <Link className="button" to="/profile">
          Perfil
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#EC7000" />
        </button>
      </header>
    </div>
  );
}
