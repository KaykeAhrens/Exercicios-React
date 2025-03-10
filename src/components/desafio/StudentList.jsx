import React, { useState } from "react";
import StudentCard from "./StudentCard";

function StudentList() {
  // Estado para a lista de alunos
  const [students, setStudents] = useState([]);

  // Estado para os campos de cadastro
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");

  // Função para adicionar um novo aluno à lista
  const addStudent = () => {
    const newStudent = { name, age, city, course };
    setStudents([...students, newStudent]);
    setName("");
    setAge("");
    setCity("");
    setCourse("");
  };

  // Função para exibir um alerta com o nome do aluno
  const handleAlert = (name) => {
    alert(`O aluno selecionado é: ${name}`);
  };

  return (
    <div className="student-list">
      <h2>Cadastro de Alunos</h2>

      {/* Formulário para cadastro */}
      <div className="form">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Idade"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Curso"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <button className="button-add" onClick={addStudent}>
          Adicionar Aluno
        </button>
      </div>

      <h3>Lista de Alunos</h3>
      <div className="student-cards">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} onAlert={handleAlert} />
        ))}
      </div>
    </div>
  );
}

export default StudentList;
