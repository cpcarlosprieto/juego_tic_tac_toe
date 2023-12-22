import React from 'react';  // Se importa la biblioteca React
import ReactDOM from 'react-dom/client';  // Se importa ReactDOM para renderizar componentes en el DOM
import App from './App';  // Se importa el componente principal de la aplicación desde './App'
import './index.css';  // Se importa estilos CSS desde './index.css'

// Renderiza la aplicación en el elemento con el id 'root' utilizando React.StrictMode
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  // Renderiza el componente principal de la aplicación (App)
  </React.StrictMode>
);
