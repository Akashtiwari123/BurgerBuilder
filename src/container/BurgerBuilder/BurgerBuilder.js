import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";
import OrderSummary from "../../component/Burger/OrderSummary/OrderSummary";
import Model from "../../component/UI/Model/Model";
import Axios from "../../../src/axios-orders";
import Spinner from "../../component/UI/Spinner/Spinner";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    loading: false
  };

  componentDidMount() {
    console.log(this.props);
    // axios
    //   .get("https://burgerbuilder-2e72a.firebaseio.com/ingrediants.json")
    //   .then(response => {
    //     this.setState({ ingrediants: response.data });
    //   });
    // console.log("fetching data...");
  }

  purchaseInfo(ings) {
    const sum = Object.keys(ings)
      .map(igkey => {
        return ings[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push("/checkout");
  };

  render() {
    const disabledInfo = { ...this.props.ing };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = <Spinner />;


    if (this.props.ing) {
      burger = (
        <Aux>
          <Burger ingrediants={this.props.ing} />
          <BuildControls
            add={this.props.onIngrediantAdded}
            remove={this.props.onIngrediantRemove}
            disabled={disabledInfo}
            price={this.props.price}
            purchase={this.purchaseInfo(this.props.ing)}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingrediants={this.props.ing}
          purchaseContinueHandler={this.purchaseContinueHandler}
          purchaseCancelHandler={this.purchaseCancelHandler}
          price={this.props.price}
        />
      );

      if (this.state.loading) {
        orderSummary = <Spinner />;
      }
    }
    return (
      <Aux>
        <Model
          show={this.state.purchasing}
          modalClicked={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Model>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {

    ing: state.ingrediants,
    price: state.totalPrice
  };
};

const mapDispatchToProps = dispatch => {

  return {
    onIngrediantAdded: ingName =>
      dispatch({ type: actionTypes.ADD_INGREDIANT, ingrediantName: ingName }),
    onIngrediantRemove: ingName =>
      dispatch({ type: actionTypes.REMOVE_INGREDIANT, ingrediantName: ingName })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(BurgerBuilder, Axios));
