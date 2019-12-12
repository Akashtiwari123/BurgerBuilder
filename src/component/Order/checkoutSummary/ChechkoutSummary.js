import React from "react";
import Burger from "../../Burger/Burger";

import Button from "../../UI/Button/Button";

const chechkoutSummary = props => {
  return (
    <div>
      <Burger ingrediants={props.ingrediants} />
      <Button name="cancel" clicked={props.checkoutCancelHandler}>
        Cancel
      </Button>
      <Button name="continue" clicked={props.checkoutContinueHandler}>
        Continue
      </Button>
    </div>
  );
};

export default chechkoutSummary;
