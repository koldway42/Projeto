import React, { Component } from "react"

import Main from "../template/main"

export default class extends Component {
    render() {
        return (
            <Main>
                <div className="container-fluid m-2 p-3">
                    <h1 className="display-4">Registro</h1>
                    <hr/>
                    <form>
                        <div className="form-group row m-3">
                            <div className="col-12 mb-4">
                                <label htmlFor="nome-projeto">Projeto</label>
                                <input type="text" id="nome-projeto" className="form-control"
                                placeholder="Digite o nome do seu projeto..." required />
                            </div>
                            <div className="col-12 mb-4">
                                <label htmlFor="nome-projeto">Descrição</label>
                                <textarea id="nome-projeto" className="form-control"
                                placeholder="Dê uma descrição amigável..." rows="5" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-5 d-flex justify-content-end">
                                <button className="btn btn-secondary" type="reset">Cancelar</button>
                                <button className="btn btn-success ml-2" type="submit">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Main>
        )
    }
} 