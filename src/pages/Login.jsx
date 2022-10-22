import React, { useContext, useEffect } from "react";

import MyBookContext from "../context/MyBookContext";
import { resetUserOnline } from "../utils/users";

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

  const handleClickLogin = () => history.push("/feed");

  const handleClickRegistration = () => history.push('/registration');

  return (
    <section>
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
      <button type="button" disabled={buttonDisabled} onClick={handleClickLogin}>
        Fazer Login
      </button>
      <p>Ou</p>
      <button type="button" onClick={handleClickRegistration}>Cadastre-se</button>
    </section>
  );
}

export default Login;
