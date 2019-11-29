import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Myonnaise", type: "myonnaise" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => {
  return (
    <div className="BuildControls">
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          add={() => props.add(ctrl.type)}
          remove={() => props.remove(ctrl.type)}
        />
      ))}
    </div>
  );
};

export default buildControls;
