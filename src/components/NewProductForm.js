import React, { useState } from 'react';
import '../styles/NewProductForm.scss';
import { v4 as uuidv4 } from 'uuid';

function NewProductForm(props) {
  const [input, setInput] = useState('');

  // Al manejar el Cambio manejamos el valor del input y ese valor actualizado es el que vamos a asignar para el producto cuando el usuario quiera agregar el producto
  const handleInputChange = (ev) => {
    setInput(ev.target.value);
    console.log(ev.target.value);
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    console.log('Enviando...');
    const newProduct = {
      id: uuidv4(),
      productName: input,
      crossedOff: false,
    };

    //Le pasamos la función addProduct desde ProductsList.js por props a la hija para que lo aplique a la hora de enviar formulario (onSubmit) y nos va a permitir agregar un newProduct al listado
    props.addProduct(newProduct);
    // al pasarle (newProduct) como argumento, la recibe addProduct en ProductsList.js  y newProduct se trata como tarea y la pinta.
    // Flipa la comunicación entre componentes!!!!!
  };

  return (
    <form className="product-form" onSubmit={handleFormSubmit}>
      <input
        className="product-input"
        type="data"
        placeholder="Escribe un producto "
        name="productName"
        onChange={handleInputChange}
      />
      <button className="add-product-btn"> Añadir </button>
    </form>
  );
}
export default NewProductForm;
