// import Home from './components/Home';
// import Sobre from './components/Sobre';
// import Pacientes from './components/Pacientes';
// import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
// import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPages';
import HomePage from './pages/HomePage';
import AppRoutes from './AppRoutes';

function App() {

  return (
    <div className="app">
      <AppRoutes />
    </div>
  )
/*
  return (
    <div className="App">
      <h1>HYGYA PACS</h1>
      <BrowserRouter>

      <Nav variant="tabs">
        <Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
        <Nav.Link as={Link} to="/pacientes">Listagem dos Exames</Nav.Link>
        <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
      </Nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pacientes" element={<Pacientes/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
*/

}

export default App;