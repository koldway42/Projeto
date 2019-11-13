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
        min: 1,
        defaultMax: 2,
        max: 2,
        pages: 1,
        active: 1
    };

    handleCategoryChange(e) {
        let savedState = this.state.filters;
        savedState.category = e.target.value
        this.setState( {filters: savedState} )

        this.state.active = 1;
        this.state.pages = 1;
        this.handleProjects();
    }

    handleRoomChange(e) {
        let savedState = this.state.filters;
        savedState.room = e.target.value
        this.setState( {filters: savedState} )

        this.state.active = 1;
        this.state.pages = 1;
        this.handleProjects();
    }

    async handleProjects() {
        const filters = this.state.filters;
        const {min, max} = this.state

        const params = {
            filters,
            min,
            max
        }

        const projects = await api.get("projectsFilter", { params });

        await this.setState( {
            projects: projects.data.publications,
        } )

        console.log(this.state);

        if(this.state.pages == 1) {

            this.setState( {
                pages: projects.data.pages,
        } ) 
        }
    }

    scrollTop = () => {
        document.getElementById("projects-title").scrollIntoView();
    }

    async handlePagination(e) {
        console.log("handled");
        const key = e.target.innerText;

        await this.setState({
            min: ((key * this.state.defaultMax) - (this.state.defaultMax)),
            max: key * this.state.defaultMax,
            active: parseInt(key)
        })

        await this.handleProjects();
        this.scrollTop();
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
    
    pagination = () => {
        let active = this.state.active;
        let items = [];

        for (let number = 1; number <= this.state.pages; number++) {
            items.push(
                <Pagination.Item onClick={e => this.handlePagination(e)} key={number} active={number === active}>
                    {number}
                </Pagination.Item>,
            );
        }

        return(items)
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
                        {this.state.projects.map((project) => (
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
                        <Pagination>{this.pagination()}</Pagination>
                </div>    
            </Main>
        )
    }
    
}