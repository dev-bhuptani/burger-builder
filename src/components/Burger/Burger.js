import React from "react";
import "../Burger/Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;