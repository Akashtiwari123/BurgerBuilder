import React from "react";
import "./Model.css";
import AUX from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

const model = props => (
  <AUX>
    <div className="Box">Scroll</div>
    <Backdrop show={props.show} click={props.modalClicked} />
    <div
      className="Mod"
      style={{
        transform: props.show ? "translateX(40vh)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </AUX>
);

export default model;
