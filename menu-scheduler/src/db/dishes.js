const dishes = [
  {
    name: "Vegetable Stir Fry",
    ingredients: ["Vanilla", "Bread", "Zucchini", "Parsley"],
    calories: 298,
  },
  {
    name: "Roast Chicken",
    ingredients: ["Pork", "Basil", "Bread", "Corn"],
    calories: 583,
  },
  {
    name: "Fettuccine Carbonara",
    ingredients: ["Zucchini", "Chicken", "Onions", "Cucumber", "Tuna"],
    calories: 316,
  },
  {
    name: "Beef Stroganoff",
    ingredients: ["Mushrooms", "Salt", "Olive Oil"],
    calories: 620,
  },
  {
    name: "Chicken Quesadilla",
    ingredients: ["Zucchini", "Sugar", "Chili", "Mushrooms", "Pepper"],
    calories: 725,
  },
  {
    name: "Chicken Alfredo",
    ingredients: ["Pepper", "Cucumber", "Salt", "Chili", "Spinach", "Flour"],
    calories: 485,
  },
  {
    name: "Chicken Quesadilla",
    ingredients: ["Honey", "Corn", "Pepper"],
    calories: 743,
  },
  {
    name: "Tuna Salad",
    ingredients: ["Cream", "Potatoes", "Tuna", "Mushrooms"],
    calories: 256,
  },
  {
    name: "Chocolate Cake",
    ingredients: ["Tuna", "Garlic", "Potatoes", "Paprika", "Lettuce"],
    calories: 539,
  },
  {
    name: "Pancakes",
    ingredients: ["Potatoes", "Oregano", "Curry Powder"],
    calories: 409,
  },
  {
    name: "Greek Salad",
    ingredients: ["Bread", "Sugar", "Paprika", "Lettuce", "Cream"],
    calories: 742,
  },
  {
    name: "Chicken Noodle Soup",
    ingredients: ["Bacon", "Cheese", "Pepper"],
    calories: 459,
  },
  {
    name: "Chicken Curry",
    ingredients: ["Honey", "Spinach", "Parsley"],
    calories: 277,
  },
  {
    name: "Pancakes",
    ingredients: ["Honey", "Avocado", "Spinach", "Mushrooms", "Butter"],
    calories: 313,
  },
  {
    name: "Beef Stroganoff",
    ingredients: ["Rice", "Onions", "Mushrooms", "Honey", "Salmon"],
    calories: 356,
  },
  {
    name: "Pancakes",
    ingredients: ["Rice", "Salmon", "Oregano", "Pork", "Milk"],
    calories: 737,
  },
  {
    name: "Vegetarian Lasagna",
    ingredients: ["Salmon", "Flour", "Shrimp"],
    calories: 560,
  },
  {
    name: "Beef Stroganoff",
    ingredients: ["Avocado", "Mushrooms", "Tuna", "Lamb"],
    calories: 445,
  },
  {
    name: "Shrimp Scampi",
    ingredients: ["Lime", "Spinach", "Cheese"],
    calories: 651,
  },
  {
    name: "Shrimp Scampi",
    ingredients: ["Parsley", "Chili", "Milk", "Lamb"],
    calories: 350,
  },
  {
    name: "Chicken Curry",
    ingredients: ["Flour", "Lamb", "Basil"],
    calories: 282,
  },
  {
    name: "Beef Stroganoff",
    ingredients: [
      "Pepper",
      "Honey",
      "Beef",
      "Olive Oil",
      "Carrots",
      "Zucchini",
    ],
    calories: 545,
  },
  {
    name: "Sausage Roll",
    ingredients: ["Lettuce", "Parsley", "Tuna", "Curry Powder"],
    calories: 260,
  },
  {
    name: "Pancakes",
    ingredients: ["Parsley", "Onions", "Tuna", "Pepper", "Bread"],
    calories: 662,
  },
  {
    name: "Fish Tacos",
    ingredients: ["Onions", "Corn", "Tomatoes"],
    calories: 457,
  },
  {
    name: "Pad Thai",
    ingredients: [
      "Rice",
      "Lettuce",
      "Olive Oil",
      "Yogurt",
      "Tomatoes",
      "Cream",
    ],
    calories: 420,
  },
  {
    name: "Chocolate Cake",
    ingredients: [
      "Milk",
      "Curry Powder",
      "Flour",
      "Chili",
      "Chicken",
      "Lettuce",
    ],
    calories: 690,
  },
  {
    name: "Beef Stroganoff",
    ingredients: ["Olive Oil", "Eggs", "Basil", "Salt", "Potatoes", "Avocado"],
    calories: 570,
  },
  {
    name: "Shrimp Tacos",
    ingredients: ["Onions", "Carrots", "Beans", "Peas", "Tomatoes"],
    calories: 643,
  },
  {
    name: "Eggplant Parmesan",
    ingredients: ["Carrots", "Rice", "Lamb"],
    calories: 591,
  },
  {
    name: "Beef Tacos",
    ingredients: ["Butter", "Avocado", "Salt", "Paprika", "Flour", "Basil"],
    calories: 438,
  },
  {
    name: "Chicken Caesar Wrap",
    ingredients: ["Chocolate", "Honey", "Onions"],
    calories: 544,
  },
  {
    name: "Chicken Wings",
    ingredients: ["Potatoes", "Pork", "Tuna", "Yogurt", "Honey", "Sugar"],
    calories: 713,
  },
  {
    name: "Vegetarian Lasagna",
    ingredients: ["Rice", "Sugar", "Flour"],
    calories: 297,
  },
  {
    name: "Lamb Chops",
    ingredients: ["Mushrooms", "Curry Powder", "Beans"],
    calories: 619,
  },
  {
    name: "Shepherd’s Pie",
    ingredients: ["Bacon", "Pepper", "Garlic"],
    calories: 565,
  },
  {
    name: "Fettuccine Carbonara",
    ingredients: ["Lettuce", "Basil", "Lime", "Eggs", "Bell Peppers"],
    calories: 376,
  },
  {
    name: "Roast Chicken",
    ingredients: ["Bacon", "Salmon", "Shrimp", "Cream", "Onions"],
    calories: 344,
  },
  {
    name: "Pumpkin Soup",
    ingredients: ["Tuna", "Butter", "Chili", "Lamb", "Bread"],
    calories: 497,
  },
  {
    name: "Prawn Cocktail",
    ingredients: ["Spinach", "Pasta", "Vanilla", "Peas"],
    calories: 278,
  },
  {
    name: "Caesar Salad",
    ingredients: ["Peas", "Eggs", "Chili", "Cheese"],
    calories: 614,
  },
  {
    name: "Vegetable Curry",
    ingredients: ["Avocado", "Garlic", "Sugar", "Pasta", "Vanilla"],
    calories: 417,
  },
  {
    name: "Tomato Soup",
    ingredients: ["Parsley", "Beans", "Tuna", "Chocolate", "Lime", "Cream"],
    calories: 349,
  },
  {
    name: "Caprese Salad",
    ingredients: ["Bread", "Basil", "Rice", "Flour", "Spinach", "Olive Oil"],
    calories: 356,
  },
  {
    name: "Vegetable Stir Fry",
    ingredients: ["Avocado", "Rice", "Tomatoes"],
    calories: 387,
  },
  {
    name: "Grilled Cheese Sandwich",
    ingredients: ["Cheese", "Salt", "Peas", "Cucumber", "Bread"],
    calories: 334,
  },
  {
    name: "Beef Burger",
    ingredients: [
      "Cream",
      "Curry Powder",
      "Honey",
      "Chicken",
      "Lettuce",
      "Onions",
    ],
    calories: 516,
  },
  {
    name: "Pancakes",
    ingredients: ["Beans", "Cheese", "Lamb", "Bell Peppers", "Parsley"],
    calories: 315,
  },
  {
    name: "Pad Thai",
    ingredients: ["Flour", "Bread", "Cheese", "Onions", "Shrimp", "Chicken"],
    calories: 275,
  },
  {
    name: "Grilled Cheese Sandwich",
    ingredients: ["Onions", "Tuna", "Zucchini", "Spinach", "Shrimp"],
    calories: 567,
  },
];

export default dishes;
