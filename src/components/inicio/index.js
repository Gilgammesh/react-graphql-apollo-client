// Importamos librerias de React
import React, { useState } from "react";
// Importamos librerias de React Apollo (Hooks)
import { useQuery, useMutation } from "react-apollo";
// Importamos los querys
import { GET_ALGO, CREATE_ALGO } from "./querys";

/*******************************************************************************************************/
// Componente //
/*******************************************************************************************************/
const Index = () => {
  // Estados iniciales del componente
  const [form, setForm] = useState({
    campo1: "", // valor inicial campo1
    campo2: "", // valor inicial campo2
  });

  // Obtenemos query de ALGO de la base de datos
  const { loading: queryLoading, data } = useQuery(GET_ALGO);

  // Declaramos la mutation para Crear ALGO en la base de datos
  const [createAlgo, { loading: mutationLoading }] = useMutation(CREATE_ALGO, {
    onCompleted({ createAlgo }) {
      // Si se creo algo
      if (createAlgo) {
        console.log("Se creo algo en la base de datos : ");
        console.log(createAlgo);
      }
    },
  });

  // Mientras la data del query es obtenida mostramos vacio
  if (queryLoading) {
    return null;
  }

  // Recorremos la data obtenida y creamos una lista de componentes
  const algo = data.getAlgo.map((ele, index) => {
    return (
      <label key={ele._id}>
        `{ele.campo1} - {ele.campo2} - {ele.campo3}`
      </label>
    );
  });

  const handleInputChange = (evt) => {
    // Captura nombre, valor input seleccionado
    const { name, value } = evt.target;
    // Actualizamos el estado del formulario
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Evento de envio del formulario
  const handleFormSubmit = (evt) => {
    // Previene refrescar la página
    evt.preventDefault();

    // Ejecutamos la mutation crear ALGO
    createAlgo({ variables: { input: form } });
  };

  // Renderizamos
  return (
    <div id="main">
      <h1>Ejemplo de Graphql Client</h1>
      <div>{algo}</div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="campo1"
          placeholder="Ingrese campo1"
          value={form.campo1}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="campo2"
          placeholder="Ingrese campo2"
          value={form.campo2}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Crear ALGO</button>
      </form>
    </div>
  );
};

// Exportamos el componente
export default Index;
