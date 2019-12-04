import React from "react";
import "./logo.css";
import imgLogo from "../../assets/Images/burger-logo.png";

const logo = props => (
  <div className="logo" style={{ height: props.height }}>
    <img className="img" src={imgLogo} alt="burger" />
  </div>
);

export default logo;
