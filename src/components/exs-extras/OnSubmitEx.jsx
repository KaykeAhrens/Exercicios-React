import React, { useState } from "react";

function OnSubmitEx() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Função que lida com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário
    alert(`Nome: ${name}\nEmail: ${email}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button className="button-submit" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default OnSubmitEx;
