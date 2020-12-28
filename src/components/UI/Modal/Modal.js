import React from "react";
import "./Modal.css";
import Aux from "../../../hoc/Auxillary";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => (
    <Aux>
        <Backdrop show={props.show} backdropDisplay={props.modalDisplay}/>
        <div
            className="Modal"
            style={{
                transform: props.show? "translateY(0)" : "translate(-100vh)",
                opacity: props.show? "1" : "0"
            }}
        >
            {props.children}
        </div>
    </Aux>
);

export default Modal;