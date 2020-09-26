import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft, FiPlus } from "react-icons/fi";

import Header from "../../components/Header";
import ModalAddMaterial from "../../components/ModalAddMaterial";
import ModalAddTeachers from "../../components/ModalAddTeachers";
import MaterialsTeachers from "../MaterialTeachers";
import api from "../../services/api";

import materialImg from "../../assets/materials.svg";
import livroTeacherImg from "../../assets/livros-teachers.svg";

import "./styles.css";

export default function Materials() {
  const register = localStorage.getItem("school@register");
  const [materials, setMaterials] = useState([]);
  const [materialTeachers, setMaterialTeachers] = useState([]);

  const [modalOpenMaterial, setModalOpenMaterial] = useState(false);
  const [modalOpenTeachers, setModalOpenTeachers] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (!register) {
      history.push("/");
      return;
    }
    try {
      api.get("materials").then((response) => {
        setMaterials(response.data);
      });
    } catch (err) {
      alert("Erro ao carregar os dados de professores");
    }
  }, [register, history]);

  const handleTeachers = (id) => {
    const material = materials.filter((teacher) => id === teacher.id);
    setMaterialTeachers(...material);
  };

  const toggleModalMaterial = () => {
    setModalOpenMaterial(!modalOpenMaterial);
  };

  const toggleModalTeachers = () => {
    setModalOpenTeachers(!modalOpenTeachers);
  };

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <ModalAddMaterial
        isOpen={modalOpenMaterial}
        setIsOpen={toggleModalMaterial}
        material={materials}
      />
      {materialTeachers.length === 0 ? (
        <div className="material-container">
          <h1>
            Matérias
            <div className="actions-header">
              <Link className="back-link" to="/dashboard">
                <FiArrowLeft size={16} color="#EC7000" />
              </Link>
              <button
                className="back-link"
                onClick={() => setModalOpenMaterial(true)}
              >
                <FiPlus size={16} color="#EC7000" />
              </button>
            </div>
          </h1>
          <ul>
            {materials.map((material) => (
              <button
                key={material.id}
                onClick={() => handleTeachers(material.id)}
              >
                <li className="card">
                  <img src={materialImg} alt="Materials" />
                  <div>
                    <strong>{material.name}</strong>
                  </div>
                </li>
              </button>
            ))}
          </ul>
        </div>
      ) : (
        <div className="material-container">
          <ModalAddTeachers
            isOpen={modalOpenTeachers}
            setIsOpen={toggleModalTeachers}
            idMaterial={materialTeachers.id}
            materialTeachers={materialTeachers}
          />
          <h1>
            Matérias
            <button
              className="back-link-btn"
              onClick={() => setMaterialTeachers([])}
            >
              <FiArrowLeft size={16} color="#EC7000" />
            </button>
          </h1>
          <div className="teacher-menu">
            <li className="main-material">
              <img src={livroTeacherImg} alt="Material the Teachers" />
              <strong>{materialTeachers.name}</strong>
              <button
                className="btn-include"
                onClick={() => setModalOpenTeachers(true)}
              >
                INCLUIR
              </button>
            </li>
          </div>
          <MaterialsTeachers materialTeachers={materialTeachers} />
        </div>
      )}
    </>
  );
}
