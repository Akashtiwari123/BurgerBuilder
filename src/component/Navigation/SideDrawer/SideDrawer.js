import React from "react";
import Logo from "../../../component/LOGO/logo";
import NavigationItems from "../NavigationItems";
import "./SideDrawer.css";

const sideDrawer = props => {
  return (
    <div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
