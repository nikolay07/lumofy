import React from "react";
import "./styles.scss";

const MessageInput = () => {
  return (
    <div className="input-field">
      <input placeholder="Type message"></input>
      <div className="input-field__img">
        <img className="input-field__smile" src={require("../../img/smile.svg")} alt="Emodzi" />
        <img
          className="input-field__paperclip"
          src={require("../../img/paperclip.svg")}
          alt="Add File"
        />
        <img className="input-field__send" src={require("../../img/send.svg")} alt="Send" />
      </div>
    </div>
  );
};

export default MessageInput;
