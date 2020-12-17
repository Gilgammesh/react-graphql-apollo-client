// Importamos librerias de React
import React from "react";
import ReactDOM from "react-dom";
// Importamos el componente principal de la App
import App from "./components/app";

/*******************************************************************************************************/
// Componente Inicial de la Web //
/*******************************************************************************************************/
const Index = () => {
  // Renderizamos
  return <App />;
};

// Renderizamos el componente en el DOM
ReactDOM.render(<Index />, document.getElementById("root"));