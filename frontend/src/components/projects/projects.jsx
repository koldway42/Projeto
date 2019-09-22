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
    };

    async componentDidMount() {
        const response = await api.get("projects")

        this.setState( {projects: response.data} )
    }
    
    render() {
        return (
            <Main>
                <div className="container-fluid m-2 p-3">
                    <h2 id="projects-title" className="display-4">Projetos</h2>
                    <Accordion id="projects">
                        {this.state.projects.map((project) => (
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
                                            </div>
                                            <img src={`http://localhost:4000/files/${project.image}`} alt=""/>
                                        </aside>
                                        <footer className="project-description">
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