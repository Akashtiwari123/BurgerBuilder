import React, { Component } from "react";
import Button from "../../../component/UI/Button/Button";
import "./Details.css";
import Spinner from "../../../component/UI/Spinner/Spinner";
import Axios from "../../../axios-orders";
import Input from "../../../component/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-Mail"
        },
        value: ""
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: ""
      },
      postalCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "PinCode"
        },
        value: ""
      },
      DeliveryMode: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayMode: "Fastest" },
            { value: "normal", displayMode: "Normal" }
          ]
        },
        value: ""
      }
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingrediants: this.props.ingrediants,
      price: this.props.price
    };

    Axios.post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => this.setState({ loading: false }));
  };

  render() {
    let form = (
      <form>
        <Input elementType=".." elementConfig=".." value=".." />
        <Input
          inputType="input"
          type="email"
          name="email"
          placeholder="Email"
        />
        <Input
          inputType="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          inputType="input"
          type="text"
          name="pincode"
          placeholder="pincode"
        />
        <Button name="continue" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div
        style={{
          margin: "20px auto",
          width: "400px",
          textAlign: "center",
          border: "2px solid #ccee",
          boxShadow: "0 2px 4px #ccee",
          padding: "10px",
          boxSizing: "border-box"
        }}
      >
        <h4>Enter your contact details</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
