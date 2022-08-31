function ListSearchSuggestions(props) {
  // productos mock para probar que funciona
  const products = [
    { productName: 'Tomate', productVariety: 'Cherry' },
    { productName: 'tomate', productVariety: 'canario' },
    { productName: 'pepino', productVariety: 'holandés' },
    { productName: 'Ciruela', productVariety: 'Pequeña' },
    { productName: 'Lechuga', productVariety: 'iceberg' },
    { productName: 'Pepino', productVariety: 'Almería' },
  ];

  console.log(props.searchFilterValue);

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

  console.log(filteredSuggestions);

  const renderSuggestions = filteredSuggestions.map((suggestion, index) => {
       return <p key={index}>{suggestion.productName} {suggestion.productVariety}</p>
   })

  return <>
  {renderSuggestions}
  </>;
}

export default ListSearchSuggestions;
