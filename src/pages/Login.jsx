import React, { useContext } from "react";

import MyBookContext from "../context/MyBookContext";

function Login() {
  const { buttonDisabled, setEmail, setPassword, loginValidation } =
    useContext(MyBookContext);

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
    loginValidation();
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
    loginValidation();
  };

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
      <button type="button" disabled={buttonDisabled}>
        Fazer Login
      </button>
      <p>Ou</p>
      <button type="button">Cadastre-se</button>
    </section>
  );
}

export default Login;
