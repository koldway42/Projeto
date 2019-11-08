import React, {Component} from "react"

import Pagination from 'react-bootstrap/Pagination'

import api from "../../services/api";
import Main from "../template/main";
import "./projects.css";

export default class Projects extends Component {
    state = {
        projects: [],
        visitors: [],
        categories: [],
        rooms: [],
        filters: {
            category: "Todos",
            room: "Todos"
        },
        min: 0,
        max: 3,
        pages: 1,
        active: 1
    };

    handleCategoryChange(e) {
        let savedState = this.state.filters;
        savedState.category = e.target.value
        this.setState( {filters: savedState} )
        this.handleProjects();
    }

    handleRoomChange(e) {
        let savedState = this.state.filters;
        savedState.room = e.target.value
        this.setState( {filters: savedState} )
        this.handleProjects();
    }

    async handleProjects() {
        const {category, room} = this.state.filters;
        const {min, max} = this.state

        const params = {
            category,
            room,
            min,
            max
        }

        const projects = await api.get("projects", { params });

        this.setState( {
            projects: projects.data.publications,
            pages: (Math.ceil(projects.data.pages / max))
        } )

        console.log(this.state.pages)

    }

    async handlePagination(e) {
        const key = e.target.innerText;
        this.setState({
            max: key * this.state.max,
            min: (key * this.state.max) - this.state.max,
            active: key
        })

        console.log(key)

        this.handleProjects();
    }

    async componentDidMount() {
        const visitors = await api.get("visitors");
        const categories = await api.get("categories");
        const rooms = await api.get("rooms");
        
        this.handleProjects();

        this.setState( {
            visitors: visitors.data,
            categories: categories.data,
            rooms: rooms.data
        } )
    }

    unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
      
    
    render() {
        let active = this.state.active;
        let items = [];
        for (let number = 1; number <= this.state.pages; number++) {
        items.push(
            <Pagination.Item onClick={e => this.handlePagination(e)} key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
        }
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
                                            {this.state.categories.map((item, index) => (
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
                                            {this.state.rooms.map((item, index) => (
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
                        <Pagination>{items}</Pagination>
                </div>    
            </Main>
        )
    }
    
}