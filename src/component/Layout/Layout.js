import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";
import Toolbar from "../UI/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
