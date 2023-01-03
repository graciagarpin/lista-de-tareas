import React, { useState, useEffect } from 'react';
import NewProductForm from './NewProductForm';
import '../styles/ProductsList.scss';
import Product from './Product';
import SelectWhatShop from './select-what-shop/SelectWhatShop';


function ProductsList() {
  const [products, setProducts] = useState([]);
  // console.log(products);

  // Queremos que al clickar al botón se guarden en un array los elementos cuyo atributo crossedOff sea true y que se muestren en consola.
  // Variable de estado que recoge el array de elementos con crossedOff = true
  const [crossedOffArray, setCrossedOffArray] = useState([]);

  // Queremos que se muestre el botón a partir de que haya un elemento tachado crossedOff 
  const [showButton, setShowButton] = useState('hidden');

  // compruebo con findIndex si hay algún elemento tachado
  const indexProductCrossed = products.findIndex((product) => product.crossedOff ===  true);

  // quiero que se muestre el mensaje cuando se active el botón de guardar compra
  const [msgShopSent, setMsgShopSent] = useState('hidden');

  // console.log("indexProductCrossed " + indexProductCrossed);

  // vuelvo a tener problema con la sincronía (creo) voy a probar a meter un useEffect
  // useEffect para que cada vez que la variable indexProductCrossed se actualice, nos guarde el valor en showButton
  useEffect (() => {
    if (indexProductCrossed !== -1){
      // console.log('me muestro');
      setShowButton('')
    } else {
      // console.log('estoy hidden');
      setShowButton('hidden')
    }
    }, [indexProductCrossed])


  const addProduct = (product) => {
    if (product.productData.productName.trim()) {
      console.log("Soy addProduct");
      product.productData.productName = product.productData.productName.trim();
      const updatedProducts = [product, ...products];
      setProducts(updatedProducts);
    }
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const markProduct = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        product.crossedOff = !product.crossedOff;
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  // función que filtra los elementos del array productos y guarda los que cumplen la condición product.crossedOff === true
  // TODO warning?
  const addToCrossedOffArray = () => {
    const crossedOffProducts = products.filter((product) => {
      if (product.crossedOff === true) {
        return true;
      } 
    });
    setCrossedOffArray(crossedOffProducts);
  };

  // Queremos que se eliminen de la lista de productos para que solo se muestren los que no han sido comprados ( crossedOff false ).
    // TODO warning?
  const stillInShoppingList = () => {
    const notCrossedOffProducts = products.filter((product) => {
      if (product.crossedOff === false) {
        return true;
      } 
    });
    setProducts(notCrossedOffProducts);
  };

  // TODO fusionar en una sola las dos funciones addToCrossedOffArray() y stillInShoppingList() para que en if === true haga una cosa else (=== false) haga otra cosa. Quizá push?? 
  const handleShopComplete = () => {
    addToCrossedOffArray();
    stillInShoppingList();
    setMsgShopSent('');

    console.log("Hola, sucedo?");
  };

  // console.log(crossedOffArray);
  return (
    <>
      <NewProductForm addProduct={addProduct} />
      <div className='products-list-container'>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            // pasamos la variable de estado global en vez de las 3 que teníamos hasta ahora
            productData={product.productData}
            crossedOff={product.crossedOff}
            deleteProduct={deleteProduct}
            markProduct={markProduct}
            // paso la función para que se ejecute al clicar el elemento
            // makeButtonShow={makeButtonShow}
            // onClick={makeButtonShow}
          />
        ))}
      </div>
      <button className={`add-product-btn ${showButton}`} onClick={handleShopComplete}>Compra hecha</button>
      <p className={` animatedText ${msgShopSent}`}>¡Se ha guardado la compra correctamente!</p>

      {/* TODO comentado pero lo usaremos en el futuro. Esq ahora me molesta un poco */}
      {/* <div className={`principal-shopping-list ${msgShopSent}`} > */}
      <div className={`principal-shopping-list`} >

        <SelectWhatShop />
      </div>

    </>
  );
}

export default ProductsList;
