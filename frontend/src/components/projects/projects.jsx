import React, {Component} from "react"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"

import api from "../../services/api";
import Main from "../template/main";
import "./projects.css";

export default class Projects extends Component {
    state = {
        projects: [],
        filters: {
            category: "Todos",
            room: "Todos"
        }
    };

    handleCategoryChange(e) {
        let savedState = this.state.filters;
        savedState.category = e.target.value
        this.setState( {filters: savedState} )
    }

    handleRoomChange(e) {
        let savedState = this.state.filters;
        savedState.room = e.target.value
        this.setState( {filters: savedState} )
    }


    async componentDidMount() {
        const response = await api.get("projects")

        this.setState( {projects: response.data} )
    }

    unique = (value, index, self) => {
        console.log(this.state.filters)
        return self.indexOf(value) === index
    }
      
    
    render() {
        return (
            <Main>
                <div className="container-fluid p-3">
                    <h2 id="projects-title" className="display-4">Projetos</h2>
                    <div id="projects-filter">
                            <p><strong>Filtros</strong></p>
                            <div className="row">
                                    <div className="col-2 mt-3 mb-2">
                                        <label >Categoria</label>
                                        <select 
                                        className="form-control mb-3" 
                                        onChange={e => this.handleCategoryChange(e)} 
                                        name="rating"
                                        value={this.state.rating}
                                        >
                                            <option>Todos</option>
                                            {this.state.projects
                                            .map(item => item.category)
                                            .filter(this.unique)
                                            .sort()
                                            .map(item => (
                                                <option>{item}</option>
                                            ))}
                                            
                                        </select>
                                    </div>
                                    <div className="col-2 mt-3 mb-2">
                                        <label >Ano</label>
                                        <select 
                                        className="form-control mb-3" 
                                        onChange={e => this.handleRoomChange(e)} 
                                        name="rating"
                                        value={this.state.rating}
                                        >
                                            <option>Todos</option>
                                            {this.state.projects
                                            .map(item => item.room)
                                            .filter(this.unique)
                                            .sort()
                                            .map(item => (
                                            <option>{item}</option>
                                        ))}
                                            
                                        </select>
                                    </div>
                            </div>
                    </div>
                    <Accordion id="projects">
                        {this.state.projects
                        .filter(item => {
                            let Corresponds = true;
                            for(let el in this.state.filters) {
                                console.log(el)
                                let value = this.state.filters[el];
                                console.log(value)
                                let exists = Object.values(item).indexOf(value) === -1;
                                console.log(exists)
                                if(value !== "Todos" && exists) {
                                    Corresponds = false;
                                }
                            }
                            if(Corresponds) {
                                return item;
                            }
                        })
                        .map((project) => (
                            <Card key={project._id} className="">
                                <Card.Header>
                                    <Accordion.Toggle className="text-dark" as={Button} variant="link" eventKey={project._id}>
                                        {project.title}
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={project._id}>
                                    <Card.Body>
                                        <aside className="project-body" >
                                            <div className="info-group">
                                                <h2>{project.title}</h2>
                                                <p><strong>Grupo: </strong> {project.group}</p>
                                                <p><strong>Sala: </strong> 3° {project.room}</p>
                                                <p><strong>Categoria: </strong>{project.category}</p>
                                            </div>
                                            <img src={`http://localhost:4000/files/${project.image}`} alt=""/>
                                        </aside>
                                        <footer className="mb-5 project-description">
                                            <h3>Descrição</h3>
                                            <p>
                                                {project.description}
                                            </p>
                                        </footer>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        ))}
                    </Accordion>
                </div>
            </Main>
        )
    }
    
}