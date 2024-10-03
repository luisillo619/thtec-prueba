import React from 'react';
import ReactDOM from 'react-dom';  
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

// Cambiar createRoot a render para React 16
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')  
);

// Para medir el rendimiento en tu app
reportWebVitals();
