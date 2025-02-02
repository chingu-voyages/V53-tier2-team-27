import React from "react";
import WeekCalendar from "./WeekCalender";
import Title from "./Title";
import "../styles/home.css";
import "../styles/weekcalender.css";
import "../styles/title.css";

const Home = () => {
  return (
    <div className="home-container">
      <Title />
      <WeekCalendar />
    </div>
  );
};

export default Home;
