
import React, { Component } from "react";
import CheckoutSummary from "../../component/Order/checkoutSummary/ChechkoutSummary";
import { Route } from "react-router-dom";
import ContactData from "../Checkout/ContactData/Contactdata";
import { connect } from "react-redux";

class Checkout extends Component {
  checkoutCancelHandler = () => {
    console.log("Cancel Getback");
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    console.log("Continue Getback");
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancelHandler={this.checkoutCancelHandler}
          checkoutContinueHandler={this.checkoutContinueHandler}
          ingrediants={this.props.ing}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          component={ContactData}
        />
        )} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ing: this.state.ingrediants,
    price: this.state.totalPrice
  };
};

export default connect(mapStateToProps)(Checkout);
