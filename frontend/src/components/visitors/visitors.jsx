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
    rating: "Selecione",
    opinion: "",
    favoriteBiomeProj: "Selecione",
    favoriteMathProj: "Selecione",
    projects: []
  }

  async componentDidMount() {
    const response = await api.get("projects")

    this.setState( {projects: response.data} )
  }

  handleChange(e) {
    this.setState( {[e.target.name]: e.target.value } )
  }

  transformToEmpty(item) {
    if(item === "Selecione") {
      return ""
    } else {
      return item;
    }
  }

  scrollTop = () => {
    document.getElementById("Visits").scrollIntoView();
  }

  async handleSubmit(e) {
    e.preventDefault();
    let { 
      name,
      email,
      rating,
      opinion,
      favoriteBiomeProj,
      favoriteMathProj
    } = this.state

    opinion = this.transformToEmpty(opinion);
    favoriteBiomeProj = this.transformToEmpty(favoriteBiomeProj);
    favoriteMathProj = this.transformToEmpty(favoriteMathProj);

    await api.post("/visitors", {
      name,
      email,
      rating,
      opinion,
      favoriteBiomeProj,
      favoriteMathProj
    }, {})
        .then(resp => {
            if(resp.status >= 200 && resp.status < 300) {
                this.setState({
                    message: "Visita cadastrada com sucesso! A página será recarregada em 3 segundos.",
                    status: "success",
                    ...this.defaultState
                })
                this.scrollTop()
                setTimeout(window.location.reload(), 3000);
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
              <h2 className="display-4" id="Visits">Feedback</h2>
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
                    <label >Avaliação</label>
                    <select 
                    className="form-control mb-3" 
                    onChange={e => this.handleChange(e)} 
                    name="rating"
                    value={this.state.rating}
                    >
                        <option disabled>Selecione</option>
                        <option>Péssimo</option>
                        <option>Ruim</option>
                        <option>Mediano</option>
                        <option>Bom</option>
                        <option>Ótimo</option>
                    </select>
                  </div>
                  <div className="col-12 mb-4">
                      <label htmlFor="opinion-visitor">Opinião(Opcional)</label>
                      <textarea 
                      id="opinion-visitor" 
                      onChange={e => this.handleChange(e)} 
                      className="form-control"
                      name="opinion" 
                      placeholder="Digite sua opinião sobre esse projeto..." 
                      rows="3"
                      value={this.state.opinion}
                      />
                  </div>
                </div>
                <div className="col-4 mt-3 mb-2">
                  <label >Projeto mais apreciado(Biomas)</label>
                  <select 
                  className="form-control mb-3" 
                  onChange={e => this.handleChange(e)} 
                  name="favoriteBiomeProj"
                  value={this.state.favoriteBiomeProj}
                  >
                      <option disabled>Selecione</option>
                      {this.state.projects.filter(item => item.category === "Biomas").map(item => (
                        <option>{item.title}</option>
                      ))}
                      
                  </select>
                </div>
                <div className="col-4 mt-3 mb-2">
                  <label >Projeto mais apreciado(Tecnológico)</label>
                  <select 
                  className="form-control mb-3" 
                  onChange={e => this.handleChange(e)} 
                  name="favoriteMathProj"
                  value={this.state.favoriteMathProj}
                  >
                      <option disabled>Selecione</option>
                      {this.state.projects.filter(item => item.category === "Tecnológico").map(item => (
                        <option>{item.title}</option>
                      ))}
                  </select>
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
