import React from 'react';
import styles from './styles.module.scss';

const defaultAvatarUrl = 'https://www.gravatar.com/avatar?d=mp&s=150';

export const UserDashboard = ({ user, userId, handleLogout }) => {
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
              <strong>ID Usuario:</strong> {userId}
            </p>
            <p>
              <strong>Nombre:</strong> {user.nombre}
            </p>
            <p>
              <strong>Apellido Paterno:</strong> {user.apellidoPaterno}
            </p>
            <p>
              <strong>Apellido Materno:</strong> {user.apellidoMaterno}
            </p>
          </div>
        </div>
        <button
          className={styles['dashboard__goBack-button']}
          onClick={handleLogout}
        >
          Regresar
        </button>
      </div>
    </div>
  );
};
