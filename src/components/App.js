import '../styles/App.scss';
import '../styles/ProductsList.scss';
import CreateNewProduct from './create-new-product/CreateNewProduct';
import ProductsList from './ProductsList';

function App() {
  return (
    <>
      <div className='principal-page'></div>
      <div className='principal-shopping-list'>
        <CreateNewProduct />
      </div>
      <div className='principal-shopping-list'>
        <h2>Mi Lista de la Compra</h2>
        <ProductsList />
      </div>
    </>
  );
}

export default App;
