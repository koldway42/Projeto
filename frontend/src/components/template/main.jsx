import React from "react";

import "./main.css"
import Footer from "./footer"
export default props => {
    return (
        <main id="content" className="container-fluid">
            <div>
                {props.children}
            </div>
            <Footer />
        </main>
        
    )
}