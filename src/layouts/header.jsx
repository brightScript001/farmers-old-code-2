import React from "react";
import { config } from "../content/header.config";
import NotificationIcon from "../assets/icons/bell.svg";
import "../styles/header.css";
import SearchBar from "../components/searchBar";

const Header = () => {
  return (
    <header className="header">
      <div className="back-button">
        <i className="fas fa-chevron-left"></i>
        <span>Home</span>
      </div>
      <SearchBar />
      <div>
        <img
          src={NotificationIcon}
          alt="Notification Icon"
          className="notification-icon"
        />
      </div>
      <div className="profile">
        <img src={config.avatar} alt="Avatar" className="profile-avatar" />
        <span className="profile-name">{config.name}</span>
      </div>
    </header>
  );
};

export default Header;
