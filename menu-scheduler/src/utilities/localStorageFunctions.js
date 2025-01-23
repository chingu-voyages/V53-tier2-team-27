/**
 * Validates that all elements in the given array are non-empty strings.
 *
 * @param {Array} array - The array to validate.
 * @throws {Error} If any element in the array is not a string or is an empty string (including strings with only whitespace).
 * @returns {boolean} Returns `true` if all elements in the array are valid strings.
 *
 * Example Usage:
 *   checkArrayValuesAreValidStrings(["hello", "world"]); // Returns true
 *   checkArrayValuesAreValidStrings(["hello", ""]); // Throws an Error
 *   checkArrayValuesAreValidStrings([123, "world"]); // Throws an Error
 */

function arrayValuesAreValidStrings(arr) {
  arr.forEach((element) => {
    if (typeof element !== "string" || element.trim() === "") {
      throw new error("All items in array must be a string and not empty");
    }
  });

  return true;
}

function stringLengthsAreValid(arr, amount) {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input: arr must be an array of strings");
  }
  if (typeof amount !== "number" || amount <= 0) {
    throw new Error("Invalid input: amount must be a positive number");
  }

  arr.forEach((element) => {
    const wordCount = element.trim().split(/\s+/).length;

    if (wordCount > amount) {
      throw new Error(
        `All items in array must not exceed ${amount} in length.`
      );
    }
  });

  return true;
}
//end of helper functions

//main functions
function addAllergiesOnly(key, allergies) {
  if (!Array.isArray(allergies)) {
    throw new Error("Invalid input: allergies must be an array");
  }

  arrayValuesAreValidStrings(allergies);

  const storedAllergies = localStorage.getItem(key);

  let parsedAllergies = storedAllergies ? JSON.parse(storedAllergies) : [];

  let updatedAllergies = new Set([...allergies, ...parsedAllergies]);

  localStorage.setItem(key, JSON.stringify([...updatedAllergies]));
}

//read functionality to store information in state.

function readLocalStorage(key) {
  const storedData = localStorage.getItem(key);
  if (!storedData) return [];
  try {
    return JSON.parse(storedData);
  } catch (error) {
    console.error("Error parsing localStorage data:", error);
    return [];
  }
}

//delete allergies

function deleteAllergy(key, allergyToDelete) {
  const storedData = localStorage.getItem(key);
  const parsedData = JSON.parse(storedData);

  const filteredData = parsedData.filter(
    (allergy) => allergy !== allergyToDelete
  );

  localStorage.clear();

  localStorage.setItem(key, JSON.stringify(filteredData));
}

/**
 * Adds employee allergy information in localStorage.
 *
 * This function validates the input, ensures all allergy values are valid non-empty strings,
 * and then either adds a new employee record or updates an existing one by combining their
 * allergies without duplicates. The updated data is stored in localStorage.
 *
 * @param {Object} input - The input data containing employee details.
 * @param {string} input.name - The name of the employee (must be a non-empty string).
 * @param {Array<string>} input.allergies - An array of allergy strings (must be valid non-empty strings).
 *
 * @throws {Error} If the `name` is not a valid string or `allergies` is not an array.
 * @throws {Error} If any element in the `allergies` array is not a valid non-empty string.
 */

function addEmployeeAllergies({ name, allergies }) {
  if (!name || typeof name !== "string") {
    throw new Error("Invalid input: name must be a valid string");
  }

  if (!Array.isArray(allergies)) {
    throw new Error("Invalid input: allergies must be an array");
  }

  //check to make sure all elements in array are valid strings
  arrayValuesAreValidStrings(allergies);

  const storedEmployeeAllergies = localStorage.getItem("employeeAllergies");

  // Parse or initialize the employee data
  let parsedEmployeeInfo = storedEmployeeAllergies
    ? JSON.parse(storedEmployeeAllergies)
    : [];

  // Calculate a new ID if not provided
  const currentMaxId = parsedEmployeeInfo.length
    ? Math.max(...parsedEmployeeInfo.map((emp) => emp.id || 0))
    : 0;
  let id = currentMaxId + 1;

  // If no employee found, add the new employee to updatedEmployee info
  // which should be an empty array
  let allergySet = new Set(allergies);
  parsedEmployeeInfo.push({ name, allergies: [...allergySet], id: id });

  // Store updated data back in localStorage
  localStorage.setItem("employeeAllergies", JSON.stringify(parsedEmployeeInfo));
}

/**
 * Deletes an employee with the specified ID from the employeeAllergies data in localStorage.
 *
 * @param {number} employeeId - The ID of the employee to delete.
 * @throws {Error} If the employee with the given ID is not found in localStorage.
 */
function deleteSelectedEmployee(employeeId) {
  // Retrieve stored data from localStorage
  const storedEmployeeAllergies = localStorage.getItem("employeeAllergies");

  // Parse or initialize the employee data
  let parsedEmployeeInfo = storedEmployeeAllergies
    ? JSON.parse(storedEmployeeAllergies)
    : [];

  // Filter out the employee with the matching ID
  const updatedEmployeeInfo = parsedEmployeeInfo.filter(
    (employee) => employee.id !== employeeId
  );

  // Check if the employee was found and removed
  if (updatedEmployeeInfo.length === parsedEmployeeInfo.length) {
    throw new Error(
      `Employee with ID ${employeeId} was not found in localStorage`
    );
  }

  // Update the localStorage with the new array
  localStorage.setItem(
    "employeeAllergies",
    JSON.stringify(updatedEmployeeInfo)
  );
}

/**
 * Updates an existing employee's allergies in localStorage.
 *
 * @param {Object} param0 - An object containing `id` and `allergies`.
 * @param {number} param0.id - The unique ID of the employee.
 * @param {string[]} param0.allergies - The list of new allergies to add.
 * @throws {Error} If input validation fails or the employee is not found.
 */
function updateEmployeeAllergies({ id, allergies }) {
  // Validate `id`
  if (typeof id !== "number" || id <= 0) {
    throw new Error("Invalid input: id must be a positive number");
  }

  // Validate allergies
  if (!Array.isArray(allergies)) {
    throw new Error("Invalid input: allergies must be an array");
  }
  arrayValuesAreValidStrings(allergies);

  // Retrieve stored employee data
  const storedEmployeeAllergies = localStorage.getItem("employeeAllergies");
  let parsedEmployeeInfo = storedEmployeeAllergies
    ? JSON.parse(storedEmployeeAllergies)
    : [];

  // Find and update the employee
  let employeeFound = false;
  parsedEmployeeInfo = parsedEmployeeInfo.map((employee) => {
    if (employee.id === id) {
      employeeFound = true;
      employee.allergies = [...new Set([...employee.allergies, ...allergies])];
    }
    return employee;
  });

  if (!employeeFound) {
    throw new Error(`Employee with ID ${id} was not found.`);
  }

  // Save updated data back to localStorage
  localStorage.setItem("employeeAllergies", JSON.stringify(parsedEmployeeInfo));
}

export {
  arrayValuesAreValidStrings,
	stringLengthsAreValid,
  addAllergiesOnly,
	deleteAllergy,
	readLocalStorage,
  addEmployeeAllergies,
  deleteSelectedEmployee,
  updateEmployeeAllergies,
};
