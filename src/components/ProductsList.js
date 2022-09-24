import React, { useState } from 'react';
import NewProductForm from './NewProductForm';
import '../styles/ProductsList.scss';
import Product from './Product';

function ProductsList() {

  const [products, setProducts] = useState([]);
  console.log(products);

  // Queremos que al clickar al botón se guarden en un array los elementos cuyo atributo crossedOff sea true y que se muestren en consola. 
  // Variable de estado que recoge el array de elementos con crossedOff = true
  const [crossedOffArray, steCrossedOffArray] = useState([])


  const addProduct = (product) => {
    if (product.productData.productName.trim()) {
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
      if(product.crossedOff === true){
        return true
      }
    })
    steCrossedOffArray(crossedOffProducts)
  }

  console.log(crossedOffArray);
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
          />
        ))}
      </div>
      <button onClick={addToCrossedOffArray} >Compra hecha</button>
    </>
  );
}

export default ProductsList;
