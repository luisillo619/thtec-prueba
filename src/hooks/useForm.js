// React
import { useState, useEffect } from "react";

// Json con datos simulados
import usersData from "../helpers/inventedUsers.json"

// Hook personalizado para la logica del formulario
export const useForm = (validateForm) => {
  const [error, setError] = useState("");
  const [userId, setUserId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    middleName: "",
    email: "",
    phone: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  // Effecto que setea los valores dependiendo del id de usuario y genera errores
  useEffect(() => {
    const formErrors = validateForm(userId);
    const errors = Object.values(formErrors);
    setError(errors[0]);

    if (errors.length === 0 && userId.trim() !== "") {
      setError(null);
      setIsLoading(true);

      const timeoutId = setTimeout(() => {
        const userData = usersData.find((user) => user.id === userId);

        if (userData) {
          setFormData(userData);
          setUserExists(true);
          setUserNotFound(false);
        } else {
          setFormData({
            name: "",
            lastName: "",
            middleName: "",
            email: "",
            phone: "",
          });
          setUserExists(false);
          setUserNotFound(true);
        }

        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timeoutId);
    } else {
      if (
        userExists ||
        userNotFound ||
        isLoading ||
        Object.values(formData).some((value) => value !== "")
      ) {
        setFormData({
          name: "",
          lastName: "",
          middleName: "",
          email: "",
          phone: "",
        });
        setUserExists(false);
        setUserNotFound(false);
        setIsLoading(false);
      }
    }
  }, [userId, formData, isLoading, userExists, userNotFound, validateForm]);

  // Seteo del userId
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "userId") {
      setUserId(value);
    } else {
      setFormData((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  // Abre la seccion del dashboard del usuario
  const handleContinue = () => {
    setShowDashboard(true);
  };

  // Regresa a la seccion de la busqueda por id
  const handleGoBack = () => {
    setShowDashboard(false);
    setUserId("");
    setFormData({
      name: "",
      lastName: "",
      middleName: "",
      email: "",
      phone: "",
    });
    setUserExists(false);
    setUserNotFound(false);
    setIsLoading(false);
  };

  return {
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
  };
};
