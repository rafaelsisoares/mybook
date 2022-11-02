import { useState } from 'react';

import { getPosts, setNewPost } from '../utils/posts';
import { getUserOnline } from '../utils/users';

export default function useNewPost() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [posts, setPosts] = useState(JSON.parse(getPosts()));
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
    const newPostsList = [...posts];
    newPostsList[+id].likes += 1;
    setPosts(newPostsList);
    localStorage.setItem('posts', JSON.stringify(posts));
  };

  return {
    handleChangeText,
    handleChangeTitle,
    handleClickSubmitPost,
    handleClickLike,
    redirect,
  };
}
