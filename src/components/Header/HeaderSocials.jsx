import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/vicente-bayugar/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/VicenBayugar"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/vicenbayugar"
        target="_blank"
        rel="noreferrer"
      >
        <GrInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
