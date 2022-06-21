import React from "react";
import CV from "../../assets/VICENTE_BAYÚGAR_RESUME.pdf";

const CVC = () => {
  return (
    <div className="cvc">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk!
      </a>
    </div>
  );
};

export default CVC;
