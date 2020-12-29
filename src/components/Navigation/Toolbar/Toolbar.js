import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./Toolbar.css";

const toolbar = props => (
    <header className="Toolbar">
        <div className="DrawerToggle" onClick={props.menuClicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <Logo height="80%"/>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;