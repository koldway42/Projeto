import React from "react"

import "./header.css"

export default props => {
    return (
        <header id="header" className="d-flex align-items-center justify-content-end">
            <a className="mr-4 text-white" href="#/register">
                <i className="mr-2 fa fa-lg fa-archive"></i>
                Resgistro de Projeto
            </a>
        </header>
    )
}