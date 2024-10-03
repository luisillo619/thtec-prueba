// React
import React from 'react';

// Estilos
import styles from './styles.module.scss';

const defaultAvatarUrl = 'https://www.gravatar.com/avatar?d=mp&s=150';

// Componente dashboard que muestra la informacion del usuario buscado Por id
export const UserDashboard = ({ user, userId, handleGoBack }) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles['dashboard__card']}>
        <h2 className={styles['dashboard__title']}>Informacion de usuario N. {userId}</h2>
        <div className={styles['dashboard__info']}>
          <div className={styles['dashboard__avatar']}>
            <img
              src={defaultAvatarUrl}
              alt="Avatar del usuario"
              className={styles['dashboard__avatar-img']}
            />
          </div>
          <div className={styles['dashboard__details']}>
            <p>
              <strong>Nombre:</strong> {user.name}
            </p>
            <p>
              <strong>Apellido Paterno:</strong> {user.lastName}
            </p>
            <p>
              <strong>Apellido Materno:</strong> {user.middleName}
            </p>
            <p>
              <strong>Correo Electronico:</strong> {user.email}
            </p>
            <p>
              <strong>Telefono:</strong> {user.phone}
            </p>
          </div>
        </div>
        <button
          className={styles['dashboard__goBack-button']}
          onClick={handleGoBack}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};
