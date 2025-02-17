import React, { useState, useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { filterRecipes } from "../utilities/localStorageFunctions";
import dishes from "../db/dishes";
import toggleDayOff from "../utilities/toggleDayOff";
import { jsPDF } from "jspdf";

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
  return dates;
};

const WeekCalendar = ({ allergies, setAllergies, menu, setMenu }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(null);
  const [daysOff, setDaysOff] = useState([]);

  const filteredDishes = filterRecipes(allergies, dishes);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedMenu = localStorage.getItem("menu");
    if (savedMenu) {
      setDates(JSON.parse(savedMenu)); // Parse and set the saved items
    } else {
      setDates([]);
    }
  }, [allergies]);

  // Save data to localStorage whenever the items array changes
  useEffect(() => {
    if (dates.length > 0) {
      localStorage.setItem("menu", JSON.stringify(dates)); // Convert the array to a string and store
    }
  }, [dates, daysOff, currentDate]);

  // Get the start of the week and the list of dates for the week
  const startOfWeek = getStartOfWeek(currentDate);
  const weekDates = generateWeekDates(startOfWeek, setDates);

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

  // Randomly selected meal from array prop
  function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  // Generate meal plan function
  const generateMenu = () => {
    const currentDate = new Date(startDate);
    const dateArray = [];
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = end - start; // time difference in milliseconds
    const days = timeDifference / (1000 * 3600 * 24); // convert milliseconds to days
    let stache = [];
    let counter = 0; // Counter declared outside the loop

    if (Number.isInteger(days)) {
      for (let i = 0; i < days + 1; i++) {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + i);

        let item = getRandomItem(filteredDishes);

        if (filteredDishes.length > 7) {
          let attempts = 0;
          while (
            stache.includes(item.name) &&
            attempts < filteredDishes.length
          ) {
            item = getRandomItem(filteredDishes);
            attempts++;
          }
        }

        stache.push(item.name);
        dateArray.push({
          id: i,
          date: newDate.toISOString().split("T")[0],
          dishName: item.name,
          dishIngredients: item.ingredients,
          dishCal: item.calories,
          dayOff: false,
        });

        counter++;

        if (counter === 7) {
          counter = 0;
          stache = [];
        }
      }
    } else {
      for (let i = 0; i < 90; i++) {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + i);

        let item = getRandomItem(filteredDishes);

        if (filteredDishes.length > 7) {
          let attempts = 0;
          while (
            stache.includes(item.name) &&
            attempts < filteredDishes.length
          ) {
            item = getRandomItem(filteredDishes);
            attempts++;
          }
        }

        stache.push(item.name);
        dateArray.push({
          id: i,
          date: newDate.toISOString().split("T")[0],
          dishName: item.name,
          dishIngredients: item.ingredients,
          dishCal: item.calories,
          dayOff: false,
        });

        counter++;

        if (counter === 7) {
          counter = 0;
          stache = [];
        }
      }
    }
    setMenu(dateArray);
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

  // console.log(dates);
  // console.log(filteredDishes);

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

  const downloadPDF = () => {
    const doc = new jsPDF();
    let yPosition = 10;
    const marginBottom = 10;
    const pageHeight = doc.internal.pageSize.height; // Get the page height
    let currentPage = 1;

    doc.setFontSize(18);
    doc.text("Menu", 20, yPosition);
    yPosition += 20;

    doc.setFontSize(12);

    dates.forEach((item, index) => {
      if (yPosition + 20 > pageHeight - marginBottom) {
        // Add a new page if content exceeds the page height
        doc.addPage();
        currentPage++;
        yPosition = 10; // Reset yPosition for the new page
      }

      if (item.dayOff) {
        doc.text(`Date: ${item.date}`, 20, yPosition);
        yPosition += 10;
        doc.text(`CLOSED`, 20, yPosition);
        yPosition += 10;
      }
      doc.text(`Date: ${item.date}`, 20, yPosition);
      yPosition += 10;
      doc.text(`Name: ${item.dishName}`, 20, yPosition);
      yPosition += 10;
      doc.text(`Ingredients: ${item.dishIngredients}`, 20, yPosition);
      yPosition += 15;
    });

    doc.save("menu_schedule.pdf");
  };

  const handleCurrentDate = (event) => {
    setCurrentDate(event.target.value);
  };

  return (
    <div className="calender-container">
      <div className="week-select-container">
        <div className="week-display">
          <span>
            {getMonth() + " " + weekDates[0].getDate()} -{" "}
            {weekDates[6].getDate()}
          </span>
          <div className="jump-week-selector-container">
            <KeyboardArrowDownIcon
              className="date-picker"
              style={{ fontSize: "34px" }}
            />
            <input
              type="date"
              className="jump-week-selector"
              onChange={handleCurrentDate}
            ></input>
          </div>
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
            <div
              key={index}
              className={`day-container ${
                daysOff.includes(date.toISOString()) ? "day-off" : ""
              }`}
            >
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
                {/* day off button */}
                <div className="closed-button">
                  <button
                    className="toggle-button"
                    aria-pressed="false"
                    id={date.toISOString()}
                    onClick={(event) =>
                      toggleDayOff(
                        event,
                        date,
                        daysOff,
                        setDaysOff,
                        dates,
                        setDates
                      )
                    }
                  >
                    {daysOff.includes(date.toISOString()) ? "Closed" : "Open"}
                  </button>
                </div>
              </div>
              {!dates ? null : (
                <>
                  {daysOff.includes(date.toISOString()) ? (
                    <div className="selected-meal-name"></div> // Return an empty string if dayOff is true
                  ) : (
                    <>
                      <div className="selected-meal-name">
                        {getDateObject(date)?.dishName}
                      </div>
                      <div className="selected-meal-ingredients">
                        {getDateObject(date)?.dishIngredients?.join(", ")}
                      </div>
                      <div className="selected-meal-cal">
                        {getDateObject(date)?.dishCal}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        <div className="second-row-dates">
          {secondRowDates.map((date, index) => (
            <div
              key={index}
              className={`day-container ${
                daysOff.includes(date.toISOString()) ? "day-off" : ""
              }`}
            >
              <div className="day-title">
                <div className="day-title-number">
                  <div>{date.getDate()}</div>
                </div>
                <div className="day-title-weekday">
                  {date === weekDates[4] ? <div>Friday</div> : null}
                  {date === weekDates[5] ? <div>Saturday</div> : null}
                  {date === weekDates[6] ? <div>Sunday</div> : null}
                </div>
                <div className="closed-button">
                  <button
                    className="toggle-button"
                    aria-pressed="false"
                    id={date.toISOString()}
                    onClick={(event) =>
                      toggleDayOff(
                        event,
                        date,
                        daysOff,
                        setDaysOff,
                        dates,
                        setDates
                      )
                    }
                  >
                    {daysOff.includes(date.toISOString()) ? "Closed" : "Open"}
                  </button>
                </div>
              </div>
              {!dates ? null : (
                <>
                  {daysOff.includes(date.toISOString()) ? (
                    <div className="selected-meal-name"></div> // Return an empty string if dayOff is true
                  ) : (
                    <>
                      <div className="selected-meal-name">
                        {getDateObject(date)?.dishName}
                      </div>
                      <div className="selected-meal-ingredients">
                        {getDateObject(date)?.dishIngredients?.join(", ")}
                      </div>
                      <div className="selected-meal-cal">
                        {getDateObject(date)?.dishCal}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          ))}
          <div className="generate-container">
            <div className="date-range-container">
              <div className="start-date-div">
                <p className="start-date">Start Date</p>
                <input
                  className="date-input"
                  type="date"
                  min={currentDate}
                  value={startDate}
                  onChange={handleStartDate}
                />
              </div>
              <div className="end-date-div">
                <p className="end-date">End Date</p>
                <input
                  className="date-input"
                  type="date"
                  min={startDate}
                  onChange={handleEndDate}
                />
              </div>
            </div>
            <div onClick={generateMenu} className="generate-div">
              <h3 className="generate-button">Generate Menu</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="download-PDF-container">
        <button onClick={downloadPDF} className="download-PDF-button">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default WeekCalendar;
