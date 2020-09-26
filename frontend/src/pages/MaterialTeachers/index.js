import React from "react";

import fessorImg from "../../assets/fessor.svg";

export default function MaterialTeachers({ materialTeachers }) {
  return (
    <div className="material-container">
      <ul>
        {materialTeachers.teachers.map((materialTeacher) => (
          <li className="card" key={materialTeacher.id}>
            <img src={fessorImg} alt="Materials" />
            <div>
              <strong>{materialTeacher.name}</strong>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
