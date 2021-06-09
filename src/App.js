import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import CardWidget from '../componentes/CardWidget.js';
import '../componentes/ItemListContainer.js';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <CardWidget destino='EEUU' ciudad='New York' precio='86.000'/>
    <CardWidget destino='japon' ciudad='hokaido' precio='12.000'/>
    <CardWidget destino='Mexico' ciudad='acapulco' precio='76.000'/>

    </div>
  );
}

export default App;
