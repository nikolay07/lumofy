import React from "react";
import "./styles.scss";
import MenuBlock from "./MenuBlock";

const MenuPanel = () => {
  const blocksList = [
    { name: "Home", image: require("../../img/browser.svg"), id: 1 },
    { name: "Categories", image: require("../../img/app.svg"), id: 2 },
    { name: "Learning Paths", image: require("../../img/app.svg"), id: 3 },
    { name: "Courses", image: require("../../img/online-class.svg"), id: 4 },
    { name: "Assessment", image: require("../../img/app.svg"), id: 5 },
    { name: "Quizzes", image: require("../../img/app.svg"), id: 6 },
    { name: "Library", image: require("../../img/app.svg"), id: 7 },
  ];
  return (
    <div className="menu">
      {blocksList.map((block) => (
        <MenuBlock name={block.name} image={block.image} key={block.id} />
      ))}
    </div>
  );
};

export default MenuPanel;
