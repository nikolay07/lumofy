import React from "react";
import "./styles.scss";

const AdminMessages = () => {
  return (
    <div className="messages admin">
      <div className="messages__block admin">
        <div className="messages__block_name-time">
          <h4>Mohammed Ibrahim</h4>
          <span>1 hours ago</span>
        </div>
        <div className="messages__block_text ">
          <span>Lorem ipsum dolor sit amet, consect adipiscing elit.</span>
        </div>
      </div>
      <div className="messages__avatar admin">
        <img src={require("../../img/image6@2x.png")} alt="Admin" />
      </div>
    </div>
  );
};

export default AdminMessages;
