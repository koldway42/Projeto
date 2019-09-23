import React from "react"

import "./nav.css"
import NavItem from "./nav-item"

export default props => {

    return (
        <aside className="nav-menu d-flex flex-column justify-content-between">
                <nav className="row nav">
                        <NavItem item="Início" icon="home" link="#/"/>
                        <NavItem item="Projetos" icon="book" link="#/projects"/>
                        <NavItem item="Contato" icon="phone-square" link="#/contact"/>
                </nav>
                <aside className="row nav utils">
                        <NavItem item="Registrar Projeto" icon="phone-square" link="#/register"/>
                </aside>
        </aside>
    )
}