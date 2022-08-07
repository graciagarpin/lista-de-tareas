import React from 'react';
import '../styles/Product.scss';
import { AiFillDelete } from 'react-icons/ai';

//le paso las props en un objeto:
function Product({ id, data, bought, buyProduct, deleteProduct }) {
  return (
    <div className={bought ? 'product-container bought' : 'product-container'}>
      <div className="product-data" onClick={() => buyProduct(id)}>
        {data}
      </div>
      <div className="product-container-icons" onClick={() => deleteProduct(id)}>
        <AiFillDelete className="delete-icon" />
      </div>
    </div>
  );
}

export default Product;
