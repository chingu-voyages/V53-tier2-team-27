function toggleDayOff(e) {
	const dayContainer = e.target.closest('.day-container');

	if (dayContainer) {
		dayContainer.classList.toggle('day-off');
	}
}

export default toggleDayOff;
