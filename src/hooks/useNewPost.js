import { useState } from "react";

import { getPosts, setNewPost } from "../utils/posts";
import { getUserOnline } from "../utils/users";

export default function useNewPost() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [redirect, setRedirect] = useState("");
  const user = JSON.parse(getUserOnline());

  const handleChangeTitle = ({ target: { value } }) => setTitle(value);

  const handleChangeText = ({ target: { value } }) => setText(value);

  const handleClickSubmitPost = (event) => {
    event.preventDefault();
    const posts = JSON.parse(getPosts());
    const newPost = {
      id: posts.length,
      user: user.name,
      title,
      text,
      likes: 0,
      comments: [],
    };
    setNewPost(newPost);
    setRedirect("/feed");
  };

  const handleClickLike = ({ target: { id } }) => {
    const posts = JSON.parse(getPosts());
    const targetPost = posts.find((post) => post.id === +id);
    const updatedPost = {
      ...targetPost,
      likes: targetPost.likes + 1,
    };
    redirect === "" ? setRedirect("/feed") : setRedirect("");
    posts.splice(+id, 1, updatedPost);
    localStorage.setItem("posts", JSON.stringify(posts));
  };

  return {
    handleChangeText,
    handleChangeTitle,
    handleClickSubmitPost,
    handleClickLike,
    redirect,
  };
}
