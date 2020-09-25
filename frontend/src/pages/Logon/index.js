import React, { useState, useEffect } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

import logoImg from "../../assets/logo-itau.png";
import livrosImg from "../../assets/livros.svg";

import Button from "../../components/Button";

export default function Logon() {
  const name = localStorage.getItem("school@name");
  const [register, setRegister] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (name) {
      history.push("/dashboard");
      return;
    }
  }, [history, name]);

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("students/signin", { register });

      localStorage.setItem("school@register", register);
      localStorage.setItem("school@name", response.data.name);

      history.push("/dashboard");
    } catch (err) {
      alert("Falha no Login, tente novamente");
    }
  }

  return (
    <div>
      <div className="logon-container">
        <section className="form">
          <img src={logoImg} alt="Itau" />
          <form onSubmit={handleLogin}>
            <h1>Faça seu Logon</h1>
            <input
              placeholder="Digite seu RC"
              value={register}
              onChange={(e) => setRegister(e.target.value)}
            />
            <Button name="Entrar" />
            <Link className="back-link" to="/register">
              <FiLogIn size={16} color="#EC7000" />
              Não tenho cadastro
            </Link>
          </form>
        </section>
        <img src={livrosImg} alt="livros" />
      </div>
    </div>
  );
}
