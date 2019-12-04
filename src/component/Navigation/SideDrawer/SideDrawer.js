import React from "react";
import Logo from "../../../component/LOGO/logo";
import NavigationItems from "../NavigationItems";
import "./SideDrawer.css";
import Aux from "../../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = props => {
  return (
    <Aux>
      {<Backdrop show="true" />}
      <div className="SideDrawer">
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
