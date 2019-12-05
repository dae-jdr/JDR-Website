// eslint-disable-next-line no-unused-vars
function showVal(value: number) {
	// eslint-disable-next-line no-undef
	const hourElement = document.getElementById('hourShow') || { textContent: null }
	if (value < 60) return hourElement.textContent = `${value}min`

	const hours: number = parseInt(String(value / 60))
	return hourElement.textContent = `${hours}h${value - hours * 60}min`
}