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
                        mais importantes será oferecido, e por fim, as funcionalidades principais do sistemas serão explicadas, em seu mais
                        alto nível, sem elevado nível de complexidade.
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
                            <li className="list-group-item d-flex justify-content-between" >
                                Victory <span className="text-success" > v33.1 </span>
                            </li>
                        </ul>
                    </div>
                    <hr/>
                    <h2><strong>Ferramentas mais Importantes</strong></h2>
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
                        ferramenta por linha de comando que permite a interação com os projetos antes aqui citados.
                    </p>
                    <h2> MongoDB </h2>
                    <p>
                        MongoDB é um banco de dados de propósito geral, baseado em documento e distribuído. Ser baseado em documento, 
                        significa que os dados armazenados são organizados de forma parecida com um JSON . Existem 
                        vários bancos NOSQL atualmente no mercado porque existem dezenas de problemas de persistência de dados que o SQL 
                        tradicional não resolve.
                    </p>
                    <p>
	                    O MongoDB foi criado com o BigData em mente, ou seja, ele aceita escalonamentos, tanto verticais, quanto horizontais, 
                        então ele acaba sendo uma opção interessante para grande volumes de dados, especialmente os desestruturados, que seriam
                        um problema para a imensa maioria dos bancos relacionais.
                    </p>
                    <hr />
                    <h2><strong>Funcionalidades do Sistema</strong></h2>
                    <h2> Cadastro de Projetos </h2>
                    <p>
                        Na área de cadastro de projeto, é possível digitando todas as informações necessárias, realizar
                        o cadastro de um projeto no sistema. Após o cadastro, o projeto será exibido na área de projetos
                        e estará disponível para receber um <i>"Feedback"</i> na área de <i>"Feedback"</i>
                    </p>
                    <h2> Filtro de projetos e paginação </h2>
                    <p>
                        Na área de exibição de projetos, há uma seção de filtros, onde o usuário pode filtrar
                        seus resultados com base em dois critérios: "Categoria" e "Sala". Os resultados retornados terão
                        base aos filtros utilizados.
                    </p>
                    <p>
                        A página também usa um sistema de paginação, onde apenas uma parcela dos resultados são retornados
                        (No caso desse sistema, 5 de cada vez), isso além de organizar a visualização dos item, ainda ajuda
                        sistemas maiores a não sobrecarregar com muitas requisições.
                    </p>
                    <h2> <i>"Feedback"</i> </h2>
                    <p>
                        Na área de <i>"Feedback"</i>, é possivel dar sua opinião sobre este projeto e votar no projeto que você
                        mais gostou em cada categoria existente(Nesse caso, duas). Os dados obtidos são utilizados para alimentar
                        os gráficos existentes na área de estatísticas.
                    </p>
                </div>
            </Main>
        )
    }
    
}