import React, { useState, useEffect } from "react";

import "./styles.css";

import Logo from "../../assets/logo.png";
import Background from "../../assets/background-login.jpg";

import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  const [error, setError] = useState(false);
  const user = localStorage.user ? JSON.parse(localStorage.user) : false;

  useEffect(() => {
    if (user) {
      history.push("/users");
    }
  });

  function validarLogin(event) {
    event.preventDefault();

    const nome = document.querySelector("input").value;
    if (nome.length < 3) return setError(true);

    const dados = {
      nome,
    };

    localStorage.user = JSON.stringify(dados);
    history.push("/users");
    return setError(false);
  }

  return (
    <>
      <div className="login--bg">
        <img src={Background} alt="background" />
      </div>
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      {error && <div className="">Deu erro!</div>}
      <div className="login--menu">
        <div className="login--content">
          <form onSubmit={validarLogin}>
            <h1>Entrar</h1>
            <div className="inputText">
              <input
                type="text"
                name="userLogin"
                id="userLogin"
                placeholder=" "
              />
              <label htmlFor="userLogin">Digite o seu nome</label>
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
      <div className="rodape">
        <span>Dúvidas? Ligue 0800-000-0000</span>
      </div>
    </>
  );
}

export default Login;
