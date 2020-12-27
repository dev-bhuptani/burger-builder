import React from "react";
import Aux from "../../hoc/Auxillary";

const layout = props => (
    <Aux>
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;