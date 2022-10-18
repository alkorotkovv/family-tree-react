import React from 'react';
import { Link } from 'react-router-dom';
import FormAuth from './FormAuth';

function Login(props) {

  return (
    <main className="content">
      <FormAuth 
        title="Вход" 
        buttonText="Войти"
        onSubmit={props.onLogin}
      />
      <Link to="/sign-up" className="form__question">Еще не зарегистрированы? Регистрация</Link>
    </main>
  )
}

export default Login;