import React, {Component} from "react";
import Aux from '../../hoc/Auxillary';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
        totalPrice: 4,
        purchasable: false,
        ordering: false
    };

    updatePurchaseState = ingredients => {
        let ingrdSum = 0;
        for(let ingrd in ingredients) {
            ingrdSum += ingredients[ingrd];
        }
        this.setState({purchasable: ingrdSum > 0})
    }

    addIngredientHandler = type => {
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = this.state.ingredients[type] + 1;
        const updatedprice = INGREDIENT_PRICES[type] + this.state.totalPrice;
        this.setState({totalPrice: updatedprice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = type => {
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = this.state.ingredients[type] - 1;
        const updatedprice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({totalPrice: updatedprice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    orderButtonHandler = () => {
        this.setState({ordering: true});
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.ordering}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    orderButtonDisabledInfo={!this.state.purchasable}
                    orderButton={this.orderButtonHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;