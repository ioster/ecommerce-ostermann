import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';


function App() {
  const saludar = 'Saludos';
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer textoSalida={saludar} />
      
    </div>
  );
}

export default App;
