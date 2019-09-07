import React from "react";
import "./header.scss";
import Logo from "../shared/logo/logo";

const header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="header__avatar">T</div>
    </div>
  );
};
export default header;
