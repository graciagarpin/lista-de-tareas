import React, { useState } from 'react';
import '../styles/NewItemForm.scss';
import { v4 as uuidv4 } from 'uuid';

function NewItemForm(props) {
  const [input, setInput] = useState('');

  // Al manejar el Cambio manejamos el valor del input y ese valor actualizado es el que vamos a asignar para la tarea cuando el usuario quiera agregar la tarea
  const manejarCambio = (ev) => {
    setInput(ev.target.value);
    console.log(ev.target.value);
  };

  const manejarEnvio = (ev) => {
    ev.preventDefault();
    console.log('Enviando...');
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    //Le pasamos la función agregarTarea desde ListaDeTareas.js por props a la hija para que lo aplique a la hora de enviar formulario (onSubmit) y nos va a permitir agregar una tareaNueva al listado
    props.onSubmit(tareaNueva);
    // al pasarle (tareaNueva) por parámetro, la recibe agregarTarea en ListaDeTareas.js  y tareaNueva se trata como tarea y la pinta.
    // Flipa la comunicación entre componentes!!!!!
  };

  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-boton"> Añadir </button>
    </form>
  );
}
export default NewItemForm;
