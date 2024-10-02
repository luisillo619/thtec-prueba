import React from 'react';
import ReactDOM from 'react-dom';  // Cambiado de 'react-dom/client' a 'react-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Cambiar createRoot a render para React 16
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Cambiado para React 16
);

// Para medir el rendimiento en tu app
reportWebVitals();
