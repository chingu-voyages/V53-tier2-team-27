import React, { useState } from "react";
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

  // Randomly selected meal from array of dishes
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  const randomObject = getRandomItem(dishes);

  // Generate meal plan function
  const generateDates = () => {
    const currentDate = new Date();
    const dateArray = [];

    for (let i = 0; i < 30; i++) {
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
                <div className="day-title-weekday">
                  {date === weekDates[0] ? <div>Monday</div> : null}
                  {date === weekDates[1] ? <div>Tuesday</div> : null}
                  {date === weekDates[2] ? <div>Wednesday</div> : null}
                  {date === weekDates[3] ? <div>Thursday</div> : null}
                </div>
                <div className="day-title-number">
                  <div>{date.getDate()}</div>
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
                      : getDateObject(date).dishIngredients + " "}
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
                <div className="day-title-weekday">
                  {date === weekDates[4] ? <div>Friday</div> : null}
                  {date === weekDates[5] ? <div>Saturday</div> : null}
                  {date === weekDates[6] ? <div>Sunday</div> : null}
                </div>
                <div className="day-title-number">
                  <div>{date.getDate()}</div>
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
                      : getDateObject(date).dishIngredients + " "}
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
    </div>
  );
};

export default WeekCalendar;
