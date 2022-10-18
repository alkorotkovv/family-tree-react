import { Link, useLocation } from 'react-router-dom';
import headerLogo from '../images/header-logo.png'

function Header(props) {

  const location = useLocation();
  let block;

  function handleClick() {
    props.onExit();
  }

  switch (location.pathname) {
    case "/sign-in":
      block = (
        <Link to="/sign-up" className="header__button">Регистрация</Link>
      )
      break;
    case "/sign-up":

      block = (
        <Link to="/sign-in" className="header__button">Войти</Link>
      )
      break;
    case "/":
      block = (
        <button className="header__button" onClick={handleClick}>Выйти</button>
      )
      break;
  }

  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={headerLogo} alt="логотип"/>
        <h1 className="header__title">Семейное дерево</h1>
        {block}
      </div>
    </header>
  )
}

export default Header;