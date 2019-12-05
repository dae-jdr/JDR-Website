// eslint-disable-next-line no-unused-vars
function showVal(value) {
	// eslint-disable-next-line no-undef
	const hourElement = document.getElementById('hourShow')
	if (value < 60) return hourElement.textContent = `${value}min`

	const hours = parseInt(value / 60)
	return hourElement.textContent = `${hours}h${value - hours * 60}min`
}