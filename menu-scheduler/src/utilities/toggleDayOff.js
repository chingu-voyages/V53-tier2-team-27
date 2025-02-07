function toggleDayOff(e, menu, dates, setDates) {
	const dayContainer = e.target.closest('.day-container');
	const mealId = dayContainer?.querySelector('.selected-meal-name')?.dataset
		.mealId;

	if (!mealId) return; // Ensure mealId exists before proceeding

	// Create a new array with updated dayOff values
	const updatedDates = dates.map((date) =>
		date.id === Number(mealId) ? { ...date, dayOff: !date.dayOff } : date
	);

	// Update state with new array
	setDates(updatedDates);

	// Toggle the CSS class
	if (dayContainer) {
		dayContainer.classList.toggle('day-off');
	}
	console.log(updatedDates);
}
export default toggleDayOff;
