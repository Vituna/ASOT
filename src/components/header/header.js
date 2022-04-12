import Logo from '../logo/logo';
import Nav from '../nav/nav';

function Header() {

  return (
    <header className='header'>
      <div>
        <section className='menu'>
          <Logo />
          <Nav />
        </section>
        <img className="header__photo" src="img/header-photo.jpg" alt="Baner" />
      </div>
    </header>
  );
}

export default Header;
