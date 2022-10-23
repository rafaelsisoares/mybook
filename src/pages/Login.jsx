import React, { useContext, useEffect } from "react";

import MyBookContext from "../context/MyBookContext";
import { resetUserOnline, getUsers, setUserOnline } from "../utils/users";
import "../styles/Login.css";

function Login({ history }) {
  const {
    buttonDisabled,
    setEmail,
    setPassword,
    loginValidation,
    email,
    password,
  } = useContext(MyBookContext);

  useEffect(() => {
    resetUserOnline();
  }, []);

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
    loginValidation();
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
    loginValidation();
  };

  const handleClickLogin = () => {
    const users = getUsers();
    if (
      users.some((user) => users.email === email && user.password === password)
    ) {
      setUserOnline(email, password);
      history.push("/feed");
    } else {
      alert("E-mail e/ou senha incorretos");
    }
  };

  const handleClickRegistration = () => history.push("/registration");

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
        disabled={buttonDisabled}
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
