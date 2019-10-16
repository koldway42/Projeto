import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

import api from "../../services/api";

export default class visitors extends Component {
    state = {
        visitors: []
    }

    async LoadVisitors() {
        const response = await api.get("/visitors")

        this.setState({ visitors: response.data })
    }

    componentDidMount() {
        this.LoadVisitors();
    }

    componentDidUpdate() {
        this.LoadVisitors();
    }

    render() {
        return (
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Nota</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.visitors.map((item, index) => (
                    <tr>
                        <td> {index + 1} </td>
                        <td> {item.name} </td>
                        <td> {item.email} </td>
                        <td> {item.rating} </td>
                    </tr>
                ))}
                </tbody>
            </Table>           
        )
    }
}
