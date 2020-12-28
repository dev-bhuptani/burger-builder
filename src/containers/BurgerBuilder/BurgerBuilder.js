import React, {Component} from "react";
import Aux from '../../hoc/Auxillary';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.8
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4
    };

    addIngredientHandler = type => {
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = this.state.ingredients[type] + 1;
        const price = INGREDIENT_PRICES[type] + this.state.totalPrice;
        this.setState({totalPrice: price, ingredients: updatedIngredients});
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addIngredient={this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;