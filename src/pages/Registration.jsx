import React from "react";
import { Redirect } from "react-router-dom";

import useRegistration from "../hooks/useRegistration";
import "../styles/Registration.css";

export default function Registration() {
  const {
    handleChangeName,
    handleChangeImage,
    handleChangeEmail,
    handleChangeConfirmPassword,
    handleChangePassword,
    buttonDisabled,
    checkPasswords,
    redirect,
  } = useRegistration();

  if (redirect.length > 0) return <Redirect to={redirect} />;
  return (
    <section className="registration-container">
      <h3>Bem vindo(a) ao</h3>
      <img src="" alt="" />
      <strong>Vamos criar a sua conta</strong>
      <hr />
      <input
        type="text"
        name="name"
        placeholder="Digite seu nome"
        onChange={handleChangeName}
      />
      <input
        type="text"
        name="image"
        placeholder="Use uma imagem de qualquer rede social"
        onChange={handleChangeImage}
      />
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
      <input
        type="password"
        name="confirmPassword"
        placeholder="Digite novamente sua senha"
        onChange={handleChangeConfirmPassword}
      />
      <button
        type="button"
        disabled={!buttonDisabled}
        onClick={checkPasswords}
        className="btn-new-user"
      >
        Criar Conta
      </button>
    </section>
  );
}
