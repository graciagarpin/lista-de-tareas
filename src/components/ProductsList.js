import React, { useState } from 'react';
import NewProductForm from './NewProductForm';
import '../styles/ProductsList.scss';
import Product from './Product';

function ProductsList() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    if (product.productName.trim()) {
      product.productName = product.productName.trim();
      const updatedProducts = [product, ...products];
      setProducts(updatedProducts);

      console.log(product);
    }
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const buyProduct = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        // !product.crossedOff -> hacemos que si era falsa se vuelva verdadera y viceversa, será lo contrario a lo que reciba
        product.crossedOff = !product.crossedOff;
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  //aplicar la clase scss crossedOff

  return (
    <>
      <NewProductForm onSubmit={addProduct} />
      <div className="products-list-container">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            productName={product.productName}
            crossedOff={product.crossedOff}
            deleteProduct={deleteProduct}
            buyProduct={buyProduct}
          />
        ))}
      </div>
    </>
  );
}

export default ProductsList;
