import { useState, useEffect } from "react";
import allIngredients from "../../db/ingredients";
import {
  addAllergiesOnly,
  readLocalStorage,
} from "../../utilities/localStorageFunctions";
import "./styles.css";

import allergyKey from "../../db/keys";

function AllergyForm({ setIsOpen, allergies, setAllergies }) {
  // This function checks local storage for the checked state of the checkboxes
  // If there is no saved state, it will create a new array of false values
  const [checkedState, setCheckedState] = useState(() => {
    const savedState = localStorage.getItem("checkedState");
    return savedState
      ? JSON.parse(savedState)
      : new Array(allIngredients.length).fill(false);
  });

  useEffect(() => {
    localStorage.removeItem("menu");
  }, [allergies]);

  // This function will update the checked state of the checkboxes
  // It will also save the state to local storage
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    localStorage.setItem("checkedState", JSON.stringify(updatedCheckedState));
  };

  // This function will handle the form submission
  // It will create an array of all the checked ingredients
  // It will then save the array to local storage
  // It will also close the modal
  const handleSubmit = (e) => {
    e.preventDefault();
    const menu = localStorage.getItem("menu");
    const allergiesArray = [];
    if (checkedState.includes(true)) {
      checkedState.forEach((item, index) => {
        if (item) {
          allergiesArray.push(allIngredients[index]);
        }
      });
    }
    if (menu) {
      localStorage.removeItem("menu");
    } else {
      null;
    }
    console.log(allergies);
    addAllergiesOnly(allergyKey, allergiesArray);
    setAllergies(allergiesArray);
    setCheckedState(new Array(allIngredients.length).fill(false));
    setIsOpen(false);

    console.log(readLocalStorage(allergyKey));
  };

  // This function will clear the checked state of the checkboxes
  // It will also remove the saved state from local storage
  // It will also remove the saved allergies from local storage
  const handleClear = (e) => {
    e.preventDefault();
    setCheckedState(new Array(allIngredients.length).fill(false));
    localStorage.removeItem("checkedState");
    localStorage.removeItem(allergyKey);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="header">
          <h1>Exclude Ingredients</h1>
          <div className="buttons">
            <button className="clear-btn" type="button" onClick={handleClear}>
              Clear
            </button>
            <button className="save-btn" type="submit">
              Save
            </button>
          </div>
        </div>

        <div className="checkbox-container">
          {allIngredients.sort().map((ingredient, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={index}
                name={ingredient}
                value={ingredient}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
              <label htmlFor={index}>{ingredient}</label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default AllergyForm;
