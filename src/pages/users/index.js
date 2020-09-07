import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./styles.css";

function Users() {
  let userName = JSON.parse(localStorage.user).nome;
  if (userName.length > 13) {
    userName = userName.substr(0, 13) + "...";
  }

  return (
    <>
      <Header userLogado={false} />
      <div className="users">
        <h1>Quem está assistindo?</h1>
        <ul>
          <li>
            <Link to="/browse">
              <div
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/300x300/?beautiful-human')",
                }}
              ></div>
              {userName}
            </Link>
          </li>
          <li>
            <Link to="/browse">
              <div
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/user/armedshutter/300x300')",
                }}
              ></div>
              Amigo
            </Link>
          </li>
          <li>
            <Link to="/browse">
              <div
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/300x300/?user')",
                }}
              ></div>
              Prima
            </Link>
          </li>
          <li>
            <Link to="/browse">
              <div
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/300x300/?people')",
                }}
              ></div>
              Parente
            </Link>
          </li>
          <li>
            <Link to="/browse">
              <div
                style={{
                  backgroundImage:
                    "url('https://source.unsplash.com/300x300/?netflix')",
                }}
              ></div>
              Vizinho
            </Link>
          </li>
        </ul>
        <button>Gerenciar Perfis</button>
      </div>
    </>
  );
}

export default Users;
