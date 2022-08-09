import React, { useState } from 'react';
import '../styles/NewProductForm.scss';
import { v4 as uuidv4 } from 'uuid';

function NewProductForm(props) {


  const [productName, setProductName] = useState('');
  const [productVariety, setProductVariety] = useState('');

  // variable de estado para controlar input select supermercado
  const [productMarket, setproductMarket] = useState('');

  // Al manejar el Cambio manejamos el valor del input y ese valor actualizado es el que vamos a asignar para el producto cuando el usuario quiera agregar el producto
  const handleInputChange = (ev) => {
    if (ev.target.name === 'productName') {
      setProductName(ev.target.value);
    } else if (ev.target.name === 'productVariety') {
      setProductVariety(ev.target.value);
    } else if (ev.target.name === 'productMarket') {
      setproductMarket(ev.target.value);
    }
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    console.log('Enviando...');
    const newProduct = {
      id: uuidv4(),
      productName: productName,
      productVariety: productVariety,
      productMarket: productMarket,
      crossedOff: false,
    };

    //Le pasamos la función addProduct desde ProductsList.js por props a la hija para que lo aplique a la hora de enviar formulario (onSubmit) y nos va a permitir agregar un newProduct al listado
    props.addProduct(newProduct);
    // al pasarle (newProduct) como argumento, la recibe la función addProduct en ProductsList.js  y newProduct se trata como tarea y la pinta.
    // Flipa la comunicación entre componentes!!!!!
  };

  return (
    <form className='product-form' onSubmit={handleFormSubmit}>
      <input
        className='product-input'
        type='data'
        placeholder='Escribe un producto '
        name='productName'
        onChange={handleInputChange}
      />
      <input
        className='product-input'
        type='data'
        placeholder='Escribe la variedad'
        name='productVariety'
        onChange={handleInputChange}
      />

      <label htmlFor='supermarket'>Comercio:</label>
      <select
        name='productMarket'
        id='productMarket'
        onChange={handleInputChange}
        value={productMarket}
      >
        <option disabled value=''>
          Escoge una opción
        </option>
        <option value='Carrefour'>Carrefour</option>
        <option value='Alcampo'>Alcampo</option>
        <option value='Mercadona'>Mercadona</option>
        <option value='Consum'>Consum</option>
        <option value='Lidl'>Lidl</option>
        <option value='Otro'>Otro...</option>
      </select>
      <button className='add-product-btn'> Añadir </button>
    </form>
  );
}
export default NewProductForm;
