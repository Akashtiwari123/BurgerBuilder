import React, { Component } from "react";
import CheckoutSummary from "../../component/Order/checkoutSummary/ChechkoutSummary";

class Checkout extends Component {
  state = {
    ingrediants: {
      salad: 1,
      chesse: 0,
      myonnaise: 0,
      meat: 0
    }
  };

  checkoutCancelHandler = () => {
    this.props.history.getBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-id");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelHandler={this.checkoutCancelHandler}
          checkoutContinueHandler={this.checkoutContinueHandler}
          ingrediants={this.state.ingrediants}
        />
      </div>
    );
  }
}
export default Checkout;
