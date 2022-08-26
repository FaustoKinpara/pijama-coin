import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Cabecalho from './componentes/Cabecalho';
import Contato from './componentes/contato/Contato';
import Corpo from './componentes/home/Corpo';
import Moeda from './componentes/moedas/Moeda';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Cabecalho/>
      <Routes>
        <Route path='/' element={<Corpo/>}/>
        <Route path='/moeda' element={<Moeda/>}/>
        <Route path='/contato' element={<Contato/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
