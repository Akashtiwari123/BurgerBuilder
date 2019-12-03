import React from "react";
import "./logo.css";
import imgLogo from "../../assets/Images/burger-logo.png";

const logo = props => (
  <div className="logo">
    <img src={imgLogo} alt="burger" />
  </div>
);

export default logo;
