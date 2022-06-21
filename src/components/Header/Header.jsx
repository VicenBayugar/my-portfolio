import React from "react";
import "./Header.css";
import CVC from "./CVC";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="greeting">
          <h5>Hello! I'm</h5>
          <h1>Vicente Bayúgar</h1>
          <h5 className="text-light">FrontEnd Developer</h5>
          <CVC />
        </div>
        <HeaderSocials />
        <a href="#about" className="scroll_down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
