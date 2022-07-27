import './index.css';
import Header from "./componentes/Header/Index.js"
import { BrowserRouter} from "react-router-dom"
import Paginas from "./componentes/Paginas"
import { DataProvider } from "./Context/DataProvider"
import Carrito from './Carrito/Index';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Carrito />
          <Paginas />
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
