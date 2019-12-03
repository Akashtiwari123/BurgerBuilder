import React from "react";
import "./Toolbar.css";
import Logo from "../../LOGO/logo";

const toolbar = props => {
  return (
    <header className="toolbar">
      <div>Menu</div>
      <Logo />
      <nav>...</nav>
    </header>
  );
};

export default toolbar;
