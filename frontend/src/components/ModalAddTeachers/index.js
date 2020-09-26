import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import "./styles.css";

import api from "../../services/api";

export default function ModalAddTeachers({
  isOpen,
  setIsOpen,
  idMaterial,
  materialTeachers,
}) {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const [select, setSelect] = useState("");
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    setModalStatus(isOpen);
    api.get("teachers").then((response) => {
      setTeachers(response.data);
    });
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    materialTeachers.teachers.push({ id: select.id, name: select.name });

    const data = {
      id: idMaterial,
      teachers: materialTeachers.teachers,
    };
    api.put("materials", data);
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
          <select
            defaultValue={select}
            onChange={(e) =>
              setSelect({
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
              })
            }
          >
            <option>Selecione o professor</option>
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id} name={teacher.name}>
                {teacher.name}
              </option>
            ))}
          </select>
          <button className="button" type="submit">
            Incluir
          </button>
        </form>
      </div>
    </Modal>
  );
}
