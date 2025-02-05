import React from "react";
import WeekCalendar from "./WeekCalender";
import "../styles/home.css";
import "../styles/weekcalender.css";

const Home = () => {
  return (
    <div className="home-container">
      <WeekCalendar />
    </div>
  );
};

export default Home;
