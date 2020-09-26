import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/logo-itau.png";

import "./styles.css";

export default function Profile() {
  const [name, setName] = useState("");
  const [register, setRegister] = useState("");
  const [newRegister, setNewRegister] = useState("");
  const history = useHistory();
  const token = localStorage.getItem("school@register");

  useEffect(() => {
    if (!token) {
      history.push("/");
      return;
    }
    setRegister(localStorage.getItem("school@register"));
    setName(localStorage.getItem("school@name"));
  }, [token, history]);

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      name,
      register,
      newRegister,
    };

    try {
      await api.put("students", data);
      alert("Atualização feita com sucesso");
      history.push("/dashboard");
    } catch (err) {
      alert("Erro ao cadastrar caso, tente novamente");
    }
  }

  return (
    <div className="profile-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Perfil</h1>
          <p>Após alterar o RC ou Nome clique em gravar para as alterações.</p>
          <Link className="back-link" to="/dashboard">
            <FiArrowLeft size={16} color="#EC7000" />
            Voltar para dashboard
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="RC"
            value={register}
            onChange={(e) => setRegister(e.target.value)}
          />
          <input
            placeholder="Novo RC"
            value={newRegister}
            onChange={(e) => setNewRegister(e.target.value)}
          />
          <button className="button" type="submit">
            Gravar
          </button>
        </form>
      </div>
    </div>
  );
}
