import React from "react";
import "./styles.scss";
// import "../../img/group.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={require("../../img/lumofy.PNG")} alt="Lumofy" />
      </div>
      <div className="header-search">
        <input className="header__input" placeholder="search" />
        <img
          src={require("../../img/search.svg")}
          alt="search"
          className="header__btn_search"
        />
        <img src={require("../../img/email.svg")} alt="email" className="header__btn_email" />
        <img src={require("../../img/offer.svg")} alt="offer" className="header__btn_offer" />
        <div className="header__btn_red"></div>
        <button className="header__btn">
          <img src={require("../../img/group.svg")} alt="group" className="header__btn_img" />
          <span className="header__btn_text">My Dashboard</span>
        </button>
        <div className="fio">
          <span className="fio__text">AM</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
