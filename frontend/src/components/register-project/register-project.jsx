import React, { Component } from "react";

import Alert from 'react-bootstrap/Alert'
import Main from "../template/main";
import api from "../../services/api";
import "./register-project.css"

export default class extends Component {

    defaultState = {
        title: "",
        description: "",
        image: null,
        group: "",
        room: "Selecione Sua Sala",
        passwd: ""
    }

    state = this.defaultState;
    
    handleChange(e) {
        this.setState( {[e.target.name]: e.target.value } )
    }

    handleImage(e) {
        this.setState({image: e.target.files[0] })
    }

    scrollTop = () => {
        document.getElementById("Register").scrollIntoView();
    }

    async handleSubmit(e) {
        e.preventDefault();
        let { title, description, image, room, group, passwd} = this.state
        const data = new FormData();

        if(room === "Selecione Sua Sala") {
            room = "";
        }

        data.append("title", title);
        data.append("description", description);
        data.append("image", image);
        data.append("room", room);
        data.append("group", group);
        data.append("passwd", passwd);

        await api.post("/projects", data, {})
            .then(resp => {
                if(resp.status >= 200 && resp.status < 300) {
                    this.setState({
                        message: "Projeto cadastrado com sucesso!",
                        status: "success",
                        ...this.defaultState
                    })
                    this.scrollTop()
                }
            })
            .catch(err => {
                this.setState({
                    message: err.response.data,
                    status: "error"
                })
                this.scrollTop()
            });
    }

    AlertDanger(msg, variant) {
        return (
            <Alert variant={variant}>
                {msg}
            </Alert>
        )
        
    }

    render() {

        return (
            <Main>
                <div className="container-fluid p-3">
                    <h1 className="display-4" id="Register">Registro</h1>
                    <hr/>

                    {
                        this.state.status === "error" ? 
                        this.AlertDanger(this.state.message, "danger") : 
                        this.state.status === "success" ?
                        this.AlertDanger(this.state.message, "success"): ""
                    }

                    <form id="register-form" onSubmit={e => this.handleSubmit(e)}>
                        <div className="form-group row m-3">
                            <div className="col-12 mb-4">
                                <label htmlFor="nome-projeto">Projeto</label>
                                <input type="text" 
                                onChange={e => this.handleChange(e)} 
                                id="nome-projeto" 
                                className="form-control"
                                name="title" 
                                placeholder="Digite o nome do seu projeto..."
                                value={this.state.title}
                                />
                            </div>
                            <div className="col-12 mb-4">
                                <label htmlFor="nome-projeto">Grupo</label>
                                <input type="text"
                                onChange={e => this.handleChange(e)} 
                                id="nome-projeto" 
                                className="form-control"
                                name="group"
                                placeholder="Digite o nome do grupo..."
                                value={this.state.group}
                                />
                            </div>
                            <div className="col-12 mb-4">
                                <label htmlFor="nome-projeto">Descrição</label>
                                <textarea 
                                id="nome-projeto" 
                                onChange={e => this.handleChange(e)} 
                                className="form-control"
                                name="description" 
                                placeholder="Dê uma descrição amigável..." 
                                rows="5"
                                value={this.state.description}
                                />
                            </div>
                            <div className="form-group col-12 mb-4">
                            <label htmlFor="exampleFormControlSelect1">Sala</label>
                                <select 
                                className="form-control mb-3" 
                                onChange={e => this.handleChange(e)} 
                                name="room"
                                value={this.state.room}
                                >
                                    <option disabled>Selecione Sua Sala</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                </select>
                                <label htmlFor="exampleFormControlFile1">Imagem</label>
                                <input 
                                type="file" 
                                className="form-control-file" 
                                onChange={e => this.handleImage(e)}
                                />
                            </div>
                            <div className="col-6 mt-3 mb-4">
                                <label htmlFor="senha-admin">Senha de Administrador</label>
                                <input type="password"
                                onChange={e => this.handleChange(e)} 
                                id="senha-admin" 
                                className="form-control"
                                name="passwd"
                                placeholder="Digite a senha do Aministrador..."
                                value={this.state.passwd}
                                />
                            </div>
                            <div className="col-12 mt-4 d-flex justify-content-end">
                                <button className="btn bg-danger" type="reset">Cancelar</button>
                                <button className="btn ml-2" type="submit">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Main>
        )
    }
} 