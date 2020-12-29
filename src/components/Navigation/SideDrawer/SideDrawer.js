import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Aux from "../../../hoc/Auxillary";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./SideDrawer.css";

const sideDrawer = props => {
    let sideDrawerClasses = "SideDrawer Close";
    
    if(props.showSideDrawer) {
        sideDrawerClasses = "SideDrawer Open";
    }

    return (
        <Aux>
            <Backdrop show={props.showSideDrawer} backdropDisplay={props.backdropDisplay} />
            <div className={sideDrawerClasses}>
                <div style={{display: "inline"}}>
                    <Logo height="11%" mobileWidth="80px"/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;