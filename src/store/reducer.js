import * as actionTypes from "./actions";

const initialState = {

  ingrediants: {
    salad: 0,
    cheese: 0,
    meat: 0,
    myonnaise: 0
  },
  totalPrice: 15
};

const INGREDIANTS_PRICE = {
  salad: 15,
  cheese: 20,
  meat: 25,
  myonnaise: 15
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIANT:
      return {
        ...state,
        ingrediants: {
          ...state.ingrediants,
          [action.ingrediantName]: state.ingrediants[action.ingrediantName] + 1

        },
        totalPrice: state.totalPrice + INGREDIANTS_PRICE[action.ingrediantName]
      };
    case actionTypes.REMOVE_INGREDIANT:
      return {
        ...state,
        ingrediants: {
          ...state.ingrediants,
          [action.ingrediantName]: state.ingrediants[action.ingrediantName] - 1

        },
        totalPrice: state.totalPrice - INGREDIANTS_PRICE[action.ingrediantName]
      };
    default:
      return state;
  }
};

export default reducer;
