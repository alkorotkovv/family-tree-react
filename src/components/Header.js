import headerLogo from '../images/header-logo.png'

function Header() {

  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={headerLogo} alt="логотип"/>
        <h1 className="header__title">Семейное дерево</h1>
        <button className="header__button">Войти</button>
      </div>
    </header>
  )
}

export default Header;