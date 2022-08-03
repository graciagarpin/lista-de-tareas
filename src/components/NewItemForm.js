import React, { useState } from 'react';
import '../styles/NewItemForm.scss';
import { v4 as uuidv4 } from 'uuid';

function NewItemForm(props) {
  const [input, setInput] = useState('');

  // Al manejar el Cambio manejamos el valor del input y ese valor actualizado es el que vamos a asignar para la tarea cuando el usuario quiera agregar la tarea
  const handleInputChange = (ev) => {
    setInput(ev.target.value);
    console.log(ev.target.value);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    console.log('Enviando...');
    const newItem = {
      id: uuidv4(),
      text: input,
      bought: false,
    };

    //Le pasamos la función addItem desde ListaDeTareas.js por props a la hija para que lo aplique a la hora de enviar formulario (onSubmit) y nos va a permitir agregar una newItem al listado
    props.onSubmit(newItem);
    // al pasarle (newItem) por parámetro, la recibe addItem en ListaDeTareas.js  y newItem se trata como tarea y la pinta.
    // Flipa la comunicación entre componentes!!!!!
  };

  return (
    <form className="item-form" onSubmit={handleFormSubmit}>
      <input
        className="item-input"
        type="text"
        placeholder="Escribe un producto "
        name="text"
        onChange={handleInputChange}
      />
      <button className="add-item-btn"> Añadir </button>
    </form>
  );
}
export default NewItemForm;
