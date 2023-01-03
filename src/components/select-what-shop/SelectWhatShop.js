import React, { useState } from 'react';


function SelectWhatShop(props) {

  // Comentado para evitar errores
  const [markets, setMarkets] = useState([
    'Mercadona',
    'Carrefour',
    'Alcampo',
    'Consum',
    'Lidl',
    'Otro',
  ]);

  const [marketSelected, setMarketSelected] = useState("");
  // console.log(marketSelected);

  const renderMarketOptions = markets.sort().map((market, index) => {
    return <option value={market} key={index}>{market}</option>
  })

  const saveMarketForm = () => {
    console.log('hey!');
  }

  const handleInputChange = (ev) => {
    const marketSelected = ev.target.value;
    setMarketSelected(marketSelected)
    // console.log(marketSelected);
  }

  return <>
  
        {/* TODO reutilizar input de tiendas más tarde */}
        <h2>¿Dónde has hecho la compra?</h2>

        <label htmlFor='supermarket'>Tienda: </label>
      <select
        name='productMarket'
        id='productMarket'
        onChange={handleInputChange}
        value={marketSelected}
      >
        <option disabled value=''>
          Escoge una opción
        </option>
        {renderMarketOptions}
      </select>

      <button className="add-product-btn" onClick={saveMarketForm}>Guardar</button>
  </>
}

export default SelectWhatShop;
