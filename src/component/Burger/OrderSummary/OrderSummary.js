import React from "react";
import AUX from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingrediants = Object.keys(props.ingrediants).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>
          {igKey} : {props.ingrediants[igKey]}
        </span>
      </li>
    );
  });
  return (
    <AUX>
      <h3> Your Order</h3>
      <p>A delicacy in the Burger with following ingrediants:</p>
      <ul>{ingrediants}</ul>
      <p>Total Price: Rs.{props.price}</p>
      <p>Continue checkout ?</p>
      <div style={{ marginLeft: 0, paddingLeft: 0 }}>
        <Button clicked={props.purchaseCancelHandler} name="cancel">
          CANCEL
        </Button>
        <Button clicked={props.pruchaseContinueHadler} name="continue">
          CONTINUE
        </Button>
      </div>
    </AUX>
  );
};

export default orderSummary;
