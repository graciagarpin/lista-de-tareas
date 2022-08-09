import React, { useState } from 'react';
import NewProductForm from './NewProductForm';
import '../styles/ProductsList.scss';
import Product from './Product';

function ProductsList() {
  const [products, setProducts] = useState([]);

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
    </>
  );
}

export default ProductsList;
