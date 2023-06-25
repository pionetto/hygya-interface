import React from "react";
import {Table} from "react-bootstrap";

// import { AuthProvider, AuthContext } from "./contexts/auth"

class Pacientes extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            pacientes : [ ]
        }
    }

    //É chamado quando o componente é montado e aparece na tela
    //Chama a API via metodo GET ao clicar no componente
    componentDidMount(){

        fetch("http://localhost:5000/api/v1/paciente/")
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({ pacientes : dados })
        })
    }

    //É chamado quando o componente some da tela, é desmontado
    componentWillUnmount(){
        
    }

    render (){
        return (
        
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
                    this.state.pacientes.map((paciente) =>

                        <tr>
                            <td> {paciente.prioridade} </td>
                            <td> {paciente.paciente} </td>
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
        )
    }
}

export default Pacientes;