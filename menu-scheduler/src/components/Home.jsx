import React, { useState } from "react";
import WeekCalendar from "./WeekCalender";
import Title from "./Title";
import Modal from "./Modal";
import "../styles/home.css";
import "../styles/weekcalender.css";
import "../styles/title.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="home-container">
      <Title />
      <WeekCalendar />
      <button className="add-button" onClick={() => setIsOpen(true)}>Set Allergies</button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Home;
