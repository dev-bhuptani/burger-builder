import React from "react";
import "./Modal.css";

const Modal = props => (
    <div className="Modal">
        {props.children}
    </div>
);

export default Modal;