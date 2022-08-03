import '../styles/App.scss';
import '../styles/ItemsList.scss';
import ItemsList from './ItemsList';

function App() {
  return (
    <>
      <div className="aplicacion-tareas"></div>
      <div className="tareas-lista-principal">
        <h1>Mi Lista de la Compra</h1>
        <ItemsList />
      </div>
    </>
  );
}

export default App;
