import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";
import Toolbar from "../UI/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  cancelSideDrower = () => {
    this.setState({ showSideDrawer: false });
    console.log("cancel " + this.state.showSideDrawer);
  };

  sideDrawToggle = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar DrawToggle={this.sideDrawToggle} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.cancelSideDrower}
        />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
