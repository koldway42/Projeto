import React from "react"

import { Switch, Route, Redirect } from "react-router"

import Home from "../components/home/home"
import User from "../components/user/user"
import RegisterProject from "../components/register-project/register-project"

export default props => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={User} />
            <Route path="/register" component={RegisterProject} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}