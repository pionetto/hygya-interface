import React, { useState, useEffect, useContext } from "react";

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import { Nav, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { AuthContext } from "../../contexts/auth";

import Home from "../../components/Home";
import Pacientes from "../../components/Pacientes";
import Sobre from "../../components/Users";

import HygyaLogo from "../../assets/images/hygya-logo.png"
import "./styles.css";

// import { getUsers } from '../../services/api';

// import Home from "../components/Home";
// import Sobre from "../components/Sobre";
// import Pacientes from "../components/Pacientes";

// const HomePage = () => {
//     const { authenticated, logout } = useContext(AuthContext);
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);

    // useEffect(() => {

    //   (async () => {
    //     const response = await getUsers();
    //     const usuario = await response.data;

    //     console.log(getUsers());
    //     setUsers(response.data);
    //     setLoading(false);
    //   })();
    // }, []);


    
    // if(loading) {
    //   return <div className="loading">Carregando dados...</div>
    // }

    // return (
    //     <>
    //       {/* <div className="App"> */}
    //       <h1>HYGYA PACS</h1>
    //       <p>{String(authenticated)}</p>
    //       <button onClick={handleLogout}>Logout</button>
    //       <ul>
    //         {
    //           users.map((user) => (
    //             <li key={users.id}>
    //               {user.name}
    //             </li>
    //           ))}
    //       </ul>

{/*         
          <React.StrictMode>
          <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Prioridade</th>
                    <th>Nome Paciente</th>
                    <th>Sexo</th>
                    <th>ID Paciente</th>
                    <th>Procedimento</th>
                    <th>Modalidade</th>
                    <th>Data Exame</th>
                    <th>Data Laudo</th>
                    <th>Visualizar</th>
                    <th>Opções</th>
                </tr>
            </thead>

            <tbody>

                {
                    users.map((user) =>

                        <tr>
                            <td> {user.id} </td>
                            <td> {user.name} </td>
                            <td> {paciente.sexo} </td>
                            <td> {paciente.id_paciente} </td>
                            <td> {paciente.procedimento} </td>
                            <td> {paciente.modalidade} </td>
                            <td> {paciente.data_exame} </td>
                            <td> {paciente.data_laudo} </td>
                            <td>@@</td>
                            <td>Editar / Excluir</td>
                        </tr>

                    )
                }

            </tbody>
        </Table>
        </React.StrictMode>
 */}

function HomePage() {
    
    const { authenticated, logout } = useContext(AuthContext);
    const handleLogout = () =>{
      logout();
    }
      return (

        <div className="principal">
          <img src={HygyaLogo} className="hygya-logo" />
          <Button variant="outline-secondary" onClick={handleLogout}>Logout</Button>

        <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <Home />
        </Tab>
        <Tab eventKey="pacientes" title="Lista de Exames">
          <Pacientes />
        </Tab>
        <Tab eventKey="users" title="Usuários">
          <Sobre />
        </Tab>
        <Tab eventKey="medicos" title="Médicos">
          <Sobre />
        </Tab>
      </Tabs>
      </div>
    );      
}

export default HomePage;


// import React from "react";
// import {Table} from "react-bootstrap";

// class Pacientes extends React.Component{
    
//     constructor(props){
//         super(props);

//         this.state = {
//             pacientes : [ ]
//         }
//     }

//     //É chamado quando o componente é montado e aparece na tela
//     //Chama a API via metodo GET ao clicar no componente
//     componentDidMount(){

//         fetch("http://localhost:5000/api/v1/paciente/")
//         .then(resposta => resposta.json())
//         .then(dados => {
//             this.setState({ pacientes : dados })
//         })
//     }

//     //É chamado quando o componente some da tela, é desmontado
//     componentWillUnmount(){
        
//     }

//     render (){
//         return (
        
//         <React.StrictMode>
//         <Table striped bordered hover>
//             <thead>
//                 <tr>
//                     <th>Prioridade</th>
//                     <th>Nome Paciente</th>
//                     <th>Sexo</th>
//                     <th>ID Paciente</th>
//                     <th>Procedimento</th>
//                     <th>Modalidade</th>
//                     <th>Data Exame</th>
//                     <th>Data Laudo</th>
//                     <th>Visualizar</th>
//                     <th>Opções</th>
//                 </tr>
//             </thead>

//             <tbody>

//                 {
//                     this.state.pacientes.map((paciente) =>

//                         <tr>
//                             <td> {paciente.prioridade} </td>
//                             <td> {paciente.paciente} </td>
//                             <td> {paciente.sexo} </td>
//                             <td> {paciente.id_paciente} </td>
//                             <td> {paciente.procedimento} </td>
//                             <td> {paciente.modalidade} </td>
//                             <td> {paciente.data_exame} </td>
//                             <td> {paciente.data_laudo} </td>
//                             <td>@@</td>
//                             <td>Editar / Excluir</td>
//                         </tr>

//                     )
//                 }

//             </tbody>
//         </Table>
//         </React.StrictMode>
//         )
//     }
// }

// export default Pacientes;