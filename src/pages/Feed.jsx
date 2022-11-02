import React from "react";
import { Redirect } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";

import Header from "../components/Header";
import useNewPost from "../hooks/useNewPost";
import useComment from "../hooks/useComment";
import { getPosts } from "../utils/posts";
import { getUserOnline } from "../utils/users";

export default function Feed({ history }) {
  const userOnline = JSON.parse(getUserOnline());
  const posts = JSON.parse(getPosts());
  const { handleClickLike } = useNewPost();
  const { handleChangeComment, handleClickSubmitComment } = useComment();
  console.log("rendering posts");
  if (Object.keys(userOnline).length === 0) return <Redirect to="/" />;
  return (
    <section>
      <Header history={history} />
      <h1 className="space"> </h1>
      {posts.map(({ user, title, text, likes, id }) => (
        <div key={id} className="post-container">
          <strong>{user}</strong>
          <br />
          <h3>{title}</h3>
          <p>{text}</p>
          <button type="button" id={id} onClick={handleClickLike}>
            <FaThumbsUp /> {`${likes}`}
          </button>
          <div>
            <textarea
              placeholder="Deixe seu comentário"
              onChange={handleChangeComment}
            />
            <button type="button" name={id} onClick={handleClickSubmitComment}>
              Comentar
            </button>
          </div>
        </div>
      ))}
      <button type="button" onClick={() => history.push("/new-post")}>
        Nova Postagem
      </button>
    </section>
  );
}
