function ListSearchSuggestions(props) {
  // productos mock para probar que funciona
  const products = [
    { productName: 'Tomate', productVariety: 'Cherry', id: 1 },
    { productName: 'tomate', productVariety: 'canario', id: 2 },
    { productName: 'pepino', productVariety: 'holandés', id: 3 },
    { productName: 'Ciruela', productVariety: 'Pequeña', id: 4 },
    { productName: 'Lechuga', productVariety: 'iceberg', id: 5 },
    { productName: 'Pepino', productVariety: 'Almería', id: 6 },
  ];

  // console.log(props.searchFilterValue);

  const filteredSuggestions = products.filter((product) => {
    if (props.searchFilterValue === '') {
      return false;
    } else {
      return (
        product.productName
          .toLowerCase()
          .includes(props.searchFilterValue.toString().toLowerCase().trim()) ||
        product.productVariety
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
  };
  // console.log(filteredSuggestions);

  const renderSuggestions = filteredSuggestions.map((suggestion, index) => {
    return (
      <p
        className='product-input suggestion'
        key={index}
        onClick={handleSuggestionClick}
        value={suggestion.id}
      >
        {suggestion.productName} {suggestion.productVariety}
      </p>
    );
  });

  return <>{renderSuggestions}</>;
}

export default ListSearchSuggestions;
