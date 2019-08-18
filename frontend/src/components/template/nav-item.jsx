import React from "react";

export default props => {
    return (
        <div className="nav-item col-4 col-md-12">
            <a href={props.link}>
                <i className={`fa fa-${props.icon}`}></i> {props.item}
            </a>
        </div>
    )
}