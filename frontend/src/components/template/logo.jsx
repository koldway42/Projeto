import React from "react";

import "./logo.css"

import logo from "../../assets/img/logo.png"

export default props => {
    return (
        <aside className="logo">
            <a href="#/">
                <img src={logo} alt="Aiki"/>
                <h1 className="mr-3 ml-0">
                    AIKI
                </h1>
            </a>
        </aside>
    )
}