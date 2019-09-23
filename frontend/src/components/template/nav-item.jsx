import React from "react";

export default props => {
    return (
        <div className="m-0 col-12">
            <a href={props.link}>
                <i className={`fa mr-3 fa-lg fa-${props.icon}`}></i> {props.item}
            </a>
        </div>
    )
}