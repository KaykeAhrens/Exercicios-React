import React from "react";

function StudentCard({ student, onAlert }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p>Idade: {student.age}</p>
      <p>Cidade: {student.city}</p>
      <p>Curso: {student.course}</p>
      <button onClick={() => onAlert(student.name)}>Exibir Alerta</button>
    </div>
  );
}

export default StudentCard;
