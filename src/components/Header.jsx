import React from "react";

import { getUserOnline } from "../utils/users";
import "../styles/Header.css";

export default function Header({ history }) {
  const userOnline = JSON.parse(getUserOnline());
  const { name } = userOnline;
  return (
    <header className="header-container">
      <div className="logo">
        <h4>MyBook</h4>
      </div>
      <div className="user-div">
        <p>{name}</p>
        <button
          type="button"
          onClick={() => history.push("/")}
          className="btn-logout"
        >
          Sair
        </button>
      </div>
    </header>
  );
}
