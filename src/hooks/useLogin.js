import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Zoom, toast } from "react-toastify";

export const useLogin = (initialForm, validateForm) => {
  const [attempts, setAttempts] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const history = useHistory();
  const [form, setForm] = useState(initialForm);

  const MESSAGE_ERROR = "Por favor, verifica tus credenciales.";
  const MESSAGE_SUCCESS = "Acceso correcto";

  const handleAttempsts = () => {
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    setShake(true);
    setTimeout(() => setShake(false), 500);
    if(attempts>=3) console.log("contraseña incorrecta")
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm(form);
    const errors = Object.values(formErrors);

    if (errors.length === 0) {
      try {
        setIsLoading(true);

        // Simulación de una petición al backend
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            if (form.username === "azteca" && form.password === "12345") {
              localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoiYWRtaW4ifQ.HEvMnFJ5dU18e-VvYEBVXvoY3lsYxf-Onel3RCfb0Bc");
              resolve();
            } else {
              reject(new Error(MESSAGE_ERROR));
            }
          }, 1000);
        });

        toast.success(MESSAGE_SUCCESS, {
          position: "bottom-right",
          autoClose: 3000,
          transition: Zoom,
        });
        setIsLoading(false);
        history.push("/form");
      } catch (error) {
        handleAttempsts();
        toast.error(MESSAGE_ERROR, {
          position: "bottom-right",
          autoClose: 3000,
          transition: Zoom,
        });
        setIsLoading(false);
      }
    } else {
      handleAttempsts();

      toast.error(errors[0], {
        position: "bottom-right",
        autoClose: 3000,
        transition: Zoom,
      });
    }
  };

  return {
    form,
    handleChange,
    handleSubmit,
    showPassword,
    setShowPassword,
    shake,
    attempts,
    isLoading,
  };
};
