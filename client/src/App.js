import "./App.css"; 
import React, { useState } from "react";
import Axios from "axios";

function App() {
  const [values, setValues] = useState();
  
  const handleClickButton = () => {
    Axios.post("http://localhost:3001/cadastrar", {
      name: values.usuario,
      email: values.email,
      pass: values.senha
    }).then((res) => res.data).then(res => {
      console.log(res)
    })
  }

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sistema de Cadastro</h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </header>
      <main className="App-main">
        <h1>Cadastro</h1>
        <div  className="form-input">
          <input
            type="text"
            name="usuario"
            placeholder="Nome de Usuário:"
            id="nome-usuario"
            onChange={handleChangeValues}
            required
          ></input>
          <input
            type="email"
            name="email"
            onChange={handleChangeValues}
            placeholder="E-mail:"
            id="email"
            required
          ></input>
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            id="senha"
            onChange={handleChangeValues}
            required
          ></input>
          <input onClick={() => handleClickButton()} type="submit" value="Cadastrar"></input>
        </div>
      </main>
      <footer className="App-footer">
        <ul>
          <li>
            <span>&copy; 2023 - Prince</span>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
