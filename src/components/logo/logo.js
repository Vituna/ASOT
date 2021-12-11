import { Link } from 'react-router-dom';

function Logo() {

  return (
    <Link to="/">
      <img className="header__logo" src="img/logo.jpg" width="100px" height="55.97px" alt="asot logo" />
    </Link>
  );
}

export default Logo;
