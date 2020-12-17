// Importamos librerias de React
import React from "react";
// Importamos librerias de Apollo Graphql
import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
// Importamos el componente ruteador de la Web
import Routes from "../routes/routes";

/*******************************************************************************************************/
// Token de autorización de la App //
/*******************************************************************************************************/
const token = "agshdgahdhadasdadadzsqweqeq"; // Token con el cual se autoriza las peticiones al servidor

/*******************************************************************************************************/
// Definimos el link del Servidor GraphQl //
/*******************************************************************************************************/
const httpLink = {
  uri: "http://localhost:4000/graphql", // Ruta del Servidor GraphQL (este es un ejemplo de ruta en desarrollo)
  headers: {
    authorization: `Bearer ${token}`, // Pasamos el token de autorización en los HTTP Headers o cabeceras
    /* Esto dependera de como te pide la api o url que pases el token, 
    si no necesitas autorizacion no se envia nada en el headers */
  },
};

/*******************************************************************************************************/
// Creamos el cliente de Apollo //
/*******************************************************************************************************/
const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache(),
});

/*******************************************************************************************************/
// Componente Principal de la App //
/*******************************************************************************************************/
const Index = () => {
  // Renderizamos la App
  return (
    // Englobamos la App con el tag de ApolloProvider y le pasamos el client
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

// Exportamos el componente principal de la App
export default Index;
