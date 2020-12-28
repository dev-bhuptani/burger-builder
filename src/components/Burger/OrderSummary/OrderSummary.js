import React from "react";
import Aux from "../../../hoc/Auxillary";

const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(igrd => {
        return (
            <li key={igrd} style={{textTransform: "capitalize", listStyle: "none"}}>
                {igrd}: {props.ingredients[igrd]}
            </li>
        );
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
    );
}

export default OrderSummary;