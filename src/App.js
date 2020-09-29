import React from "react";
import "./styles/index.scss";
import Header from "./components/header/Header";
import MenuPanel from "./components/menu/MenuPanel";
import NavigationPanel from "./components/navigation/NavigationPanel";
import Chat from "./components/chat/Chat";
import ContactsList from "./components/contacts/ContactsList";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="main">
      <div className="header-block">
        <Header />
      </div>
      <div className="menu-panel">
        <MenuPanel />
      </div>
      <div className="navigation-panel">
        <NavigationPanel />
      </div>
      <div className="chat">
        <Chat />
      </div>
      <div className="contacts-list">
        <ContactsList />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
