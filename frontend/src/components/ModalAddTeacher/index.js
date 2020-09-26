import React, { useState, useEffect } from "react";

import Modal from "react-modal";

import "./styles.css";

import api from "../../services/api";

export default function ModalAddTeacher({ isOpen, setIsOpen, teacher }) {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: Math.random(),
      name,
      age,
    };
    api.post("teachers", data);
    teacher.push(data);
    setIsOpen(!isOpen);
  };

  return (
    <Modal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          background: "#F0F0F5",
          color: "#000000",
          borderRadius: "8px",
          width: "500px",
          border: "none",
        },
        overlay: {
          backgroundColor: "#121214e6",
        },
      }}
    >
      <div className="form-teacher">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nome do professor"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Idade"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </Modal>
  );
}
