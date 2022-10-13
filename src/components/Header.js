import headerLogo from '../images/header-logo.png'

function Header() {

  return (
    <header class="header">
      <div class="header__container">
        <img class="header__logo" src={headerLogo} alt="логотип"/>
        <h1 class="header__title">Семейное дерево</h1>
        <button class="header__button">Войти</button>
      </div>
    </header>
  )
}

export default Header;