import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import logoImg from "../../assets/logo-itau.png";

import "./styles.css";

export default function Register() {
  const [name, setName] = useState("");
  const [register, setRegister] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      register,
    };

    try {
      const response = await api.post("students", data);
      alert(`Seu ID de acesso: ${response.data.register}`);
      history.push("/");
    } catch (err) {
      alert(`Erro no cadastro, tente novamente`);
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e encontre o professor com
            suas respectivas materias.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#EC7000" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome do Coordenador"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="RC"
            value={register}
            onChange={(e) => setRegister(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
