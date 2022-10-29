import React from "react";
import { Redirect } from "react-router-dom";

import Header from "../components/Header";
import useNewPost from "../hooks/useNewPost";

export default function NewPost() {
  const {
    handleChangeTitle,
    handleChangeText,
    handleClickSubmitPost,
    redirect,
  } = useNewPost();

  if (redirect.length > 0) return <Redirect to={redirect} />;
  return (
    <section>
      <Header />
      <h1 className="space"> </h1>
      <h3>Criar nova postagem</h3>
      <hr />
      <form onSubmit={handleClickSubmitPost}>
        <input type="text" placeholder="Titulo da postagem" onChange={handleChangeTitle}/>
        <textarea placeholder="Texto da postagem" onChange={handleChangeText}/>
        <button type="submit">Postar</button>
      </form>
    </section>
  );
}
