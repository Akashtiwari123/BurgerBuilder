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
            { value: "cheapest", displayMode: "Cheapest" }
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
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const order = {
      ingrediants: this.props.ingrediants,
      price: this.props.price,
      orderData: formData
    };

    Axios.post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => this.setState({ loading: false }));
  };

  inputHandler = (event, inputidentifier) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormElement = { ...updatedOrderForm[inputidentifier] };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputidentifier] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };
  render() {
    let formElements = [];
    for (let key in this.state.orderForm) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElements.map(element => (
          <Input
            key={element.id}
            elementType={element.config.elementType}
            elementConfig={element.config.elementConfig}
            value={element.config.value}
            changed={event => this.inputHandler(event, element.id)}
          />
        ))}

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
