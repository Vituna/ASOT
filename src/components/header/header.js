import Logo from '../logo/logo';

function Header() {

  return (
    <header className="header">
      <div className="container">
          <Logo />
          <img className="header__photo" src="img/header-photo.jpg" alt="Baner" />
      </div>
    </header>
  );
}

export default Header;
