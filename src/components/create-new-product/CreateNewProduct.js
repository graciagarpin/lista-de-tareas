import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import '../../styles/NewProductForm.scss';

function CreateNewProduct(props) {
  const [categories, setCategories] = useState([
    {
      group: 'Grupo 1',
      category: 'Leche y derivados',
    },
    {
      group: 'Grupo 2',
      category: 'Carnes, pescados y huevos',
    },
    {
      group: 'Grupo 3',
      category: 'Legumbres y frutos secos',
    },
    {
      group: 'Grupo 4',
      category: 'Verduras y Hortalizas',
    },
    {
      group: 'Grupo 5',
      category: 'Frutas',
    },
    {
      group: 'Grupo 6',
      category: 'Cereales y derivados, azúcar y dulces',
    },
    {
      group: 'Grupo 7',
      category: 'Grasas, aceite y mantequilla',
    },
  ]);

  /* Es una función que mapea la matriz de categorías y devuelve una opción para cada categoría. */
  const renderCategoriesOptions = categories.map((category, index) => {
    return (
      <option value={category.group} key={index}>
        {category.group}: {category.category}
      </option>
    );
  });

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

  return (
    <>
      <h2>Crear producto nuevo</h2>
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
          {renderCategoriesOptions}
        </select>
        <button className='add-product-btn'> Guardar </button>
      </form>
    </>
  );
}

export default CreateNewProduct;