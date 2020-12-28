import React from "react";
import Aux from "../../hoc/Auxillary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";

const layout = props => (
    <Aux>
        <Toolbar />
        <main className="Layout">
            {props.children}
        </main>
    </Aux>
);

export default layout;