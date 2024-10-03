# Prueba Técnica - THTec

## Descripción

Esta aplicación fue desarrollada como parte de una prueba técnica para THTec. La aplicación está construida en React y utiliza Node.js como entorno de ejecución. A continuación se detallan las características implementadas y las tecnologías utilizadas.

## Tecnologías

- **Node.js**: Versión `16.20.2`
- **React**: Versión `16.12.0`
- **Sass**: Utilizado para gestionar los estilos de la aplicación.

## Funcionalidades

1. **Enrutamiento**:
   - Utilización de React Router DOM para gestionar las rutas de la aplicación.
   - Protección de rutas mediante un patrón de orden superior (HOC) que verifica la autenticación con un token simulado en el `localStorage`.
   - Redirección a una página de login cuando se intenta acceder a una ruta protegida sin autenticación.

2. **Autenticación**:
   - Login mediante usuario y contraseña.
   - Después de 3 intentos fallidos de login, el botón de acceso se bloquea temporalmente.
   - Gestión de notificaciones y mensajes de error usando `React Toastify`.

3. **Componentes y Vistas**:
   - **Login**: Página de inicio de sesión con validaciones y mensajes de error.
   - **Dashboard de Usuario**: Al iniciar sesión, se muestra un panel de usuario con los datos obtenidos por un ID simulado.
   - **Formulario de Búsqueda**: Formulario que recibe un `idUser` y retorna los datos del usuario simulado.
   - **404 Error Page**: Página de error para rutas no encontradas.
   - **Autorización de Rutas**: Página para manejar accesos no autorizados, mostrando un mensaje indicando que es necesario iniciar sesión.

4. **Navegación**:
   - Barra de navegación que permite desloguearse y redirige a la página de login.

5. **Manejo de Hooks**:
   - Utilización de hooks personalizados para la gestión del estado en el login y en el formulario de usuario.

6. **Estructura del Código**:
   - Uso de archivos de barril (`index.js`) para mejorar la legibilidad y organización de las importaciones.

## Instalación

1. Clonar el repositorio:

   git clone https://github.com/luisillo619/thtec-prueba

2. Instalar dependencias:

   npm install

3. Iniciar el servidor:

   npm run start

## Requisitos Previos

- Node.js versión `16.20.2` o superior.
- NPM instalado.
