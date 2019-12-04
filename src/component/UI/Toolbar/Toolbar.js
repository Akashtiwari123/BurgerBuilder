import React from "react";
import "./Toolbar.css";
import Logo from "../../LOGO/logo";
import NavigationItems from "../../Navigation/NavigationItems";

const toolbar = props => {
  return (
    <header className="toolbar">
      <div>Menu</div>
      <Logo height="80%" />
      <NavigationItems />
    </header>
  );
};

export default toolbar;
