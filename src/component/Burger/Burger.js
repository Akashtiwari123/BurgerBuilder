import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let transformedIngrediants = Object.keys(props.ingrediants)
    .map(igKey => {
      //igkey is having the key like salad, cheese
      return [...Array(props.ingrediants[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngrediants.length === 0) {
    transformedIngrediants = <p>Please add ingrediants</p>;
  }

  console.log(transformedIngrediants);
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngrediants}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
