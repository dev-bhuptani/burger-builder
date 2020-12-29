import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";

const sideDrawer = props => {
    return (
        <div className="SideDrawer">
            <div style={{display: "inline"}}>
                <Logo height="11%" mobileWidth="80px"/>
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>

    );
}

export default sideDrawer;