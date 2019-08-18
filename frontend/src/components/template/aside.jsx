import React from "react"

import Logo from "./logo"
import Nav from "./nav"
import Footer from "./footer"

export default props => {
    return (
        <React.Fragment>
            <Logo />
            <Nav />
            <Footer />
        </React.Fragment>
    )
}