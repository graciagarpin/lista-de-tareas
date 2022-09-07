// import { useState } from 'react';

function SearchProductList(props) {
  // productos mock para probar que funciona
  const products = [
    { productName: 'Tomate', productVariety: 'Cherry', id: 1 },
    { productName: 'tomate', productVariety: 'canario', id: 2 },
    { productName: 'pepino', productVariety: 'holandés', id: 3 },
    { productName: 'Ciruela', productVariety: 'Pequeña', id: 4 },
    { productName: 'Lechuga', productVariety: 'iceberg', id: 5 },
    { productName: 'Pepino', productVariety: 'Almería', id: 6 },
  ];

  // he generado un mensaje de no hay coincidencias con lo que buscas tal. Para ello he consultaod la prueba final de react
  const productSelectedIndex = products.findIndex((product) => {
    let nameAndVarietyProduct = `${product.productName} ${product.productVariety}`;
    return (
      product.productName
        .toLowerCase()
        .includes(props.searchFilterValue.toString().toLowerCase()) ||
      product.productVariety
        .toLowerCase()
        .includes(props.searchFilterValue.toString().toLowerCase()) ||
      nameAndVarietyProduct
        .toLowerCase()
        .includes(props.searchFilterValue.toString().toLowerCase().trim())
    );
  });

  // console.log(productSelectedIndex);

  // console.log(props.searchFilterValue);

  const filteredSuggestions = products.filter((product) => {
    let nameAndVarietyProduct = `${product.productName} ${product.productVariety}`;
    // console.log(nameAndVarietyProduct);
    if (props.searchFilterValue === '') {
      return false;
    } else {
      return (
        product.productName
          .toLowerCase()
          .includes(props.searchFilterValue.toString().toLowerCase().trim()) ||
        product.productVariety
          .toLowerCase()
          .includes(props.searchFilterValue.toString().toLowerCase().trim()) ||
        nameAndVarietyProduct
          .toLowerCase()
          .includes(props.searchFilterValue.toString().toLowerCase().trim())
      );
    }
  });

  // puedo sacar el nombre y variedad juntos pero no sé como separarlo para que el back sepa qué es qué
  const handleSuggestionClick = (ev) => {
    // console.log(ev.target.innerHTML);
    const inputValue = ev.target.innerHTML;
    props.updateNameFilter(inputValue);
    props.setClicked('hidden');
  };

  // console.log(filteredSuggestions);

  const renderSuggestions = filteredSuggestions.map((suggestion, index) => {
    return (
      <p
        className={`product-input suggestion ${props.clicked}`}
        key={index}
        onClick={handleSuggestionClick}
        value={suggestion.id}
      >
        {suggestion.productName} {suggestion.productVariety}
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
