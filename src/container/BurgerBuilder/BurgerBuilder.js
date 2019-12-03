import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";
import OrderSummary from "../../component/Burger/OrderSummary/OrderSummary";
import Model from "../../component/UI/Model/Model";

const INGREDIANTS_PRICE = {
  salad: 15,
  cheese: 20,
  meat: 25,
  myonnaise: 15
};

class BurgerBuilder extends Component {
  state = {
    ingrediants: {
      salad: 0,
      cheese: 0,
      meat: 0,
      myonnaise: 0
    },
    totalPrice: 15,
    purchasable: false,
    purchasing: false
  };

  purchaseInfo(ing) {
    const sum = Object.keys(ing)
      .map(igkey => {
        return ing[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngHandler = type => {
    console.log(type);
    const oldCount = this.state.ingrediants[type];
    console.log(oldCount);
    const updatedCount = oldCount + 1;
    const updatedIngrediant = { ...this.state.ingrediants };
    updatedIngrediant[type] = updatedCount;
    console.log(updatedIngrediant);
    const priceAddition = INGREDIANTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = priceAddition + oldPrice;
    this.setState({ totalPrice: newPrice, ingrediants: updatedIngrediant });
    this.purchaseInfo(updatedIngrediant);
  };

  removeIngHandler = type => {
    const oldCount = this.state.ingrediants[type];
    console.log(oldCount);
    if (oldCount === 0) {
      alert(
        "Hey hey! " +
          type.charAt(0).toUpperCase() +
          type.slice(1) +
          " is already missing\n Add " +
          type.charAt(0).toUpperCase() +
          type.slice(1) +
          " and ENJOY YOUR BURGER."
      );
    } else {
      const updatedCount = oldCount - 1;
      const updatedIngrediant = { ...this.state.ingrediants };
      updatedIngrediant[type] = updatedCount;
      console.log(updatedIngrediant);
      const priceDeduction = INGREDIANTS_PRICE[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;
      this.setState({ totalPrice: newPrice, ingrediants: updatedIngrediant });
      this.purchaseInfo(updatedIngrediant);
    }
  };
  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  pruchaseContinueHadler = () => {
    alert("You can continue...");
  };
  render() {
    const disabledInfo = { ...this.state.ingrediants };
    console.log(disabledInfo);
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    console.log(disabledInfo);
    return (
      <Aux>
        <Model
          show={this.state.purchasing}
          modalClicked={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingrediants={this.state.ingrediants}
            pruchaseContinueHadler={this.pruchaseContinueHadler}
            purchaseCancelHandler={this.purchaseCancelHandler}
            price={this.state.totalPrice}
          />
        </Model>
        <Burger ingrediants={this.state.ingrediants} />
        <BuildControls
          add={this.addIngHandler}
          remove={this.removeIngHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchase={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
