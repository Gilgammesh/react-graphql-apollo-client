// Importamos librerias de Apollo Graphql
import { gql } from "apollo-boost";

// OJO para la definición de las consultas debes primero ver el modelo de Schema de la API de Graphql

/*******************************************************************************************************/
// Ejemplo de un QUERY para consultar ALGO de la base de datos  //
/*******************************************************************************************************/
export const GET_ALGO = gql`
  query {
    getAlgo {
      _id
      campo1
      campo2
      campo3
    }
  }
`;

/*******************************************************************************************************/
// Ejemplo de una MUTATION para crear, modificar o eliminar ALGO en la base de datos //
/*******************************************************************************************************/
export const CREATE_ALGO = gql`
  mutation($input: ObjectFormulario) {
    createAlgo(input: $input)
  }
`;
