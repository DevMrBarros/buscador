import React from 'react'; // Importa a biblioteca React
import ReactDOM from 'react-dom/client'; // Importa a função ReactDOM para renderização
import './index.css'; // Importa o arquivo de estilos CSS
import App from './App'; // Importa o componente principal App

// Cria um root para renderização utilizando ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente App dentro do root, com modo estrito (StrictMode) do React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
