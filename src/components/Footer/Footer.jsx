import React from "react";
import "./Footer.css";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer_socials">
        <a href="https://www.instagram.com/vicenbayugar/">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/vicente-bayugar/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/VicenBayugar">
          <FaGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <p>&copy; Vicente Bayúgar</p>
      </div>
    </footer>
  );
};

export default Footer;
