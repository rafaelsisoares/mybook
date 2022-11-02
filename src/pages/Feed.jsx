import React from "react";
import { Redirect } from "react-router-dom";

import Header from "../components/Header";
import useNewPost from "../hooks/useNewPost";
import { getPosts } from "../utils/posts";
import { getUserOnline } from "../utils/users";

export default function Feed({ history }) {
  const userOnline = JSON.parse(getUserOnline());
  const posts = JSON.parse(getPosts());
  const { handleClickLike } = useNewPost();
  console.log('rendering posts');
  if (Object.keys(userOnline).length === 0) return <Redirect to="/" />;
  return (
    <section>
      <Header history={history} />
      <h1 className="space"> </h1>
      {posts.map(({ user, title, text, likes, id }) => (
        <div key={id} className="post-container">
          <strong>{user}</strong>
          <br />
          <h4>{title}</h4>
          <p>{text}</p>
          <button type="button" id={id} onClick={handleClickLike}>
            Gostei
          </button>
          <p>{likes}</p>
        </div>
      ))}
      <button type="button" onClick={() => history.push("/new-post")}>
        Nova Postagem
      </button>
    </section>
  );
}
