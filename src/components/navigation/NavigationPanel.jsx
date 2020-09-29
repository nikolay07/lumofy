import React from "react";
import "./styles.scss";

const NavigationPanel = () => {
  return (
    <div className="navigation-block">
      <span>Home </span>
      <span className="arrow">{`>`}</span>
      <span>Messages </span>
    </div>
  );
};

export default NavigationPanel;
