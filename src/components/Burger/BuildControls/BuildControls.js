import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"}
];

const buildControls = props => (
    <div className="BuildControls">
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => {
            return (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    addIngredient={() => {props.addIngredient(ctrl.type)}}
                    removeIngredient={() => {props.removeIngredient(ctrl.type)}}
                    disabled={props.disabledInfo[ctrl.type]}
                />
            );
        })}
        <button
            className="OrderButton"
            disabled={props.orderButtonDisabledInfo}
            onClick={props.orderButton}
        >
            ORDER
        </button>
    </div>
);

export default buildControls;