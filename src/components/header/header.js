import Logo from '../logo/logo';
import Nav from '../nav/nav';

function Header() {

  return (
    <header className='header'>
      <section>
        <div className='menu'>
          <Logo />
          <Nav />
        </div>
        <img className="header__photo" src="img/header-photo.jpg" alt="Baner" />
        <h3>Мы делаем мир <br/> безопаснее</h3>
        <p>
          Предлагаем комплексные решения в сфере систем безопасности<br/> и объединяем специалистов с опытом более десяти лет.
        </p>
      </section>
    </header>
  );
}

export default Header;
