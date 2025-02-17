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
  if (typeof key !== "string" || key.trim() === "") {
    throw new Error("Invalid input: key must be a non-empty string");
  }

  if (!Array.isArray(allergies)) {
    throw new Error("Invalid input: allergies must be an array");
  }

  arrayValuesAreValidStrings(allergies);

  const uniqueAllergies = Array.from(new Set(allergies));

  localStorage.setItem(key, JSON.stringify(uniqueAllergies));
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

//filter recipes dependent on allergies

function filterRecipes(allergies, recipes) {
  const normalizedAllergies = allergies.map((allergy) => allergy.toLowerCase());

  return recipes.filter((recipe) => {
    const normalizedIngredients = recipe.ingredients.map((ingredient) =>
      ingredient.toLowerCase()
    );

    return !normalizedAllergies.some((allergy) =>
      normalizedIngredients.includes(allergy)
    );
  });
}

export {
  arrayValuesAreValidStrings,
  stringLengthsAreValid,
  addAllergiesOnly,
  readLocalStorage,
  filterRecipes,
};
