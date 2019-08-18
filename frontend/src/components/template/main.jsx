import React from "react";

import "./main.css"

export default props => {
    return (
        <main className="content container-fluid p-0 p-md-2">
            <div className="p-md-3">
                {props.children}
            </div>
        </main>
    )
}