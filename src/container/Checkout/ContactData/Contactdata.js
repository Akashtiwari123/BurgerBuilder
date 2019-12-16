import React, { Component } from "react";
import Button from "../../../component/UI/Button/Button";
import "./ContactData.css";
import Spinner from "../../../component/UI/Spinner/Spinner";
import Axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    adddress: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingrediants: this.props.ingrediants,
      price: this.props.price,
      customer: {
        name: "Sky",
        Address: {
          Add1: "Powai",
          City: "Mumbai",
          Pincode: "400024",
          State: "Maharashtra"
        },
        email: "test@test.com"
      },
      DeliveryMode: "Fast"
    };

    Axios.post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
      })
      .catch(error => this.setState({ loading: false }));
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="street" placeholder="Street" />
        <input type="text" name="pincode" placeholder="pincode" />
        <Button name="continue" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div classsName="ContactData">
        <h4>Enter your contact details</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
