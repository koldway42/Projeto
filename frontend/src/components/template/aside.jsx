import React, {Component} from "react";
import BurgerMenu from "react-burger-menu"
import "./aside.css"
import logo from "../../assets/img/logo.png"
import "./logo.css"

export default class aside extends Component {

    handleActive(e) {
        let items =  document.getElementsByClassName("menu-item");
        items = [...items]
        items.map(item => {
            if(item.href === e.target.href) {
                item.id = "active";
            } else {
                item.id = ""
            }
        })
    }

    handleFirstActive() {
        const url = window.location.href;
        console.log(window.location.href)
        let items =  document.getElementsByClassName("menu-item");
        items = [...items]
        items.map(item => {
            if(item.href === url) {
                item.id = "active";
            }
        })
    }

    componentDidMount() {
        this.handleFirstActive()
    }

    render() {
        const Menu = BurgerMenu["scaleRotate"]
        return (
            <Menu id="scaleRotate" pageWrapId={"page-wrap"} outerContainerId={"App"}>
                <div id="logo" onClick={e => this.handleActive(e)}>
                    <a href="#/">
                        <img src={logo} alt="Aiki"/>
                        <h1 className="mr-3 ml-0">
                            AIKI
                        </h1>
                    </a>
                </div>
                
                <a href="#/" onClick={e => this.handleActive(e) } className="menu-item">
                    <i className={`fa fa-home`}></i> Início
                </a>
                <a href="#/projects" onClick={e => this.handleActive(e) } className="menu-item">
                    <i className={`fa fa-clipboard`}></i> Projetos
                </a>
                <a href="#/contact" onClick={e => this.handleActive(e) } className="menu-item">
                    <i className={`fa fa-phone-square`}></i> Contato
                </a>
            </Menu>
        );
    }
}
