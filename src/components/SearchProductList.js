// import { useState } from 'react';

import { useEffect } from 'react';

function SearchProductList(props) {
  // productos mock para probar que funciona
  const products = [
    { productName: 'Tomate' },
    { productName: 'Tomate Cherry' },
    { productName: 'Ciruela' },
    { productName: 'Lechuga' },
    { productName: 'Pepino' },
  ];

  // he generado un mensaje de no hay coincidencias con lo que buscas tal. Para ello he consultaod la prueba final de react
  const productSelectedIndex = products.findIndex((product) => {
    return product.productName
      .toLowerCase()
      .includes(props.searchFilterValue.toString().toLowerCase());
  });

  // console.log(productSelectedIndex);

  // console.log(props.searchFilterValue);

  const filteredSuggestions = products.filter((product) => {
    if (props.searchFilterValue === '') {
      return false;
    } else {
      return product.productName
        .toLowerCase()
        .includes(props.searchFilterValue.toString().toLowerCase().trim());
    }
  });

  // que la palabra esté literalmente todas las letras. Que no me deje añadir tom, que sea obligatorio introducir tomate (a excepción de las mayus yoksé)

  // console.log("index de algo " + products.indexOf((product) => product.productName === "Tomate"));
  const isInProductsArray = products.findIndex((product) => product.productName.toLowerCase() === props.searchFilterValue.toLowerCase());

  // console.log("Número índice palabra exacta " + isInProductsArray);
  // console.log("Contenido del input " + props.searchFilterValue);

  // puedo sacar el nombre y variedad juntos pero no sé como separarlo para que el back sepa qué es qué
  const handleSuggestionClick = (ev) => {
    // console.log(ev.target.innerHTML);
    const inputValue = ev.target.innerHTML;
    props.updateNameFilter(inputValue);
    props.setClicked('hidden');
  };

  // console.log("Desde Search " + filteredSuggestions.length);

  // props.filteredSuggestionsMatch(filteredSuggestions.length)

  useEffect(() => {
    props.filteredSuggestionsMatch(isInProductsArray);
  }, [isInProductsArray, props]);

  // const sendFilteredSuggestionsLength = () => {

  // }

  const renderSuggestions = filteredSuggestions.map((suggestion, index) => {
    return (
      <p
        className={`product-input suggestion ${props.clicked}`}
        key={index}
        onClick={handleSuggestionClick}
        value={suggestion.id}
      >
        {suggestion.productName}
      </p>
    );
  });

  if (productSelectedIndex === -1) {
    return (
      // TODO botón a componente crear nuevo producto
      <>
        <p className='scene__warning'>
          No hay ningún producto que coincida con:
          <span className='scene__warning__italics'>
            {''} "{props.searchFilterValue}"
          </span>
        </p>
      </>
    );
  } else {
    return <>{renderSuggestions}</>;
  }
}

export default SearchProductList;
