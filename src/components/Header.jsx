import React from "react";
import { getUserOnline } from "../utils/users";

export default function Header() {
  const userOnline = JSON.parse(getUserOnline());
  const { name, image } = userOnline;
  console.log(image);
  return (
    <header>
      <div>
        <h4>MyBook</h4>
      </div>
      <div>
        <img src={image} alt={`Imagem de ${name}`} />
        <p>{name}</p>
        <button type="button">Sair</button>
      </div>
    </header>
  );
}
