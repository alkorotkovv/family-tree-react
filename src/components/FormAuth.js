import React from 'react';
import useInput from '../utils/hooks/useInput';

function FormAuth(props) {

  const inputEmail = useInput();
  const inputPasswod = useInput();

  console.log(inputEmail)

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(inputEmail.value, inputPasswod.value);
  }

  return (
    <form className="form form_type_login" name="form_login" onSubmit={handleSubmit} noValidate>
      <h2 className="form__title form__title_type_login">{props.title}</h2>
      <fieldset className="form__info">
        <label className="form__field">
          <input 
            className={"form__input form__input_content_email" + (inputEmail.isValid ? "" : " form__input_type_error") }
            id="input-email" 
            name="email" 
            type="email" 
            autoComplete="email" 
            value={inputEmail.value} 
            onChange={inputEmail.handleChange}             
            placeholder="Email" 
            required 
            minLength="2" 
            maxLength="40"/>
          <span className="form__input-error form__input-error_type_login input-email-error" >{inputEmail.message}</span>
        </label>
        <label className="form__field">
          <input 
            className={"form__input form__input_content_password" + (inputPasswod.isValid ? "" : " form__input_type_error")}
            id="input-password" 
            name="password" 
            type="password" 
            autoComplete="current-password" 
            value={inputPasswod.value} 
            onChange={inputPasswod.handleChange}             
            placeholder="Пароль" 
            required 
            minLength="2" 
            maxLength="20"/>
          <span className="form__input-error form__input-error_type_login input-password-error" >{inputPasswod.message}</span>
        </label>
      </fieldset>
      <button 
        className={"form__save-button form__save-button_type_login" + (inputEmail.isValid && inputPasswod.isValid ? "" : " form__save-button_disabled" )} 
        type="submit" 
        disabled={!inputEmail.isValid || !inputPasswod.isValid}
        >
          {props.buttonText}
      </button>      
    </form>
  )
}

export default FormAuth;