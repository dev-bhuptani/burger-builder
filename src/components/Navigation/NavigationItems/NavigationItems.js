import React from "react";
import "./NavigationItems.css";

const navigationItems = props => (
    <ul className="NavigationItems">
        <li className="NavigationItem">
            <a href="/" className="active">Burger Builder</a>
        </li>
        <hr style={{borderBottom: "1px solid #cf8f2e", width: "90%", margin: "0"}} />
        <li className="NavigationItem">
            <a href="/">Checkout</a>
        </li>
    </ul>
);

export default navigationItems;