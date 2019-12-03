import React from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";
import Toolbar from "../UI/Toolbar/Toolbar";

const layout = props => (
  <Aux>
    <Toolbar></Toolbar>
    <main className="Content">{props.children}</main>
  </Aux>
);

export default layout;
