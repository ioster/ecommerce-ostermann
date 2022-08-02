import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  const saludar = 'Saludos';
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer textoSalida={saludar} />
      <ItemDetailContainer />
      
    </div>
  );
}

export default App;
