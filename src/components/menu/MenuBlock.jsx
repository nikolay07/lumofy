import React from "react";
import "./styles.scss";

const MenuBlock = ({ name, image }) => {
  return (
    <div className="menu-block">
      <img src={image} alt="icon" />
      <span className="menu-block_text">{name}</span>
    </div>
  );
};

export default MenuBlock;
