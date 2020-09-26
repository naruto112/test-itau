import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import api from "../../services/api";

export default function ModalAddMaterial({ isOpen, setIsOpen, material }) {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const [name, setName] = useState("");

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: Math.random(),
      name,
    };
    api.post("materials", data);
    material.push(data);
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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Nome da matéria"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </Modal>
  );
}
