import React, { Component } from "react";
import Order from "../../component/Order/Order";
import axios from "axios";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentWillMount() {
    axios
      .get("https://burgerbuilder-2e72a.firebaseio.com/orders.json")
      .then(resp => {
        const fetchOrders = [];
        for (let key in resp.data) {
          fetchOrders.push({
            ...resp.data[key],
            id: key
          });
        }
        this.setState({ loading: false, orders: fetchOrders });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingrediants={order.ingrediants}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default Orders;
