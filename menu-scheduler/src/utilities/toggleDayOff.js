function toggleDayOff(e, date, daysOff, setDaysOff, dates, setDates) {
	const dayStatus = e.target; // Get the actual element
	let dayStatusText = e.target.textContent;
	let buttonDate = e.target.id;

	const isPressed = e.target.getAttribute('aria-pressed') === 'true';
	e.target.setAttribute('aria-pressed', !isPressed);
	// console.log(e.target.getAttribute('aria-pressed'));

	const parsedDate = date.toISOString();
	const formattedDate = date.toISOString().split('T')[0];

	if (dayStatusText === 'Open' && buttonDate === parsedDate) {
		const refundedDates = dates.map((item) => {
			if (item.date === formattedDate) {
				return {
					id: item.id,
					date: item.date,
					dishName: item.dishName,
					dishIngredients: item.dishIngredients,
					dayOff: true,
					dishCal: item.dishCal,
				};
			}
			return item;
		});
		setDates(refundedDates);
		setDaysOff((prev) => [...prev, parsedDate]);
	} else if (buttonDate === parsedDate) {
		//
		const refundedDates = dates.map((item) => {
			if (item.date === formattedDate) {
				return {
					id: item.id,
					date: item.date,
					dishName: item.dishName,
					dishIngredients: item.dishIngredients,
					dayOff: false,
					dishCal: item.dishCal,
				};
			}
			return item;
		});
		setDates(refundedDates);
		let filteredDates = daysOff.filter((prevDate) => prevDate !== parsedDate);
		setDaysOff(filteredDates);
	}
}
export default toggleDayOff;
