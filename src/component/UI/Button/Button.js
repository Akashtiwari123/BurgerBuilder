import React from "react";
import "./Button.css";

const button = props => {
  return props.name === "cancel" ? (
    <button className={["Button", "Danger"].join(" ")} onClick={props.clicked}>
      {props.children}
    </button>
  ) : (
    <button className={["Button", "Success"].join(" ")} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;
