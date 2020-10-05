import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import { createStore } from "redux";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
      {console.log("Redux There You Are!!")}
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, rootElement);
