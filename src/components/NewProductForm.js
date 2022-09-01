import React, { useEffect, useState } from 'react';
import '../styles/NewProductForm.scss';
import { v4 as uuidv4 } from 'uuid';
import SearchProductList from './SearchProductList';

function NewProductForm(props) {
  // TODO separar productName y productVariety
  // TODO ofrecer a la user botón de crear nuevo producto cuando no haya coincidencia

  // variable de estado global para recoger toda la info sobre el producto
  const [productData, setProductData] = useState({
    productName: '',
    productUnits: '',
  });

  console.log(productData);

  // variable de estado global para recoger el valor del input
  const [searchFilterValue, setSearchFilterValue] = useState('');

  // función para guardar el primer valor que escribe la user (ej: 'pe' para sugerirle 'pepino')
  const handleNameFilter = (ev) => {
    setSearchFilterValue(ev.target.value);
  };

  // useEffect para que cada vez que la variable de estado se actualice, nos guarde el valor en productData
  useEffect(() => {
    setProductData({
      ...productData,
      productName: searchFilterValue,
    });
  }, [searchFilterValue]);

  // función para guardar el valor de la sugerencia que ha tomado
  const updateNameFilter = (value) => {
    if (value !== '') {
      setSearchFilterValue(value);
    }
  };

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
    setSearchFilterValue('');
  };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    const newProduct = {
      id: uuidv4(),
      productData: productData,
      crossedOff: false,
    };
    props.addProduct(newProduct);
    console.log(newProduct);
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
    <>
      <form className="product-form" onSubmit={handleFormSubmit}>
        <input
          className="product-input"
          type="data"
          placeholder="Escribe un producto"
          name="productName"
          value={searchFilterValue}
          onChange={handleNameFilter}
        ></input>

        <input
          className="product-input"
          type="data"
          placeholder="Unidades"
          name="productUnits"
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
        <button className="add-product-btn"> Añadir </button>
      </form>
      <div>
        <SearchProductList
          searchFilterValue={searchFilterValue}
          updateNameFilter={updateNameFilter}
        />
      </div>
    </>
  );
}
export default NewProductForm;
