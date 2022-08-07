import React, { useState } from 'react';
import NewProductForm from './NewProductForm';
import '../styles/ProductsList.scss';
import Product from './Product';

function ProductsList() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    if (product.data.trim()) {
      product.data = product.data.trim();
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
        // !product.bought -> hacemos que si era falsa se vuelva verdadera y viceversa, será lo contrario a lo que reciba
        product.bought = !product.bought;
      }
      return product;
    });
    setProducts(updatedProducts);
  };
  //aplicar la clase scss bought

  return (
    <>
      <NewProductForm onSubmit={addProduct} />
      <div className="products-list-container">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            data={product.data}
            bought={product.bought}
            deleteProduct={deleteProduct}
            buyProduct={buyProduct}
          />
        ))}
      </div>
    </>
  );
}

export default ProductsList;
