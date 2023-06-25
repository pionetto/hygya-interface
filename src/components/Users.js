import React from "react";
import {Table} from "react-bootstrap";

class Users extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            users : [ ]
        }
    }

    //É chamado quando o componente é montado e aparece na tela
    //Chama a API via metodo GET ao clicar no componente
    componentDidMount(){

        fetch("http://localhost:5000/api/v1/users/")
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({ users : dados })
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
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Data de Criação</th>
                    <th>Opções</th>
                </tr>
            </thead>

            <tbody>

                {
                    this.state.users.map((user) =>

                        <tr>
                            <td> {user.id} </td>
                            <td> {user.name} </td>
                            <td> {user.email} </td>
                            <td> {user.created} </td>
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

export default Users;