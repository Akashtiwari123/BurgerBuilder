import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";

const INGREDIANTS_PRICE = {
  salad: 15,
  cheese: 20,
  meat: 25,
  myonnaise: 15
};
class BurgerBuilder extends Component {
  state = {
    ingrediants: {
      salad: 2,
      cheese: 1,
      meat: 1,
      myonnaise: 1
    },
    totalPrice: 10
  };

  addIng = type => {
    const oldCount = this.state.ingrediants[type];
    const updatedCount = oldCount + 1;
    const updatedIngrediant = [...this.state.ingrediants];
    updatedIngrediant[type] = updatedCount;
    const priceAddition = INGREDIANTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = priceAddition + oldPrice;
    this.setState({ totalPrice: newPrice, ingrediants: updatedIngrediant });
  };

  removeIng = type => {
    const oldCount = this.state.ingrediants;
    const updatedCount = oldCount - 1;
    const updatedIngrediant = [...this.state.ingrediants];
    updatedIngrediant[type] = updatedCount;
    const priceDeduction = INGREDIANTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingrediants: updatedIngrediant });
  };

  render() {
    return (
      <Aux>
        <div>
          <Burger ingrediants={this.state.ingrediants} />
        </div>
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;
