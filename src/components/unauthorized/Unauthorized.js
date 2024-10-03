import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.scss'; // Importamos los estilos

export const Unauthorized = () => {
  const history = useHistory();

  return (
    <section className={styles.unauthorized}>
      <div className={styles['unauthorized__content']}>
      <img
  src="/undraw_access_denied_re_awnf.svg"
  alt="Acceso no autorizado"
  className={styles['unauthorized__image']}
/>

        <h1 className={styles['unauthorized__title']}>
          Acceso no autorizado
        </h1>
        <p className={styles['unauthorized__message']}>
          Por favor, inicia sesión con tu cuenta para poder ingresar.
        </p>
        <button
          className={styles['unauthorized__button']}
          onClick={() => history.push('/')}
        >
          Ir al Login
        </button>
      </div>
    </section>
  );
};
