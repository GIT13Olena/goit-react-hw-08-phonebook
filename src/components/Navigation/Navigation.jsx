import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isAuth } from 'redux/auth/authSelectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

import styles from './Navigation.module.css';

function Navigation() {
  const isLogin = useSelector(isAuth);

  return (
    <div className={styles['header-navigation']}>
      <nav className={styles['nav-page']}>
        <NavLink to="/home" className={styles['link-page']}>
          Нome
        </NavLink>
        {isLogin && (
          <NavLink to="/contacts" className={styles['link-page']}>
            Contacts
          </NavLink>
        )}
      </nav>

      {isLogin ? <UserMenu /> : <AuthNav />}
    </div>
  );
}

export default Navigation;
