import React from 'react';
import '../styles/Product.scss';
import { AiFillDelete } from 'react-icons/ai';

//le paso las props en un objeto:
function Product({ id, productName, crossedOff, buyProduct, deleteProduct }) {
  return (
    <div
      className={
        crossedOff ? 'product-container crossedOff' : 'product-container'
      }
    >
      <div className="product-productName" onClick={() => buyProduct(id)}>
        {productName}
      </div>
      <div
        className="product-container-icons"
        onClick={() => deleteProduct(id)}
      >
        <AiFillDelete className="delete-icon" />
      </div>
    </div>
  );
}

export default Product;
