import { useState, useEffect } from "react";

import { MIN_PASSWORD_LENGTH } from "../utils/constants";
import { resetUserOnline, getUsers, setUserOnline } from "../utils/users";
import { getPosts } from "../utils/posts";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [redirect, setRedirect] = useState('');

  useEffect(() => {
    resetUserOnline();
    const users = JSON.parse(getUsers());
    const posts = JSON.parse(getPosts());
    (users === null) && localStorage.setItem('users', JSON.stringify([]));
    (posts === null) && localStorage.setItem('posts', JSON.stringify([]));
  }, []);

  useEffect(() => {
    const loginValidation = () => {
      const validateEmail = /\S+@\S+\.\S+/;
      setButtonDisabled(validateEmail.test(email) && password.length >= MIN_PASSWORD_LENGTH);
    }
    loginValidation();
  }, [email, password])

  const handleChangeEmail = ({ target }) => setEmail(target.value);

  const handleChangePassword = ({ target }) => setPassword(target.value);

  const handleClickLogin = () => {
    const users = JSON.parse(getUsers());
    if (
      users.some((user) => user.email === email && user.password === password)
    ) {
      setUserOnline(email, password);
      setRedirect('/feed');
    } else {
      alert("E-mail e/ou senha incorretos");
    }
  };

  const handleClickRegistration = () => setRedirect('/registration');

  return {
    buttonDisabled,
    handleChangeEmail,
    handleChangePassword,
    handleClickLogin,
    handleClickRegistration,
    redirect,
  };
}
