import "./Order.css";
import React from "react";

const order = props => {
  const ingrediants = [];

  for (let ingrediantName in props.ingrediants) {
    ingrediants.push({
      name: ingrediantName,
      amount: props.ingrediants[ingrediantName]
    });
  }

  const ingrediantOutput = ingrediants.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name}-{ig.amount}
      </span>
    );
  });

  return (
    <div className="Order">
      <p>Ingrediants : {ingrediantOutput}</p>
      <p>Total Price :{props.price}</p>
    </div>
  );
};

export default order;
