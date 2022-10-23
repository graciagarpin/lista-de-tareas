import React, { useEffect, useState } from 'react';
import '../styles/NewProductForm.scss';
import { v4 as uuidv4 } from 'uuid';
import SearchProductList from './SearchProductList';

function NewProductForm(props) {
  // TODO separar productName y productVariety
  // new TODO: tener sólo productName y eliminar productVariety (done)

  // TODO ofrecer a la user botón de crear nuevo producto cuando no haya coincidencia

  // la sugerencia no desaparecía cuando se clicaba en ella, así que voy a he hecho un classic className = hidden y a ver si funciona.
  // cuando la user clicka se asigna hidden por props con setClicked en el componente SearchProductList y cuando vuelve a escribir en el input se asigna '' con setClicked en este componente.
  // estaría bien saber hacer algún toggle o algo :S :D
  const [clicked, setClicked] = useState('');

  // variable de estado para configurar el botón añadir como inhabilitado (disabled) 

  const [buttonDisabled, setButtonDisabled] = useState('');


  // variable de estado global para recoger toda la info sobre el producto
  const [productData, setProductData] = useState({
    productName: '',
    productUnits: '',
  });

  // console.log("productData" + productData);

  // variable de estado global para recoger el valor del input
  const [searchFilterValue, setSearchFilterValue] = useState('');

  // función para guardar el primer valor que escribe la user (ej: 'pe' para sugerirle 'pepino')
  const handleNameFilter = (ev) => {
    setSearchFilterValue(ev.target.value);
    setClicked('');

    filteredSuggestionsMatch();
  };

  // useEffect para que cada vez que la variable de estado se actualice, nos guarde el valor en productData
  useEffect(() => {
    setProductData({
      ...productData,
      productName: searchFilterValue,
    });
  }, [searchFilterValue]);

  // console.log("searchFilterValue " + searchFilterValue);

  // Permitir añadir sólo los productos creados previamente.
  // Voy a intentar hacer una función que tome el valor del mock-array y lo filtre con el de searchfiltervalue y nos devuelva algo para saber si se encuentra ahí o no :S:S:S
  // me da la sensación que podría hacer esta comparación en el otro componente y envíar directamente el resultado de la comparación
  // Resulta que ya tengo algo así hecho en el otro componente, oleee
  // se llama así pero comprueba el valor Y actualiza la condición de inhabilitado del botón :S
  const filteredSuggestionsMatch = (value) => {
    if (value === -1) {
      setButtonDisabled('disabled')
    } else {
      setButtonDisabled('')
    }
    // return console.log(value);
  };

  // filteredSuggestionsLengthCheck()
  // console.log("Desde NewPro " + filteredSuggestionsLengthCheck());

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
    // console.log('Enviando Producto a la Lista');
    console.log('newProduct' + newProduct);

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
      <form className='product-form' onSubmit={handleFormSubmit}>
        <input
          className='product-input'
          type='data'
          placeholder='Escribe un producto'
          name='productName'
          value={searchFilterValue}
          onChange={handleNameFilter}
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
        <button className={`add-product-btn ${buttonDisabled}`} disabled={buttonDisabled}  > Añadir </button>
      </form>
      <div>
        <SearchProductList
          searchFilterValue={searchFilterValue}
          updateNameFilter={updateNameFilter}
          setClicked={setClicked}
          clicked={clicked}
          // paso la función para llamarla desde el otro componente y pasarle el valor necesario en este componente
          filteredSuggestionsMatch={filteredSuggestionsMatch}
        />
      </div>
    </>
  );
}
export default NewProductForm;
