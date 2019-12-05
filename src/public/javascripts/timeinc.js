function showVal(value){
  const valueFixed = parseFloat(value / 60).toFixed(2);
  document.getElementById("hourShow").textContent = valueFixed + " h";
}
