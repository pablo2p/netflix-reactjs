import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import UserPhoto from "../../assets/user.png";
import "./styles.css";

function Header({ black, userLogado }) {
  const user = localStorage.user ? JSON.parse(localStorage.user) : false;

  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <Link to="/browse">
          <img src={Logo} alt="netflix" />
        </Link>
        {userLogado && (
          <ul>
            <li>
              <Link to="/browse">Início</Link>
            </li>
            <li>
              <Link to="/browse">Séries</Link>
            </li>
            <li>
              <Link to="/browse">Filmes</Link>
            </li>
            <li>
              <Link to="/browse">Mais recentes</Link>
            </li>
            <li>
              <Link to="/browse">Minha lista</Link>
            </li>
          </ul>
        )}
      </div>
      {userLogado && user && (
        <div className="header--user">
          <Link to="/">
            <img src={UserPhoto} alt="usuário" />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
