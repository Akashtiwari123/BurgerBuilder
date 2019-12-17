import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className="NavigationItems">


    <NavigationItem link="/" active="false">Burger Builder</NavigationItem>
    <NavigationItem link="/orders" active="true">Orders</NavigationItem>

  </ul>
);

export default navigationItems;
