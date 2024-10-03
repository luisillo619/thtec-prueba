
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

export const userAuth = (WrappedComponent) => {
  return function WithAuth(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Obtener el token del localStorage
      const token = localStorage.getItem("token");

      if (token) {
        // Simular una petición al backend con el token
        const fetchUserData = async () => {
          try {
            // Simular un retraso en la petición
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
            //console.error('Error al obtener los datos del usuario:', error);
            setIsAuthenticated(false);
          } finally {
            setLoading(false);
          }
        };

        fetchUserData();
      } else {
        // Si no hay token, el usuario no está autenticado
        setIsAuthenticated(false);
        setLoading(false);
      }
    }, []);

    if (loading) {
      return <div>Cargando...</div>;
    }

    if (!isAuthenticated) {
      return <Redirect to="/unauthorized" />;
    }

    return <WrappedComponent {...props} userData={userData} />;
  };
};
