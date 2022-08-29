import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import '../../styles/NewProductForm.scss'

function CreateNewProduct (props) {

    // variable de estado global para recoger toda la info sobre el producto
    const [productData, setProductData] = useState({
      productName: '',
      productVariety: '',
      productCategory: '',
    });

    // reseteamos a '' los valores de la variable de estado global para borrar los inputs cuando se envíe la info
    const resetInputValues = () => {
      setProductData({
        productName: '',
        productVariety: '',
        productCategory: '',
      });
    };

    // módulo 3 día 3. controlar inputs con react.
    const handleInputChange = (ev) => {

      const newValue = ev.target.value;
      const property = ev.currentTarget.name;
      setProductData({
        ...productData,
        [property]: newValue,
      });
    };

  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    console.log('Enviando...');
    console.log(productData);

    // TODO Aquí vendría una función por props como esto: props.addProduct(newProduct) pero que envíe la info a la BBDD
    
    // const newProduct = {
    //   id: uuidv4(),
    //   productData: productData,
    //   crossedOff: false,
    // };
    // props.addProduct(newProduct);

    resetInputValues();
  };


  return (<>
  <h2>
    Crear producto nuevo
  </h2>
  <form className='product-form' onSubmit={handleFormSubmit}>
      <input
        className='product-input'
        type='data'
        placeholder='Escribe un producto'
        name='productName'
        onChange={handleInputChange}
        // importantísimo y esta chica no lo tenía: controlamos el valor del input con las variables de estado. Lo mismo con "variety"
        value={productData.productName}
      />
      <input
        className='product-input'
        type='data'
        placeholder='Escribe la variedad'
        name='productVariety'
        onChange={handleInputChange}
        value={productData.productVariety}
      />
       {/* <label htmlFor='category'>Categoría:</label> */}
      <select
        className='product-input'
        name='productCategory'
        id='productCategory'
        onChange={handleInputChange}
        value={productData.productCategory}
      >
        <option disabled value=''>
          Categoría
        </option>
        <option value='Grupo 1'>Grupo 1: Leche y derivados</option>
        <option value='Grupo 2'>Grupo 2: Carnes, pescados y huevos</option>
        <option value='Grupo 3'>Grupo 3: Legumbres y frutos secos</option>
        <option value='Grupo 4'>Grupo 4: Verduras y Hortalizas</option>
        <option value='Grupo 5'>Grupo 5: Frutas</option>
        <option value='Grupo 6'>
          Grupo 6: Cereales y derivados, azúcar y dulces
        </option>
        <option value='Grupo 7'>Grupo 7: Grasas, aceite y mantequilla</option>
      </select>
      <button className='add-product-btn'> Guardar </button>
    </form>

  </>)
}

export default CreateNewProduct