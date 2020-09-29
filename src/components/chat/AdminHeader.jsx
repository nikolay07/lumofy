import React from "react";
import "./styles.scss";

const AdminHeader = () => {
  return (
    <div className="admin-header">
      <div className="admin-header__init">
        <span>MI</span>
      </div>
      <div className="admin-header__text">
        <h3>Mohammed Ibrahim</h3>
        <p>Administrator</p>
      </div>
    </div>
  );
};

export default AdminHeader;
