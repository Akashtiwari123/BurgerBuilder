import * as actionTypes from "./actions";

const initialState = {
  ingrediants: null,
  totalPrice: 15
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIANT:
      return {
        ...state,
        ingrediants: {
          ...state.ingrediants,
          [action.ingrediantName]: state.ingrediants[action.ingrediantName] + 1
        }
      };
    case actionTypes.REMOVE_INGREDIANT:
      return {
        ...state,
        ingrediants: {
          ...state.ingrediants,
          [action.ingrediantName]: state.ingrediants[action.ingrediantName] - 1
        }
      };
    default:
      return state;
  }
};

export default reducer;
