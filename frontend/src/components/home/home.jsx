import React, {Component} from "react"
import Carousel from 'react-bootstrap/Carousel'

import Main from "../template/main"
import api from "../../services/api"
import Graph from "../template/deps/PieGraph"

import "../home/home.css"

export default class Home extends Component {
    state = {
        projects: [],
    };

    async componentDidMount() {
        const response = await api.get("projects")

        this.setState({ projects: response.data })
    }

    render() {
        return (
            <Main>
                <div className="container-fluid p-3">
                    <h2 className="display-4">Bem Vindo!</h2>
                    <h4 className="mt-4">
                        Esta é a Página Inicial do Projeto.
                    </h4>
                    <hr/>
                    <h2 className="mb-4 mt-4">Projetos Registrados: </h2>
                    <Carousel>
                            {this.state.projects.map(project => (
                                <Carousel.Item key={project._id}>
                                    <img
                                    className="d-block w-100"
                                    src={`http://localhost:4000/files/${project.image}`}
                                    alt={project.title}
                                    />
                                    <Carousel.Caption>
                                        <h3 >{project.title}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                    </Carousel>
                    <hr/>
                    <Graph />
                </div>
            </Main>
        )
    }
    
}