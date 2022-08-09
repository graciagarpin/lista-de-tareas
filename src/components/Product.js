import React from 'react';
import '../styles/Product.scss';
import { AiFillDelete } from 'react-icons/ai';

//le paso las props en un objeto:
function Product({
  id,
  productName,
  productVariety,
  crossedOff,
  markProduct,
  deleteProduct,
}) {
  return (
    <div
      className={
        crossedOff ? 'product-container crossedOff' : 'product-container'
      }
    >
      <div className="product-productName" onClick={() => markProduct(id)}>
        {productName} {productVariety}
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
