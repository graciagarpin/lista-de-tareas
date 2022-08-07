import '../styles/App.scss';
import '../styles/ProductsList.scss';
import ProductsList from './ProductsList';

function App() {
  return (
    <>
      <div className="principal-page"></div>
      <div className="principal-shopping-list">
        <h1>Mi Lista de la Compra</h1>
        <ProductsList />
      </div>
    </>
  );
}

export default App;
