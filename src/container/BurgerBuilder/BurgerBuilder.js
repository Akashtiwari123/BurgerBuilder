import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingrediants: {
      salad: 2,
      cheese: 1,
      meat: 1,
      myonnaise: 1
    }
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
