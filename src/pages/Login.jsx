import React from 'react'

function Login() {
  return (
    <section>
        <input type='email' name="email" placeholder='Digite seu e-mail'/>
        <input type='password' name="password" placeholder='Digite sua senha' />
        <button type="button">Fazer Login</button>
    </section>
  )
}

export default Login;
