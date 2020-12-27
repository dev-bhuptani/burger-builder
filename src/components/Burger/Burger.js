import React from "react";
import "../Burger/Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
    const ingredients = Object.keys(props.ingredients).map(ingrd => {
        return [...Array(props.ingredients[ingrd])].map((_, i) => {
            return <BurgerIngredient key={ingrd + i} type={ingrd} />;
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {ingredients.length === 0? <p>Please start adding ingredients!</p> : ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;