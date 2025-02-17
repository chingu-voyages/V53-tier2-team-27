import { useState } from "react";
import WeekCalendar from "./components/WeekCalender";
import FooterTeam from "./components/FooterTeam";
import Header from "./components/Header/Header";
import "./styles/home.css";
import "./styles/weekcalender.css";
import "./App.css";

function App() {
  const [allergies, setAllergies] = useState([]);
  const [menu, setMenu] = useState([]);

  return (
    <>
      <Header allergies={allergies} setAllergies={setAllergies} />
      <div className="home-container">
        <WeekCalendar
          allergies={allergies}
          setAllergies={setAllergies}
          menu={menu}
          setMenu={setMenu}
        />
      </div>
      <FooterTeam />
    </>
  );
}

export default App;
