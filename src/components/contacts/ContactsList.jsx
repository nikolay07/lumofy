import React from "react";
import "./styles.scss";
import Contact from "./Contact";

const ContactsList = () => {
  const contactList = [
    { name: "Ahmed Mohammed", image: require("../../img/image5@2x.png"), id: 1 },
    { name: "Mohammed Ibrahim", image: require("../../img/image6@2x.png"), id: 2 },
    { name: "Asmaa Ahmed", image: require("../../img/image4@2x.png"), id: 3 },
  ];
  return (
    <div className="contacts-list-block">
      <input placeholder="search members" />
      <img src={require("../../img/search.svg")} alt="search" className="loop" />
      {contactList.map((contact) => (
        <Contact name={contact.name} image={contact.image} key={contact.id} />
      ))}
    </div>
  );
};

export default ContactsList;
