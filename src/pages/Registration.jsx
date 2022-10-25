import React from "react";

export default function Registration() {
  return (
    <section>
      <h3>Bem vindo(a) ao</h3>
      <img src="" alt="" />
      <strong>Vamos criar a sua conta</strong>
      <form>
        <label htmlFor="name">
          Nome:
          <input type="text" name="name" placeholder="Digite seu nome" />
        </label>
        <label htmlFor="image">
          Imagem:
          <input
            type="text"
            name="image"
            placeholder="Use uma imagem de qualquer rede social"
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input type="email" name="email" placeholder="Digite seu e-mail" />
        </label>
        <label htmlFor="password">
          Senha:
          <input type="password" name="password" placeholder="Digite sua senha" />
        </label>
        <label htmlFor="confirmPassword">
          Confirme a senha:
          <input
            type="password"
            name="confirmPassword"
            placeholder="Digite novamente sua senha"
          />
        </label>
        <button type="button">Criar Conta</button>
      </form>
    </section>
  );
}
