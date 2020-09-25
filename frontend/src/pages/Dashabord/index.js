import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import Header from "../../components/Header";

import "./styles.css";
import coachingImg from "../../assets/coaching.svg";
import materialImg from "../../assets/materia.svg";

export default function Dashabord() {
  const register = localStorage.getItem("school@register");

  const history = useHistory();

  useEffect(() => {
    if (!register) {
      history.push("/");
      return;
    }
  }, [register, history]);

  return (
    <div className="dashboard-container">
      <Header />
      <h1>Plataforma</h1>
      <ul>
        <Link to="/teachers">
          <li className="card">
            <img src={coachingImg} alt="Coaching" />
            <strong>Professores</strong>
          </li>
        </Link>
        <Link to="/materials">
          <li className="card">
            <img src={materialImg} alt="Material" />
            <strong>Matérias</strong>
          </li>
        </Link>
      </ul>
    </div>
  );
}
