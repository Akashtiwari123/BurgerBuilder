import React from "react";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingrediants = Object.keys(props.ingrediants).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>
          {igKey} : {props.ingrediants[igKey]}
        </span>
      </li>
    );
  });

  return (
    <React.Fragment>
      <h3> Your Order</h3>
      <p>A delicacy in the Burger with following ingrediants:</p>
      <ul>{ingrediants}</ul>
      <p>Total Price: Rs.{props.price}</p>
      <p>Continue checkout ?</p>
      <div style={{ display: "flex" }}>
        <Button clicked={props.purchaseCancelHandler} name="cancel">
          CANCEL
        </Button>
        <Button clicked={props.purchaseContinueHandler} name="continue">
          CONTINUE
        </Button>
      </div>
    </React.Fragment>
  );
};

export default orderSummary;
