function toggleDayOff(e, date, daysOff, setDaysOff) {
	const dayStatus = e.target; // Get the actual element
	let dayStatusText = e.target.textContent;
	let buttonDate = e.target.id;
	const parsedDate = date.toISOString();

	console.log(buttonDate);
	console.log(parsedDate);
	if (dayStatusText === 'Closed' && buttonDate === parsedDate) {
		// dayStatus.textContent = 'Open';
		setDaysOff((prev) => [...prev, parsedDate]);
	} else if (buttonDate === parsedDate) {
		// dayStatus.textContent = 'Closed';

		let filteredDates = daysOff.filter((prevDate) => prevDate !== parsedDate);
		setDaysOff(filteredDates);
	}
}
export default toggleDayOff;
