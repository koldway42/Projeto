import React from "react"
import {HashRouter} from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "react-bootstrap/dist/react-bootstrap.min.js"
import "font-awesome/css/font-awesome.min.css"

import "./app.css"

import Header from "../components/template/header"
import Aside from "../components/template/aside"
import Router from "./routes"

export default props => {
    return (
        <HashRouter>
            <div id="App">
                <Aside />
                <div id="page-wrap">
                    <Header />
                    <Router />
                </div>
            </div>
        </HashRouter>
    )
}