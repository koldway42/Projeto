import React, {Component} from "react";
import BurgerMenu from "react-burger-menu"
import "./aside.css"
import logo from "../../assets/img/logo.png"
import "./logo.css"

export default class aside extends Component {

    render() {
        const Menu = BurgerMenu["scaleRotate"]
        return (
            <Menu id="scaleRotate" pageWrapId={"page-wrap"} outerContainerId={"App"}>
                <div id="logo">
                    <a href="#/">
                        <img src={logo} alt="Aiki"/>
                        <h1 className="mr-3 ml-0">
                            AIKI
                        </h1>
                    </a>
                </div>
                
                <a href="#/" className="menu-item">
                    <i className={`fa fa-lg fa-home mr-2`}></i> Início
                </a>
                <a href="#/documentation" className="menu-item">
                    <i className={`fa fa-lg fa-book mr-2`}></i> Documentação
                </a>
                <a href="#/projects" className="menu-item">
                    <i className={`fa fa-lg fa-clipboard mr-2`}></i> Projetos
                </a>
                <a href="#/feedback" className="menu-item">
                    <i className={`fa fa-lg fa-list-alt mr-2`}></i> Feedback
                </a>
                <a href="#/contact" className="menu-item">
                    <i className={`fa fa-lg fa-phone-square mr-2`}></i> Contato
                </a>
            </Menu>
        );
    }
}
