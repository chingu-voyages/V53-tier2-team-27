import React, { useState } from "react";
import logo from "./menuschedulericon 1.png";
import logoTitle from "./menuschedulertitle 1.png";
import Modal from "../Modal/index";
import "./Header.css";

const Header = ({ allergies, setAllergies }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <img src={logoTitle} alt="Title" className="title" />
      </div>
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
    </header>
  );
};

export default Header;

