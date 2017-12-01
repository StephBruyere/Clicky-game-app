import React from "react";
import "../styles/header.css";

  const Header = () => (
    <div className="panel-body header">
    <section className="row text-center">
    <div className="col-md-4 col-sm-12">
    <img className="brand" alt="logo" src='https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png' />
    </div>
    <div className="col-md-8 col-sm-12">
    <div className="navInfo"><span className=" glyphicon glyphicon-hand-up"></span>Score: </div>
    </div>
    </section>
    </div>
  );

  export default Header;