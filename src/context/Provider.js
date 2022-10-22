import React, { useState } from "react";

import {
  EMAIL_VERIFICATION_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "../utils/constants";
import MyBookContext from "./MyBookContext";

export default function Provider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const loginValidation = () => {
    const emailVerification = email.split("@");
    if (
      emailVerification.length === EMAIL_VERIFICATION_LENGTH &&
      emailVerification[1].includes(".com") &&
      password.length >= MIN_PASSWORD_LENGTH
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const contextValue = {
    setEmail,
    setPassword,
    buttonDisabled,
    loginValidation,
    email,
    password,
  };
  return (
    <MyBookContext.Provider value={contextValue}>
      {children}
    </MyBookContext.Provider>
  );
}
