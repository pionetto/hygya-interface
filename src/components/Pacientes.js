import React from "react";
import {Table} from "react-bootstrap";

class Pacientes extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            pacientes : [
                {
                    'id': 1,
                    'prioridade': '1',
                    'paciente': 'Paulo Ricardo',
                    'sexo': 'M',
                    'id_paciente': '3123489',
                    'procedimento': 'TC Crânio',
                    'modalidade': 'CT',
                    'data_exame': '2023-01-20T00:00:00Z',
                    'data_laudo': '2023-01-20T00:00:00Z'
                  },
                  {
                    'id': 2,
                    'prioridade': '1',
                    'paciente': 'João Rodrigues de Almeida',
                    'sexo': 'M',
                    'id_paciente': '3246600',
                    'procedimento': 'TORAX',
                    'modalidade': 'CR',
                    'data_exame': '2023-01-03T00:00:00Z',
                    'data_laudo': '2023-01-03T00:00:00Z'
                  }

            ]


        }
    }

    render (){
        return (
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
        )
    }
}

export default Pacientes;