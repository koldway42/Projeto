import React from "react"

import "./header.css"

export default props => {
    return (
        <header className="header d-flex justify-content-between align-items-center">
            <div className="superior_menu m-3">
                <button className="btn btn-secondary">Teste</button>
            </div>
            <div className="m-3">
                {/* <button className="btn btn-dark mr-2">Login</button> */}
                <a href="#/register">
                    <button className="btn btn-dark">
                        Registrar Projeto 
                    </button>
                </a>
            </div>
        </header>
    )
}