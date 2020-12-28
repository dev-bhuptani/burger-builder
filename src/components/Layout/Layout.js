import React from "react";
import Aux from "../../hoc/Auxillary";
import "./Layout.css";

const layout = props => (
    <Aux>
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main className="Layout">
            {props.children}
        </main>
    </Aux>
);

export default layout;