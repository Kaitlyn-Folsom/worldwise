import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';
import Logo from './Logo';

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to={'/'}>
            <Logo />
          </NavLink>
        </li>
        <li>
          <NavLink to={'product'}>Product</NavLink>
        </li>

        <li>
          <NavLink to={'pricing'}>Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
