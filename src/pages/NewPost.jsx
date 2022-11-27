import React from "react";
import { Redirect } from "react-router-dom";

import Header from "../components/Header";
import useNewPost from "../hooks/useNewPost";
import { getUserOnline } from "../utils/users"
import "../styles/NewPost.css";

export default function NewPost({ history }) {
  const {
    handleChangeTitle,
    handleChangeText,
    handleClickSubmitPost,
    redirect,
  } = useNewPost();

  const userOnline = JSON.parse(getUserOnline());

  if (Object.keys(userOnline).length === 0) return <Redirect to="/" />;
  if (redirect.length > 0) return <Redirect to={redirect} />;
  return (
    <section>
      <Header history={ history } />
      <h1 className="space"> </h1>
      <h3 className="page-title">Criar nova postagem</h3>
      <hr />
      <form onSubmit={handleClickSubmitPost} className="form-container">
        <input
          type="text"
          className="title-post"
          placeholder="Titulo da postagem"
          onChange={handleChangeTitle}
        />
        <textarea
          placeholder="Texto da postagem"
          onChange={handleChangeText}
          className="content-post"
        />
        <button type="submit" className="btn-submit-post">Postar</button>
      </form>
    </section>
  );
}
