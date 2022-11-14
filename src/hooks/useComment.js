import { useState } from "react";
import { getPosts } from "../utils/posts";
import { getUserOnline } from "../utils/users";

export default function useComment() {
  const [comment, setComment] = useState("");

  const handleChangeComment = ({ target: { value } }) => setComment(value);

  const handleClickSubmitComment = ({ target: { name } }) => {
    if (comment.length > 0) {
      const posts = JSON.parse(getPosts());
      const user = JSON.parse(getUserOnline());
      const targetPost = posts.find((post) => post.id === +name);
      const newComment = {
        user: user.name,
        comment,
      };
      const updatedPost = {
        ...targetPost,
        comments: [...targetPost.comments, newComment],
      };
      posts.splice(+name, 1, updatedPost);
      console.log(posts);
      localStorage.setItem("posts", JSON.stringify(posts));
      setComment("");
    }
  };

  return {
    handleClickSubmitComment,
    handleChangeComment,
    comment,
  };
}
