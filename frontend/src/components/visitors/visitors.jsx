import React, { Component } from 'react';

import Main from "../template/main";
import Visitors from "./visitors-load";
import Alert from 'react-bootstrap/Alert'

import api from "../../services/api"
import "./visitors.css";

export default class visitors extends Component {

  state = {
    name: "",
    email: "",
    rating: "Selecione"
  }

  handleChange(e) {
    this.setState( {[e.target.name]: e.target.value } )
  }

  scrollTop = () => {
    document.getElementById("Visits").scrollIntoView();
  }

  async handleSubmit(e) {
    e.preventDefault();
    let { name, email, rating } = this.state
    const data = new FormData();

    if(rating === "Selecione") {
        rating = "";
    }

    data.append("name", name);
    data.append("email", email);
    data.append("rating", rating);

    await api.post("/visitors", {
      name,
      email,
      rating
    }, {})
        .then(resp => {
            if(resp.status >= 200 && resp.status < 300) {
                this.setState({
                    message: "Visita cadastrada com sucesso!",
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
              <h2 className="display-4" id="Visits">Visitas</h2>
              <hr/>
              {
                this.state.status === "error" ? 
                this.AlertDanger(this.state.message, "danger") : 
                this.state.status === "success" ?
                this.AlertDanger(this.state.message, "success"): ""
              }
              <form id="visitor-form" onSubmit={e => this.handleSubmit(e)}>
                <div className="row">
                  <div className="col-5 mt-3 mb-4">
                    <label htmlFor="visitor-name">Nome</label>
                    <input type="text"
                    onChange={e => this.handleChange(e)} 
                    id="visitor-name" 
                    className="form-control"
                    name="name"
                    placeholder="Digite seu nome..."
                    value={this.state.name}
                  />
                  </div>
                  <div className="col-5 mt-3 mb-4">
                    <label htmlFor="visitor-email">Email</label>
                    <input type="text"
                    onChange={e => this.handleChange(e)} 
                    id="visitor-email" 
                    className="form-control"
                    name="email"
                    placeholder="Digite seu Email..."
                    value={this.state.email}
                  />
                  </div>
                  <div className="col-2 mt-3 mb-2">
                    <label >Nota</label>
                    <select 
                    className="form-control mb-3" 
                    onChange={e => this.handleChange(e)} 
                    name="rating"
                    value={this.state.rating}
                    >
                        <option disabled>Selecione</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                  </div>
                </div>
              <div className="col-12 mt-4 d-flex justify-content-end">
                  <button className="btn bg-danger" type="reset">Cancelar</button>
                  <button className="btn ml-2" type="submit">Enviar</button>
              </div>
              </form>
              <hr/>
              <Visitors />
            </div>
        </Main>
    )
  }
}
