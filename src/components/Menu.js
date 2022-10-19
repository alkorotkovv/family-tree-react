import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Menu(props) {

  const location = useLocation();
  let block;

  function handleExitClick() {
    //props.onOpenMenu();
    console.log("Нажали выйти");
  }

  function handleClick(evt) {
    if (evt.target.classList.contains('menu_visible'))
    props.onClose();
  }

  switch (location.pathname) {
    case "/sign-in":
      block = (
        <Link to="/sign-up" className="menu__item" title="Зарегистрироваться">Регистрация</Link>
      )
      break;
    case "/sign-up":

      block = (
        <Link to="/sign-in" className="menu__item" title="Войти">Войти</Link>
      )
      break;
    case "/":
      block = (
        <button className="menu__item" onClick={handleExitClick} title="Выйти">Выйти</button>
      )
      break;
  }

  return (
    <div className={"menu" + (props.isOpen ? " menu_visible" : "")} onClick={handleClick} >
      <ul className="menu__items">
        <li><p className="menu__item" >randomemail@mail.ru</p></li>
        <li>{block}</li>
      </ul>
    </div>
  )
}

export default Menu;