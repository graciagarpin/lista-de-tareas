import React, { useState } from 'react';
import '../styles/NewProductForm.scss';
import { v4 as uuidv4 } from 'uuid';

function NewProductForm(props) {
  // variable de estado global para recoger toda la info sobre el producto
  const [productData, setProductData] = useState({
    productName: '',
    productVariety: '',
    productMarket: '',
  });

  // módulo 3 día 3. controlar inputs con react.
  const handleInputChange = (ev) => {
    const newValue = ev.target.value;
    const property = ev.currentTarget.name;
    setProductData({
      ...productData,
      [property]: newValue,
    });
  };

  // reseteamos a '' los valores de la variable de estado global para borrar los inputs cuando se envíe la info
  const deleteInputValues = () => {
    setProductData({
      productName: '',
      productVariety: '',
      productMarket: '',
    });
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    console.log('Enviando...');
    const newProduct = {
      id: uuidv4(),
      productData: productData,
      crossedOff: false,
    };
    props.addProduct(newProduct);

    deleteInputValues();
  };

  return (
    <form className='product-form' onSubmit={handleFormSubmit}>
      <input
        className='product-input'
        type='data'
        placeholder='Escribe un producto'
        name='productName'
        onChange={handleInputChange}
        // importantísimo y esta chica no lo tenía: controlamos el valor del input con las variables de estado. Lo mismo con "variety"
        value={productData.productName}
      />
      <input
        className='product-input'
        type='data'
        placeholder='Escribe la variedad'
        name='productVariety'
        onChange={handleInputChange}
        
        value={productData.productVariety}
      />

      <label htmlFor='supermarket'>Tienda:</label>
      <select
        name='productMarket'
        id='productMarket'
        onChange={handleInputChange}
        value={productData.productMarket}
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
