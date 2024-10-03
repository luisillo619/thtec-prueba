import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { UserDashboard } from "../user";
import { Navbar } from "../navBar/NavBar";

export const Form = () => {
  // Estados iniciales
  const [userId, setUserId] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    email: "",
    telefono: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    console.log("useEffect ejecutado con userId:", userId);

    if (userId.trim() !== "") {
      setIsLoading(true);

      // Simular llamada a la API con setTimeout
      const timeoutId = setTimeout(() => {
        // Datos simulados basados en el ID de usuario
        let userData = null;
        let userFound = false;

        if (userId === "1") {
          userData = {
            nombre: "Juan",
            apellidoPaterno: "Pérez",
            apellidoMaterno: "López",
            email: "juan.perez@example.com",
            telefono: "+52 123 456 7890",
          };
          userFound = true;
        } else if (userId === "2") {
          userData = {
            nombre: "María",
            apellidoPaterno: "García",
            apellidoMaterno: "Hernández",
            email: "maria.garcia@example.com",
            telefono: "+52 987 654 3210",
          };
          userFound = true;
        }

        if (userFound) {
          setFormData(userData);
          setUserExists(true);
          setUserNotFound(false);
        } else {
          setFormData({
            nombre: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            email: "",
            telefono: "",
          });
          setUserExists(false);
          setUserNotFound(true);
        }

        setIsLoading(false);
      }, 1000);

      // Limpiar el timeout si el componente se desmonta o el userId cambia
      return () => clearTimeout(timeoutId);
    } else {
      // Si el userId está vacío, limpiar los otros campos y estados

      if (
        userExists ||
        userNotFound ||
        isLoading ||
        Object.values(formData).some((value) => value !== "")
      ) {
        setFormData({
          nombre: "",
          apellidoPaterno: "",
          apellidoMaterno: "",
          email: "",
          telefono: "",
        });
        setUserExists(false);
        setUserNotFound(false);
        setIsLoading(false);
      }
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "userId") {
      setUserId(value);
    } else {
      setFormData((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  const handleContinue = () => {
    // Mostrar el dashboard
    setShowDashboard(true);
  };

  const handleLogout = () => {
    // Regresar al formulario inicial y limpiar los campos
    setShowDashboard(false);
    setUserId("");
    setFormData({
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      email: "",
      telefono: "",
    });
    setUserExists(false);
    setUserNotFound(false);
    setIsLoading(false);
  };

  if (showDashboard) {
    return (
      <UserDashboard
        user={formData}
        userId={userId}
        handleLogout={handleLogout}
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
                htmlFor="nombre"
                className={styles["userForm__input-group-label"]}
              >
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                disabled
                className={styles["userForm__input-group-input"]}
              />
            </div>
            <div className={styles["userForm__input-group"]}>
              <label
                htmlFor="apellidoPaterno"
                className={styles["userForm__input-group-label"]}
              >
                Apellido Paterno
              </label>
              <input
                id="apellidoPaterno"
                name="apellidoPaterno"
                type="text"
                value={formData.apellidoPaterno}
                disabled
                className={styles["userForm__input-group-input"]}
              />
            </div>
            <div className={styles["userForm__input-group"]}>
              <label
                htmlFor="apellidoMaterno"
                className={styles["userForm__input-group-label"]}
              >
                Apellido Materno
              </label>
              <input
                id="apellidoMaterno"
                name="apellidoMaterno"
                type="text"
                value={formData.apellidoMaterno}
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
            {!isLoading && userNotFound && (
              <p className={styles["userForm__error-message"]}>
                El usuario no existe
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
