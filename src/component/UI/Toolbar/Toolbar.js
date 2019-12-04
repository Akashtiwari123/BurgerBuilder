import React from "react";
import "./Toolbar.css";
import Logo from "../../LOGO/logo";
import NavigationItems from "../../Navigation/NavigationItems";
import DrawToggle from "../../Navigation/SideDrawer/DrawToggle/DrawToggle";

const toolbar = props => {
  return (
    <header className="toolbar">
      <DrawToggle click={props.DrawToggle} />
      <Logo height="80%" />
      <NavigationItems />
    </header>
  );
};

export default toolbar;
