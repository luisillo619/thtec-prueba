// React
import React from "react";

// Componentes
import { Navbar } from "../navBar/NavBar";
import { UserDashboard } from "../user/userDashboard/UserDashboard";

// Hook
import { useForm } from "../../hooks/useForm";

// Estilos
import styles from "./styles.module.scss";

// Funcion para la validacion de un userId valido
const validateForm = (userId) => {
  const errors = {};

  if (userId !== "" && !/^\d+$/.test(userId)) {
    errors.userId = "El ID de usuario solo puede contener números";
  }

  return errors;
};

// Componente formulario para el renderizado de datos dependiendo de un id
export const Form = () => {
  // Hook personalizadoo para la logica del formulario
  const {
    userId,
    formData,
    isLoading,
    userExists,
    userNotFound,
    showDashboard,
    handleChange,
    handleContinue,
    handleGoBack,
    error,
  } = useForm(validateForm);

  if (showDashboard) {
    return (
      <UserDashboard
        user={formData}
        userId={userId}
        handleGoBack={handleGoBack}
      />
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.userForm}>
        <div className={styles["userForm__card"]}>
          <h2 className={styles["userForm__title"]}>Información de Usuario</h2>
          <form className={styles["userForm__form"]}>
            <div className={styles["userForm__input-group"]}>
              <label
                htmlFor="userId"
                className={styles["userForm__input-group-label"]}
              >
                ID Usuario
              </label>
              <input
                id="userId"
                name="userId"
                type="text"
                placeholder="Ingresa el ID del usuario"
                value={userId}
                onChange={handleChange}
                className={styles["userForm__input-group-input"]}
              />
            </div>
            <div className={styles["userForm__input-group"]}>
              <label
                htmlFor="name"
                className={styles["userForm__input-group-label"]}
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                disabled
                className={styles["userForm__input-group-input"]}
              />
            </div>
            <div className={styles["userForm__input-group"]}>
              <label
                htmlFor="lastName"
                className={styles["userForm__input-group-label"]}
              >
                Apellido Paterno
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                disabled
                className={styles["userForm__input-group-input"]}
              />
            </div>
            <div className={styles["userForm__input-group"]}>
              <label
                htmlFor="middleName"
                className={styles["userForm__input-group-label"]}
              >
                Apellido Materno
              </label>
              <input
                id="middleName"
                name="middleName"
                type="text"
                value={formData.middleName}
                disabled
                className={styles["userForm__input-group-input"]}
              />
            </div>
            {isLoading && (
              <p className={styles["userForm__loading-message"]}>
                Cargando información...
              </p>
            )}
            {!isLoading && userExists && (
              <button
                type="button"
                className={styles["userForm__continue-button"]}
                onClick={handleContinue}
              >
                Continuar
              </button>
            )}
            {((!isLoading && userNotFound) || error) && (
              <p className={styles["userForm__error-message"]}>
                {error || `El usuario con id N.${userId} no existe`}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
