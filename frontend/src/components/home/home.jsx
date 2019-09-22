import React, {Component} from "react"
import Carousel from 'react-bootstrap/Carousel'

import Main from "../template/main"
import api from "../../services/api"

import "../home/home.css"

export default class Home extends Component {
    state = {
        projects: [],
    };

    async componentDidMount() {
        const response = await api.get("projects")

        this.setState({ projects: response.data })
        console.log(response.data);
    }

    render() {
        return (
            <Main>
                <div className="container-fluid m-2 p-3">
                    <h2 className="display-4">Bem Vindo!</h2>
                    <h4 className="mt-4">
                        Esta é a Página Inicial do Projeto.
                    </h4>
                    <hr/>
                    <h2 className="mb-4 mt-4">Projetos Registrados: </h2>
                    <Carousel>
                            {this.state.projects.map(project => (
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={`http://localhost:4000/files/${project.image}`}
                                    alt={project.title}
                                    />
                                    <Carousel.Caption>
                                        <h3>{project.title}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                    </Carousel>
                    <hr/>
                    <h2 className="mb-4 mt-4">Documentação: </h2>
                    <div className="card p-4 bg-dark">
                        <h5 className="p-4 text-white">
                            Ferramentas Utilizadas:
                        </h5>
                        <ul className="tools-home list-group">
                            <li className="list-group-item d-flex justify-content-between" >
                                NodeJS <span className="text-success" > v11.15 </span> 
                            </li>
                            <li className="list-group-item d-flex justify-content-between" >
                                ReactJS <span className="text-success" > v16.8 </span> 
                            </li>
                            <li className="list-group-item d-flex justify-content-between" >
                                Axios <span className="text-success" > v0.19 </span> 
                            </li>
                            <li className="list-group-item d-flex justify-content-between" >
                                Booststrap <span className="text-success" > v4.3 </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between" >
                                React Booststrap <span className="text-success" > v1.0 Beta.10 </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between" >
                                Font-Awesome <span className="text-success" > v4.7 </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between" >
                                ExpressJS <span className="text-success" > v4.17 </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between" >
                                Pm2 <span className="text-success" > v3.5 </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between" >
                                CORS <span className="text-success" > v2.8 </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between" >
                                Body-parser <span className="text-success" > v1.19 </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between" >
                                Multer <span className="text-success" > v1.4 </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Main>
        )
    }
    
}