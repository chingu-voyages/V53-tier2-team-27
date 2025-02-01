import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import dishes from "../db/dishes";

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
  for (let i = 1; i < 8; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    dates.push(new Date(date));
  }
  console.log(dates);
  return dates;
};

const WeekCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dates, setDates] = useState();
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(null);

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

  // Randomly selected meal from array
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  // Generate meal plan function
  const generateDates = () => {
    const currentDate = new Date(startDate);
    const dateArray = [];
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = end - start; // time difference in milliseconds
    const days = timeDifference / (1000 * 3600 * 24); // convert milliseconds to days

    if (Number.isInteger(days)) {
      for (let i = 0; i < days + 1; i++) {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + i);
        const item = getRandomItem(dishes);
        dateArray.push({
          id: i,
          date: newDate.toISOString().split("T")[0],
          dishName: item.name,
          dishIngredients: item.ingredients,
          dishCal: item.calories,
        });
      }
    } else {
      for (let i = 0; i < 30; i++) {
        // if start and end dates are not selected, calculate for 30 days
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + i);
        const item = getRandomItem(dishes);
        dateArray.push({
          id: i,
          date: newDate.toISOString().split("T")[0],
          dishName: item.name,
          dishIngredients: item.ingredients,
          dishCal: item.calories,
        });
      }
    }

    setDates(dateArray);
  };

  const getDateObject = (date) => {
    return dates.find((item) => item.date === date.toISOString().split("T")[0]);
  };

  // Handler to update startDate when input changes
  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };

  // Handler to update endDate when input changes
  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };

  console.log(startDate);
  console.log(endDate);

  console.log(dates);

  // Get the month for the week selector display
  const getMonth = () => {
    if (weekDates[0].getMonth() === 0) {
      return "January";
    } else if (weekDates[0].getMonth() === 1) {
      return "February";
    } else if (weekDates[0].getMonth() === 2) {
      return "March";
    } else if (weekDates[0].getMonth() === 3) {
      return "April";
    } else if (weekDates[0].getMonth() === 4) {
      return "May";
    } else if (weekDates[0].getMonth() === 5) {
      return "June";
    } else if (weekDates[0].getMonth() === 6) {
      return "July";
    } else if (weekDates[0].getMonth() === 7) {
      return "August";
    } else if (weekDates[0].getMonth() === 8) {
      return "September";
    } else if (weekDates[0].getMonth() === 9) {
      return "October";
    } else if (weekDates[0].getMonth() === 10) {
      return "November";
    } else if (weekDates[0].getMonth() === 11) {
      return "December";
    }
  };

  return (
    <div className="calender-container">
      <div className="week-select-container">
        <div className="week-display">
          <span>
            {getMonth() + " " + weekDates[0].getDate()} -{" "}
            {weekDates[6].getDate()}
          </span>
        </div>
        <div className="week-change-div">
          <ArrowBackIosNewIcon
            className="prev-week-button"
            onClick={handlePrevWeek}
          />
          <p
            className="jump-to-this-week"
            onClick={() => {
              setCurrentDate(new Date());
            }}
          >
            Jump To This Week
          </p>
          <ArrowForwardIosIcon
            className="next-week-button"
            onClick={handleNextWeek}
          />
        </div>
      </div>
      <div className="week-container">
        <div className="first-row-dates">
          {firstRowDates.map((date, index) => (
            <div key={index} className="day-container">
              <div className="day-title">
                <div className="day-title-number">
                  <div>{date.getDate()}</div>
                </div>
                <div className="day-title-weekday">
                  {date === weekDates[0] ? <div>Monday</div> : null}
                  {date === weekDates[1] ? <div>Tuesday</div> : null}
                  {date === weekDates[2] ? <div>Wednesday</div> : null}
                  {date === weekDates[3] ? <div>Thursday</div> : null}
                </div>
              </div>
              {!dates ? null : (
                <>
                  <div className="selected-meal-name">
                    {!getDateObject(date) ? null : getDateObject(date).dishName}
                  </div>
                  <div className="selected-meal-ingredients">
                    {!getDateObject(date)
                      ? null
                      : getDateObject(date).dishIngredients.join(", ")}
                  </div>
                  <div className="selected-meal-cal">
                    {!getDateObject(date) ? null : getDateObject(date).dishCal}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="second-row-dates">
          {secondRowDates.map((date, index) => (
            <div key={index} className="day-container">
              <div className="day-title">
                <div className="day-title-number">
                  <div>{date.getDate()}</div>
                </div>
                <div className="day-title-weekday">
                  {date === weekDates[4] ? <div>Friday</div> : null}
                  {date === weekDates[5] ? <div>Saturday</div> : null}
                  {date === weekDates[6] ? <div>Sunday</div> : null}
                </div>
              </div>
              {!dates ? null : (
                <>
                  <div className="selected-meal-name">
                    {!getDateObject(date) ? null : getDateObject(date).dishName}
                  </div>
                  <div className="selected-meal-ingredients">
                    {!getDateObject(date)
                      ? null
                      : getDateObject(date).dishIngredients.join(", ")}
                  </div>
                  <div className="selected-meal-cal">
                    {!getDateObject(date) ? null : getDateObject(date).dishCal}
                  </div>
                </>
              )}
            </div>
          ))}
          <div onClick={generateDates} className="generate-div">
            <h3 className="generate-button">Generate Menu</h3>
          </div>
        </div>
      </div>
      <div className="date-range-container">
        <div className="start-date-div">
          <p>Start Date</p>
          <input
            type="date"
            min={currentDate}
            value={startDate}
            onChange={handleStartDate}
          />
        </div>
        <div className="end-date-div">
          <p>End Date</p>
          <input type="date" min={startDate} onChange={handleEndDate} />
        </div>
      </div>
    </div>
  );
};

export default WeekCalendar;
