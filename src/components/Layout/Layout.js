import React from "react";
import Aux from "../../hoc/Auxillary";

const layout = props => (
    <Aux>
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;