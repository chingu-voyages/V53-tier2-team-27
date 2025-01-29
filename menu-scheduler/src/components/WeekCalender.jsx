import React, { useState } from "react";

// Function to get the start of the week for a given date
const getStartOfWeek = (date) => {
  const startDate = new Date(date);
  const dayOfWeek = startDate.getDay();
  startDate.setDate(startDate.getDate() - dayOfWeek);
  return startDate;
};

// Function to generate an array of dates for the week
const generateWeekDates = (startDate) => {
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    dates.push(new Date(date));
  }
  return dates;
};

const WeekCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get the start of the week and the list of dates for the week
  const startOfWeek = getStartOfWeek(currentDate);
  const weekDates = generateWeekDates(startOfWeek);

  const handlePrevWeek = () => {
    setCurrentDate(new Date(startOfWeek.setDate(startOfWeek.getDate() - 7)));
  };

  const handleNextWeek = () => {
    setCurrentDate(new Date(startOfWeek.setDate(startOfWeek.getDate() + 7)));
  };

  const firstRowDates = [
    weekDates[0],
    weekDates[1],
    weekDates[2],
    weekDates[3],
  ];

  const secondRowDates = [weekDates[4], weekDates[5], weekDates[6]];

  console.log(firstRowDates);

  const [dates, setDates] = useState();

  const generateDates = () => {
    const currentDate = new Date();
    const dateArray = [];

    for (let i = 0; i < 30; i++) {
      const newDate = new Date(currentDate);
      newDate.setDate(currentDate.getDate() + i);
      dateArray.push({
        id: i,
        date: newDate.toISOString().split("T")[0],
        dish: "testing", // will be changed to a randomly selected dish
      });
    }

    setDates(dateArray);
  };

  const getDateObject = (date) => {
    return dates.find((item) => item.date === date.toISOString().split("T")[0]);
  };

  console.log(dates);

  return (
    <div className="calender-container">
      <div className="week-select-container">
        <button className="prev-week-button" onClick={handlePrevWeek}>
          &lt; Previous Week
        </button>
        <span>
          {weekDates[0].toLocaleDateString()} -{" "}
          {weekDates[6].toLocaleDateString()}
        </span>
        <button className="next-week-button" onClick={handleNextWeek}>
          Next Week &gt;
        </button>
      </div>
      <div className="week-container">
        <div className="first-row-dates">
          {firstRowDates.map((date, index) => (
            <div key={index} className="day-container">
              <div className="day-title">
                {date === weekDates[0] ? <div>Sunday</div> : null}
                {date === weekDates[1] ? <div>Monday</div> : null}
                {date === weekDates[2] ? <div>Tuesday</div> : null}
                {date === weekDates[3] ? <div>Wednesday</div> : null}
                <div>{date.getDate()}</div>
              </div>
              {!dates ? null : getDateObject(date).dish}
            </div>
          ))}
        </div>
        <div className="second-row-dates">
          {secondRowDates.map((date, index) => (
            <div key={index} className="day-container">
              <div className="day-title">
                {date === weekDates[4] ? <div>Thursday</div> : null}
                {date === weekDates[5] ? <div>Friday</div> : null}
                {date === weekDates[6] ? <div>Saturday</div> : null}
                <div>{date.getDate()}</div>
              </div>
              {!dates ? null : getDateObject(date).dish}
            </div>
          ))}
          <div onClick={generateDates} className="generate-div">
            <h3 className="generate-button">Generate Menu</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekCalendar;
