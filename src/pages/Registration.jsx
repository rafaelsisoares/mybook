import React from "react";
import { Redirect } from "react-router-dom";

import useRegistration from "../hooks/useRegistration";

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

  if (redirect.length > 0) return (<Redirect to={redirect} />);
  return (
    <section>
      <h3>Bem vindo(a) ao</h3>
      <img src="" alt="" />
      <strong>Vamos criar a sua conta</strong>
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleChangeName}
          />
        </label>
        <label htmlFor="image">
          Imagem:
          <input
            type="text"
            name="image"
            placeholder="Use uma imagem de qualquer rede social"
            onChange={handleChangeImage}
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={handleChangeEmail}
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
            onChange={handleChangePassword}
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirme a senha:
          <input
            type="password"
            name="confirmPassword"
            placeholder="Digite novamente sua senha"
            onChange={handleChangeConfirmPassword}
          />
        </label>
        <button
          type="button"
          disabled={!buttonDisabled}
          onClick={checkPasswords}
        >
          Criar Conta
        </button>
      </form>
    </section>
  );
}
