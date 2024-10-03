// React
import React from "react";

// Hook
import { useLogin } from "../../hooks/useLogin";

// Estilos
import styles from "./styles.module.scss";

// Estado inicial de la variable de estado
const INITIAL_STATE = {
  username: "",
  password: "",
};

// Funcion para la validacion de las credenciales
const validateLogin = (formLogin) => {
  const errors = {};

  // Validar nombre de usuario
  if (!formLogin.username || formLogin.username.trim() === "") {
    errors.username = "Por favor, ingresa tu nombre de usuario";
  } else if (formLogin.username.length < 3 || formLogin.username.length > 20) {
    errors.username = "El nombre de usuario debe tener entre 3 y 20 caracteres";
  } else if (!/^[A-Za-z0-9]+$/.test(formLogin.username)) {
    errors.username =
      "El nombre de usuario solo puede contener letras y números";
  }

  // Validar contraseña
  if (!formLogin.password || formLogin.password.trim() === "") {
    errors.password = "Por favor, ingresa tu contraseña";
  } else if (formLogin.password.length < 5) {
    errors.password = "La contraseña debe tener al menos 5 caracteres";
  }

  return errors;
};

// Componente acceder al sistema mediente un logeo
export const Login = () => {
  // Hook personalizadoo para la logica del Login
  const {
    form,
    handleChange,
    handleSubmit,
    showPassword,
    setShowPassword,
    shake,
    attempts,
    isLoading,
  } = useLogin(INITIAL_STATE, validateLogin);

  return (
    <>
      <div className={styles.login}>
        <div
          className={`${styles["login__card"]} ${
            shake ? styles["login__card--shake"] : ""
          }`}
        >
          <h2 className={styles["login__title"]}>Iniciar Sesión</h2>
          <form className={styles["login__form"]} onSubmit={handleSubmit}>
            <div className={styles["login__input-group"]}>
              <label
                htmlFor="username"
                className={styles["login__input-group-label"]}
              >
                Usuario
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Ingresa tu usuario"
                value={form.username}
                onChange={handleChange}
                className={styles["login__input-group-input"]}
              />
            </div>
            <div className={styles["login__input-group"]}>
              <label
                htmlFor="password"
                className={styles["login__input-group-label"]}
              >
                Contraseña
              </label>
              <div className={styles["login__password"]}>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  value={form.password}
                  onChange={handleChange}
                  className={styles["login__password-input"]}
                />
                <button
                  type="button"
                  className={styles["login__password-toggle"]}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      className={styles["login__password-icon"]}
                      viewBox="0 0 24 24"
                    >
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg
                      className={styles["login__password-icon"]}
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029" />
                      <path d="M9.878 9.878l4.242 4.242" />
                      <path d="M3 3l18 18" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className={styles["login__button"]}
              disabled={attempts >= 3 || isLoading}
            >
              {isLoading ? (
                <span className={styles["login__loading"]}>
                  <svg
                    className={styles["login__loading-spinner"]}
                    viewBox="0 0 50 50"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      strokeWidth="5"
                    ></circle>
                  </svg>
                  Iniciando...
                </span>
              ) : (
                "Iniciar Sesión"
              )}
            </button>
          </form>
          {attempts > 0 && attempts < 3 && (
            <p className={styles["login__error-message"]}>
              Intento {attempts} de 3.
            </p>
          )}
          {attempts >= 3 && (
            <p className={styles["login__error-message"]}>
              Has excedido el número máximo de intentos. Por favor, intenta más
              tarde.
            </p>
          )}
        </div>
      </div>
    </>
  );
};
