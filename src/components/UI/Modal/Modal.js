import React from "react";
import "./Modal.css";

const Modal = props => (
    <div
        className="Modal"
        style={{
            transform: props.show? "translateY(0)" : "translate(-100vh)",
            opacity: props.show? "1" : "0"
        }}
    >
        {props.children}
    </div>
);

export default Modal;