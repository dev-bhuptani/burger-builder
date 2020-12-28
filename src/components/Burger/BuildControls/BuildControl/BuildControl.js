import React from "react";
import "./BuildControl.css";

const buildControl = props => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button className="Less" onClick={props.removeIngredient} disabled={props.disabled}><strong>-</strong></button>
        <button className="More" onClick={props.addIngredient}><strong>+</strong></button>
    </div>
);

export default buildControl;