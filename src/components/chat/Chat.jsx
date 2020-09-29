import React from "react";
import "./styles.scss";
import AdminHeader from "./AdminHeader";
import AdminMessages from "./AdminMessages";
import UsersMessages from "./UsersMessages";
import MessageInput from "./MessageInput";

const Chat = () => {
  return (
    <div className="chat-block">
      <AdminHeader />
      <UsersMessages />
      <AdminMessages />
      <MessageInput />
    </div>
  );
};

export default Chat;
