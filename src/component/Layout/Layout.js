import React, { Component } from "react";
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
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar DrawToggle={this.sideDrawToggle} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.cancelSideDrower}
        />
        <main className="Content">{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
