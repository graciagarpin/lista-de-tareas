import React from 'react';
import '../styles/Product.scss';
import { AiFillDelete } from 'react-icons/ai';

// por props nos llega la info de newProduct -> product. product.data es un objeto de strings
function Product({ id, productData, crossedOff, markProduct, deleteProduct }) {
  return (
    <div
      className={
        crossedOff ? 'product-container crossedOff' : 'product-container'
      }
    >
      <div className='product-productName' onClick={() => markProduct(id)}>
        {productData.productName} {productData.productVariety}
      </div>
      <p>{`Tienda: ${productData.productMarket}`}</p>
      <div
        className='product-container-icons'
        onClick={() => deleteProduct(id)}
      >
        <AiFillDelete className='delete-icon' />
      </div>
    </div>
  );
}

export default Product;
