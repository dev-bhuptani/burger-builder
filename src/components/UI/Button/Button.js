import React from "react";
import "./Button.css";

const button = props => {
    const btnClasses = "Button " + props.btnType;
    return (
        <button className={btnClasses} onClick={props.clicked}>
            {props.children}
        </button>
    );
};

export default button;