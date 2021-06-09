import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';

import ItemListContainer from './componentes/ItemListContainer.js';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting='bienvenido a su compra'/>
    

    </div>
  );
}

export default App;
