// Importamos librerias de React
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Importamos los Componentes de nuestra App
import Inicio from "../components/inicio/index";

/*******************************************************************************************************/
// Rutas de la App //
/*******************************************************************************************************/
const Index = () => {
  // Renderizamos, declaramos las rutas o paths
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Inicio />} />
        <Route path="/inicio" exact render={() => <Inicio />} />
      </Switch>
    </Router>
  );
};

// Exportamos las rutas de la App
export default Index;
