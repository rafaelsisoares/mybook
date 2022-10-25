import { useState, useEffect } from 'react'

import { MIN_NAME_LENGTH, MIN_PASSWORD_LENGTH } from '../utils/constants';
import { setNewUser } from '../utils/users';

export default function useRegistration() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [redirect, setRedirect] = useState('');

  useEffect(() => {
    const validation = () => {
        const validateEmail = /\S+@\S+\.\S+/;
        setButtonDisabled(
            name.length >= MIN_NAME_LENGTH
            && validateEmail.test(email)
            && password.length >= MIN_PASSWORD_LENGTH 
            && confirmPassword.length >= MIN_PASSWORD_LENGTH
        );
    };
    validation();
  }, [name, email, password, confirmPassword]);

  const checkPasswords = () => {
    if (password === confirmPassword) {
        const newUser = {
            name,
            image,
            email,
            password,
        }
        setNewUser(newUser);
        alert('Sua conta foi criada com sucesso!');
        setRedirect('/');
    } else {
        alert('As senhas precisam coincidir.');
    }
  }

  const handleChangeName = ({ target: { value } }) => setName(value);
  const handleChangeImage = ({ target: { value } }) => setImage(value);
  const handleChangeEmail = ({ target: { value } }) => setEmail(value);
  const handleChangePassword = ({ target: { value } }) => setPassword(value);
  const handleChangeConfirmPassword = ({ target: { value } }) => setConfirmPassword(value);

  
  return {
    handleChangeName,
    handleChangeImage,
    handleChangeEmail,
    handleChangePassword,
    handleChangeConfirmPassword,
    checkPasswords,
    buttonDisabled,
    redirect,
  }
}
