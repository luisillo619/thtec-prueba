// React
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// Enrutamiento
import { BrowserRouter } from "react-router-dom";

// Animacion toast para errores y operaciones exitosas
import { ToastContainer } from 'react-toastify';

// Aplicacion principal
import App from './App';

// Estilos
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

// Nucleo  de aplicacion con enrutamiento tipo BrowserRoute
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')  
);

reportWebVitals();
