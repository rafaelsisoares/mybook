import { useState } from 'react';

import { getPosts, setNewPost } from '../utils/posts';
import { getUserOnline } from '../utils/users';

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
    };
    setNewPost(newPost);
    setRedirect("/feed");
  }
  return {
    handleChangeText,
    handleChangeTitle,
    handleClickSubmitPost,
    redirect
  };
}
