import Home from './components/Home';
import Sobre from './components/Sobre';
import Pacientes from './components/Pacientes';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Minha Aplicação React</h1>
      <BrowserRouter>
      <ul>
          <li> <Link to="/">Pagina inicial </Link></li>
          <li> <Link to="/pacientes">Listagem Pacientes </Link></li>
          <li> <Link to="/sobre">Sobre </Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pacientes" element={<Pacientes/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;