import React from "react";
import "../styles/header.css";
import logo from "./assets/imgs/logo.png";

  const Header = () => (
    <header className="header">
    <div className = "navbar-brand"><img src={require('./assets/imgs/logo.png')} /> </div>
      <h1>Welcome</h1>
    </header>
  );

  export default Header;