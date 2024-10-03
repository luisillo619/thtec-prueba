// React
import React from 'react';
import { useHistory } from 'react-router-dom';

// Estilos
import styles from './style.module.scss'; 

// Componente que renderiza una pagina inexistene en la aplicacion (404)
export const Error404 = () => {
  const history = useHistory();

  return (
    <section className={styles.error404}>
      <div className={styles['error404__content']}>
        <img
          src={"/undraw_page_not_found_re_e9o6.svg"}
          alt="Página no encontrada"
          className={styles['error404__image']}
        />
        <h1 className={styles['error404__title']}>
          ¡Ups! Página no encontrada
        </h1>
        <p className={styles['error404__message']}>
          Lo sentimos, pero la página que buscas no existe o ha sido movida.
        </p>
        <button
          className={styles['error404__button']}
          onClick={() => history.push('/')}
        >
          Ir al Login
        </button>
      </div>
    </section>
  );
};
