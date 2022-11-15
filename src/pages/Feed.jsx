import React from "react";
import { Redirect } from "react-router-dom";
import { FaThumbsUp } from "react-icons/fa";

import Header from "../components/Header";
import Comments from "../components/Comments";
import useNewPost from "../hooks/useNewPost";
import useComment from "../hooks/useComment";
import { getPosts } from "../utils/posts";
import { getUserOnline } from "../utils/users";
import "../styles/Feed.css";

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
      {posts.map(({ user, title, text, likes, id, comments }) => (
        <div key={id} className="post-container">
          <strong>{user}</strong>
          <hr />
          <h3 className="post-title">{title}</h3>
          <p className="post-content">{text}</p>
          <button
            type="button"
            id={id}
            onClick={handleClickLike}
            className="btn-like"
          >
            <FaThumbsUp /> {`${likes}`}
          </button>
          <hr />
          <div>
            <textarea
              placeholder="Deixe seu comentário"
              onChange={handleChangeComment}
              className="input-comment"
            />
            <button
              type="button"
              name={id}
              onClick={handleClickSubmitComment}
              className="btn-comment"
            >
              Comentar
            </button>
          </div>
          {comments.length > 0 && (
            <div>
              <p className="comment-title">Comentários:</p>
              <Comments comments={comments} />
            </div>
          )}
        </div>
      ))}
      <div className="btn-new-post">
        <button
          type="button"
          onClick={() => history.push("/new-post")}
        >
          Nova Postagem
        </button>
      </div>
    </section>
  );
}
