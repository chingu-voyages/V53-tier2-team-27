import React, { useState } from "react";
import logo from "./menuschedulericon 1.png";
import logoTitle from "./menuschedulertitle 1.png";
import Modal from "../Modal/index";
import "./Header.css";

const Header = ({ allergies, setAllergies }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <span>
        <img src={logo} alt="Logo" className="img" />
        <img src={logoTitle} alt="Logo" className="img" />
      </span>
      <button className="btn" onClick={() => setIsOpen(true)}>
        Adjust Allergy Preferences
      </button>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          allergies={allergies}
          setAllergies={setAllergies}
        />
      )}
      {/* <button className="btn">Adjust Allergy Preferences</button> */}
    </div>
  );
};

export default Header;
