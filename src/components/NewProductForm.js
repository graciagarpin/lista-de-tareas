import React, { useState } from 'react';
import '../styles/NewProductForm.scss';
import { v4 as uuidv4 } from 'uuid';



function NewProductForm(props) {

  const products = [
    { productName: 'tomate', productVariety: 'cherry' },
    { productName: 'tomate', productVariety: 'canario' },
    { productName: 'pepino', productVariety: 'holandés' },
    { productName: 'ciruela', productVariety: 'negra' },
    { productName: 'lechuga', productVariety: 'iceberg' },
  ];


  // variable de estado global para recoger toda la info sobre el producto
  const [productData, setProductData] = useState({

    productUnits: '',
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
  const resetInputValues = () => {
    setProductData({

      productUnits: '',
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

    resetInputValues();
  };

  // Comentado para evitar errores

  // const [markets, setMarkets] = useState([
  //   'Mercadona',
  //   'Carrefour',
  //   'Alcampo',
  //   'Consum',
  //   'Lidl',
  //   'Otro',
  // ]);

  // const renderMarketOptions = markets.sort().map((market, index) => {
  //   return <option value={market} key={index}>{market}</option>
  // })

  return (
    <form className='product-form' onSubmit={handleFormSubmit}>
      <input
        className='product-input'
        type='data'
        placeholder='Escribe un producto'
        name='productName'
        // onChange={handleInputChange}
        // importantísimo y esta chica no lo tenía: controlamos el valor del input con las variables de estado. Lo mismo con "variety"
        value={productData.productName}
      ></input>

      <input
        className='product-input'
        type='data'
        placeholder='Unidades'
        name='productUnits'
        onChange={handleInputChange}
        value={productData.productUnits}
      />

      {/* TODO reutilizar input de tiendas más tarde */}

      {/* <label htmlFor='supermarket'>Tienda:</label>
      <select
        name='productMarket'
        id='productMarket'
        onChange={handleInputChange}
        value={productData.productMarket}
      >
        <option disabled value=''>
          Escoge una opción
        </option>
        {renderMarketOptions}

      </select> */}


      <button className='add-product-btn'> Añadir </button>
    </form>
  );
}
export default NewProductForm;
