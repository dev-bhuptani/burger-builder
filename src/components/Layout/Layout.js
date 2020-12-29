import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    backdropDisplayHandler = () => {
        this.setState({showSideDrawer: false});
    }

    menuClickedHandler = () => {
        this.setState({showSideDrawer: true});
    }

    render() {
        return (
            <Aux>
                <Toolbar menuClicked={this.menuClickedHandler} />
                <SideDrawer showSideDrawer={this.state.showSideDrawer} backdropDisplay={this.backdropDisplayHandler} />
                <main className="Layout">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;