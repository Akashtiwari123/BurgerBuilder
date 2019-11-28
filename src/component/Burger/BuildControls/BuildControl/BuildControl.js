import React from "react";
import "./BuildControl.css";
import BuildControls from "../BuildControls";

const removeIng = () => {};

const addIng = () => {};

const buildControl = props => (
  <div className="BuildControl">
    <div className="Label"> {props.label}</div>
    <button className="Less" onClick={() => removeIng(props.type)}>
      Less
    </button>
    <button className="More" onClick={() => addIng(props.type)}>
      More
    </button>
  </div>
);

export default buildControl;
