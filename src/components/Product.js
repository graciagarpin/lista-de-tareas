import React from 'react';
import '../styles/Product.scss';
import { AiFillDelete } from 'react-icons/ai';

// por props nos llega la info de newProduct -> product. product.data es un objeto de strings
function Product({ id, productData, crossedOff, markProduct, deleteProduct }) {
  function isInputEmpty(property, renderedProperty) {
    return property === '' ? '' : `${renderedProperty}: ${property}`;
  }
  return (
    <div
      className={
        crossedOff ? 'product-container crossedOff' : 'product-container'
      }
    >
      <div className='product-productName' onClick={() => markProduct(id)}>
        {productData.productName} 
        {/* {productData.productVariety} */}
      </div>
      <p> {isInputEmpty(productData.productUnits, 'uds.')}</p>

      {/* <p>{isInputEmpty(productData.productMarket, 'Tienda')}</p>
      <p>{isInputEmpty(productData.productCategory, 'Categoría')}</p> */}
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
