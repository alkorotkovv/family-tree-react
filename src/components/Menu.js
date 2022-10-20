import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Menu(props) {

  const location = useLocation();
  let block;

  function handleClick(evt) {
    if (evt.target.classList.contains('menu_visible'))
      props.onClose();
  }

  function handleExitClick() {
    props.onClose();
    props.onExit();
  }

  switch (location.pathname) {
    case "/sign-in":
      block = (
        <Link to="/sign-up" className="menu__item menu__item_type_button" onClick={props.onClose} title="Зарегистрироваться">Регистрация</Link>
      )
      break;
    case "/sign-up":

      block = (
        <Link to="/sign-in" className="menu__item menu__item_type_button" onClick={props.onClose} title="Войти">Войти</Link>
      )
      break;
    case "/":
      block = (
        <button className="menu__item menu__item_type_button" onClick={handleExitClick} title="Выйти">Выйти</button>
      )
      break;
  }

  return (
    <div className={"menu" + (props.isOpen ? " menu_visible" : "")} onClick={handleClick} >
      <ul className={"menu__items" + (props.isOpen ? " menu__items_visible" : "")}>
        <li><p className="menu__item" >randomemail@mail.ru</p></li>
        <li>{block}</li>
      </ul>
    </div>
  )
}

export default Menu;