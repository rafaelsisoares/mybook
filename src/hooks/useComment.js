import { useState } from "react";
import { getPosts } from "../utils/posts";
import { getUserOnline } from "../utils/users";

export default function useComment() {
  const [comment, setComment] = useState("");
  const [posts, setPosts] = useState(JSON.parse(getPosts()));

  const handleChangeComment = ({ target: { value } }) => setComment(value);

  const handleClickSubmitComment = ({ target: { name } }) => {
    const user = JSON.parse(getUserOnline());
    const newPostsList = [...posts];
    const newComment = {
        user: user.name,
        comment,
    };
    newPostsList[+name].comments.push(newComment);
    setPosts(newPostsList);
    console.log(posts);
    localStorage.setItem("posts", JSON.stringify(posts));
    setComment("");
  };

  return {
    handleClickSubmitComment,
    handleChangeComment,
    comment,
  };
}
