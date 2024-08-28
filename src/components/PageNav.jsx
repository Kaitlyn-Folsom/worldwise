import { NavLink } from 'react-router-dom';
import styles from './PageNav.module.css';

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/product'}>Product</NavLink>
          <NavLink to={'/pricing'}>Pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
