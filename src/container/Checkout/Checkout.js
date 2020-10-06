import React, { Component } from "react";
import CheckoutSummary from "../../component/Order/checkoutSummary/ChechkoutSummary";
import { Route } from "react-router-dom";
import ContactData from "../Checkout/ContactData/Contactdata";

class Checkout extends Component {
  state = {
    ingrediants: null,
    price: 0
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingrediants = {};
    let price = 0;
    for (let param of query.entries()) {
      // [salad,1]
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingrediants[param[0]] = +param[1];
      }
    }
    this.setState({ ingrediants: ingrediants, totalPrice: price });
  }

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
          ingrediants={this.state.ingrediants}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => (
            <ContactData
              ingrediants={this.state.ingrediants}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
export default Checkout;
