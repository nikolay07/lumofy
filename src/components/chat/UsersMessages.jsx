import React from "react";
import "./styles.scss";

const UsersMessages = () => {
  return (
    <div className="messages">
      <div className="messages__avatar">
        <img src={require("../../img/image5@2x.png")} alt="User" />
      </div>
      <div className="messages__block">
        <div className="messages__block_name-time">
          <h3>Ahmed Mohammed</h3>
          <span>1 hours ago</span>
        </div>
        <div className="messages__block_text">
          <span>
            Lorem ipsum dolor sit amet, consect adipiscing elit. Lorem ipsum dolor sit amet, consect
            adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Lorem ipsum dolor
            sit amet, consect adipiscing elit.
          </span>
        </div>
      </div>
    </div>
  );
};

export default UsersMessages;
