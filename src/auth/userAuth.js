
// React
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

// Componente para la validacion de autenticacion y autoriazion para el rol "user" (Componente de orden superior)
export const userAuth = (WrappedComponent) => {

  return function WithAuth(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Simulacion de peticion y respesta al backend
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        const fetchUserData = async () => {
          try {
            await new Promise((resolve) => setTimeout(resolve, 50));
            const response = {
              status: 200,
              data: {
                username: "azteca",
                role: "user",
                email: "azteca@example.com"
              },
            };

            if (response.status === 200 && response.data.role === "user") {
              setUserData(response.data);
              setIsAuthenticated(true);
            } else {
              setIsAuthenticated(false);
            }
          } catch (error) {
            setIsAuthenticated(false);
          } finally {
            setLoading(false);
          }
        };

        fetchUserData();
      } else {
        setIsAuthenticated(false);
        setLoading(false);
      }
    }, []);

    if (loading) {
      return <div>Cargando...</div>;
    }

    // Si no fue exitoso redireccion a inautorizado
    if (!isAuthenticated) {
      return <Redirect to="/unauthorized" />;
    }

    // Exitoso continuar con el renderizado del componente
    return <WrappedComponent {...props} userData={userData} />;
  };
};
