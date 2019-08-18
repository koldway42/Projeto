import React from "react"

import Main from "../template/main"

import "../home/home.css"

export default props => {
    return (
        <Main>
            <div className="container-fluid m-2 p-3">
                <h1 className="display-4">Bem Vindo!</h1>
                <h4 className="mt-4">
                    Esta é a Página Inicial do Projeto.
                </h4>
                <hr/>
                <div className="card p-4 bg-dark">
                    <h5 className="p-4 text-white">
                        Ferramentas Utilizadas:
                    </h5>
                    <ul class="tools-home list-group">
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
                    </ul>
                </div>
            </div>
        </Main>
    )
}