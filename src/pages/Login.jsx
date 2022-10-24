import React from "react";
import { Redirect } from "react-router-dom";

import useLogin from "../hooks/useLogin";
import "../styles/Login.css";

function Login() {
  const {
    handleChangeEmail,
    handleChangePassword,
    handleClickLogin,
    handleClickRegistration,
    redirect,
    buttonDisabled,
  } = useLogin();
  if (redirect.length > 0) return (<Redirect to={ redirect } />);
    return (
    <section className="login-container">
      <input
        type="email"
        name="email"
        placeholder="Digite seu e-mail"
        onChange={handleChangeEmail}
      />
      <input
        type="password"
        name="password"
        placeholder="Digite sua senha"
        onChange={handleChangePassword}
      />
      <button
        type="button"
        disabled={!buttonDisabled}
        onClick={handleClickLogin}
        className="btn-login"
      >
        Fazer Login
      </button>
      <p>Ou</p>
      <button
        type="button"
        onClick={handleClickRegistration}
        className="btn-registration"
      >
        Cadastre-se
      </button>
    </section>
  );
}

export default Login;
