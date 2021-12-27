import { Link } from 'react-router-dom';

import styles from "./styles.module.css";

function Header() {
  return (
    <header>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/cart"><li>cart</li></Link>
        <Link to="/authentication"><li>login/signup</li></Link>
      </ul>
    </header>
  );
}

export default Header;
