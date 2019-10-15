import React, {Component} from "react"

import Main from "../template/main"

import "./documentation.css"

export default class Home extends Component {

    render() {
        return (
            <Main>
                <div id="Documentation" className="container-fluid p-3">
                    <h2 className="display-4">Documentação</h2>
                    <hr />
                    <p>
                        Nessa seção, todas as informações relacionadas com o desenvolvimento desse sistema, como funcionalidades e
                        ferramentas utilizadas. Primeiro, há uma lista com todas as Ferramentas Utilizadas, Após isso, um breve resumo das
                        main importantes será oferecido, e por fim, todas as funcionalidades dos sistemas será explicadas, desde seu funcionamento interno,
                        até seu uso pelo usuário.
                    </p>
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
                            <li className="list-group-item d-flex justify-content-between" >
                                React Burger Menu <span className="text-success" > v2.6 </span>
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <h2> ReactJS </h2>
                    <p>
                        Esse projeto foi contruído utilizando a biblioteca JavaScript <strong>ReactJS</strong>.
                        Essa Biblioteca foi criada em 2013 pelo Facebook, e utiliza da tecnologia de componentização,
                        onde cada componente da página é programado e renderizado separamente. Outro diferencial do
                        React é a <strong>VirtualDom</strong>, que basicamente cria uma uma representação do DOM(Document Object
                        Model) real na linguagem JavaScript, que será então, convertida para a DOM propriamente dita.
                    </p>
                    <h2> NodeJS </h2>
                    <p>
                        Para o Lado servidor, foi utilizado NodeJS, um ambiente de execução JavaScript Assíncrono, orientado a eventos
                        que utiliza do motor interpretador de JavaScript v8, Criado pela <strong>Google</strong>. A principal característica do
                        do NodeJS é o NPM(Node Package Manager), que oferece uma plataforma de compartilhamento de Projetos do Node e uma
                        ferramenta por linha de comando que permite a interação com os projeto antes aqui citados.
                    </p>
                    <hr />
                </div>
            </Main>
        )
    }
    
}