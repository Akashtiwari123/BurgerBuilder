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
      <h4>Total Price: {props.price}</h4>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          add={() => props.add(ctrl.type)}
          remove={() => props.remove(ctrl.type)}
          disabled={props.disabled[ctrl.type]}

        />
      ))}
      <button disabled={!props.purchase} className="OrderButtons"
      onClick={props.ordered}>
        Order
      </button>
    </div>
  );
};

export default buildControls;
