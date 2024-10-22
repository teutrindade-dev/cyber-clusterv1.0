// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importação do Tailwind e estilos globais
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
