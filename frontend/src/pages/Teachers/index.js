import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft, FiPlus } from "react-icons/fi";

import Header from "../../components/Header";
import api from "../../services/api";

import coachingImg from "../../assets/professor.svg";

import fessorImg from "../../assets/fessor.svg";
import livroTeacherImg from "../../assets/livros-teachers.svg";

import "./styles.css";

export default function Teachers() {
  const register = localStorage.getItem("school@register");
  const [teachers, setTeachers] = useState([]);
  const [teacherMaterials, setTeacherMaterials] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!register) {
      history.push("/");
      return;
    }
    try {
      api.get("teachers").then((response) => {
        setTeachers(response.data);
      });
    } catch (err) {
      alert("Erro ao carregar os dados de professores");
    }
  }, [register, history]);

  const handleMaterials = (id) => {
    const teacher = teachers.filter((material) => id === material.id);
    setTeacherMaterials(...teacher);
  };
  return (
    <>
      <div className="header">
        <Header />
      </div>
      {teacherMaterials.length === 0 ? (
        <div className="teacher-container">
          <h1>
            Professores
            <div className="actions-header">
              <Link className="back-link" to="/dashboard">
                <FiArrowLeft size={16} color="#EC7000" />
              </Link>
              <button className="back-link">
                <FiPlus size={16} color="#EC7000" />
              </button>
            </div>
          </h1>
          <ul>
            {teachers.map((teacher) => (
              <button
                key={teacher.id}
                onClick={() => handleMaterials(teacher.id)}
              >
                <li className="card">
                  <img src={coachingImg} alt="Coaching" />
                  <div>
                    <strong>Prof: {teacher.name}</strong>
                    <p>Idade: {teacher.age}</p>
                  </div>
                </li>
              </button>
            ))}
          </ul>
        </div>
      ) : (
        <div className="material-container">
          <h1>
            Matérias
            <button
              className="back-link-btn"
              onClick={() => setTeacherMaterials([])}
            >
              <FiArrowLeft size={16} color="#EC7000" />
            </button>
          </h1>
          <div className="teacher-menu">
            <li className="main-teacher">
              <img src={fessorImg} alt="The Teachers Material" />
              <div>
                <strong>{teacherMaterials.name}</strong>
              </div>
            </li>
          </div>
          <div className="material-container">
            <ul>
              {teacherMaterials.materials.map((teacher) => (
                <li className="card " key={teacher.id}>
                  <img src={livroTeacherImg} alt="Materials" />
                  <strong>{teacher.name}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
