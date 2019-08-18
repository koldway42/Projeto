import React from "react"

import "./nav.css"
import NavItem from "./nav-item"

export default props => {
    return (
        <aside className="nav-menu">
                <nav className="row nav">
                        <NavItem item="Início" icon="home" link="#/"/>
                        <NavItem item="Projetos" icon="book" link="#/user"/>
                </nav>
        </aside>
    )
}