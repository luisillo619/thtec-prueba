import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.scss';

export const Navbar = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear('token');
    history.push('/');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar__container']}>
        <button
          className={styles['navbar__logout-button']}
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};
