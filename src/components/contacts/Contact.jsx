import React from "react";
import "./styles.scss";

const Contact = ({ name, image }) => {
  console.log(image);

  return (
    <div className="contact">
      <img src={image} alt="name" />
      <span>{name}</span>
    </div>
  );
};

export default Contact;
