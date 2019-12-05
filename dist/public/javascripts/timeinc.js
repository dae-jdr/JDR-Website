// eslint-disable-next-line no-unused-vars
function showVal(value) {
    // eslint-disable-next-line no-undef
    var hourElement = document.getElementById('hourShow') || { textContent: null };
    if (value < 60)
        return hourElement.textContent = value + "min";
    var hours = parseInt(String(value / 60));
    return hourElement.textContent = hours + "h" + (value - hours * 60) + "min";
}
