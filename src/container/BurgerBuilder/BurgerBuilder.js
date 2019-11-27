import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../component/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingrediants: {
      salad: 0,
      cheese: 0,
      meat: 0,
      myonnaise: 0
    }
  };
  render() {
    return (
      <Aux>
        <div>
          <Burger ingrediants={this.state.ingrediants} />
        </div>
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
