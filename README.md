# Menu Creation Application

![image](https://github.com/user-attachments/assets/105f4a54-b23d-4435-b4e4-8f3c089795b8)


## Overview
The **Menu Creation Application** is a React-based web app that allows users to generate weekly menus from a predetermined recipe database. Users can filter recipes based on allergies, toggle days off, and export the generated menu as a PDF.

## Features

**<u>Menu Generation:</u>**
Managers may click the "Generate Menu" button to create a weekly menu for a default of 90 days. A manager may instead select a start and end date to create a menu with a specific timeframe. Scheduled meals are saved in local storage and will be cleared if allergy information changes.

**<u>Allergy Filtering:</u>**
Managers may use the pop-out module to exclude dishes containing selected allergens.

**<u>Day Toggle:</u>**
Using a slider, managers may mark days off to prevent menu generation for those days. Calendar days that are marked as days off will have a solid background for easy visibility.

**<u>PDF Export:</u>**
Print or save the generated menu as a PDF. Menu information such as date, dish name, ingredients, and days off are organized in chronological order in list format.

**<u>Responsiveness:</u>**
Our app is easy to navigate and is viewable on desktop, tablet, and mobile.

## Tech Stack
- **React** – Front-end framework
- **JavaScript** – Primary programming language
- **HTML** – Markup language for structure
- **CSS** - Vanilla CSS styling
- **LocalStorageDB** - Database framework

## Installation
To run the application locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/chingu-voyages/V53-tier2-team-27.git
   ```
2. Navigate to the project directory:
   ```sh
   cd menu-scheduler
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open your browser and go to `http://localhost:3000`.

## Usage
1. Open the application.
2. Click the "Generate" button to create a menu.
3. (Optional) Open the allergy filter module and select allergens to exclude dishes.
4. Toggle days off as needed.
5. Click "Print PDF" to export the menu.

## Deployed
[https://considerate-carrot.netlify.app/](https://considerate-carrot.netlify.app/)

## Our Team

- Valerie Johnson (Primary Scrum Master): [GitHub](https://github.com/johnsonval) / [LinkedIn](https://linkedin.com/in/valeriemichellejohnson)
- Ayoum Soumah (Secondary Scrum Master): [GitHub](https://github.com/fodelaye26) / [LinkedIn](https://linkedin.com/in/asoumahpm/)
- William Kalish (Developer): [GitHub](https://github.com/williamk31) / [LinkedIn](https://linkedin.com/in/william-kalish)
- Ryan Nolan (Developer): [GitHub](https://github.com/ryannolanco) / [LinkedIn](https://www.linkedin.com/in/ryannolanco/)
- Abby Nyhof (UX/UI Designer): [GitHub](https://github.com/abbynyhof) / [LinkedIn](https://www.linkedin.com/in/abbynyhof/)
- Matthew Neie (Developer): [GitHub](https://github.com/MatthewNeie) / [LinkedIn](https://linkedin.com/in/matthew-neie)
- Guillermo Guevara (Developer): [GitHub](https://github.com/guillermoguevara887) / [LinkedIn](https://www.linkedin.com/in/guillermo-guevara-6758a51a0)
