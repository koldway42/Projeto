import React, {Component} from "react"

import api from "../../services/api";
import Main from "../template/main";
import "./projects.css";

export default class Projects extends Component {
    state = {
        projects: [],
        visitors: [],
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
        const projects = await api.get("projects");
        const visitors = await api.get("visitors")

        this.setState( {
            projects: projects.data,
            visitors: visitors.data
        } )
    }

    unique = (value, index, self) => {
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
                                            .map((item, index) => (
                                                <option key={index}>{item}</option>
                                            ))}
                                            
                                        </select>
                                    </div>
                                    <div className="col-2 mt-3 mb-2">
                                        <label >Sala</label>
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
                                            .map((item, index) => (
                                            <option key={index}>{item}</option>
                                        ))}
                                            
                                        </select>
                                    </div>
                            </div>
                    </div>
                        {this.state.projects
                        .filter(item => {
                            let Corresponds = true;
                            for(let el in this.state.filters) {
                                let value = this.state.filters[el];
                                let exists = Object.values(item).indexOf(value) === -1;
                                if(value !== "Todos" && exists) {
                                    Corresponds = false;
                                }
                            }
                            return Corresponds;
                        })
                        .map((project) => (
                            <div className="project" key={project._id}>
                                <div className="project-header">
                                    <div>
                                        <h5>{project.title}</h5>
                                        <p className="ml-3 ratings">
                                            <i class="far fa-heart fa-xs text-danger"> </i>
                                            {
                                                " " +
                                                this.state.visitors
                                                .filter(item => {
                                                    if(project.category === "Biomas") {
                                                        return item.favoriteBiomeProj === project.title;
                                                    } else {
                                                        return item.favoriteMathProj === project.title
                                                    }
                                                }).length.toString()
                                            }
                                        </p>
                                    </div>
                                    <div className="project-informations">
                                        <p><strong>Grupo: </strong> {project.group}</p>
                                        <p><strong>Sala: </strong> 3° {project.room}</p>
                                        <p><strong>Categoria: </strong>{project.category}</p>
                                    </div>
                                </div>
                                <div className="project-body justify-content-between"> 
                                    <div className="project-information"> 
                                        <h5>Descrição</h5>
                                        <div className="project-description">
                                            <p>
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>  
                                    <div className="project-image">
                                        <img src={`http://localhost:4000/files/${project.image}`} alt=""/>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>    
            </Main>
        )
    }
    
}