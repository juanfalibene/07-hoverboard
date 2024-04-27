const container = document.getElementById("container");
const colors = [
  "#DFE688",
  "#D97B8B",
  "#163964",
  "#26D29B",
  "#7873C3",
  "#C6CA66",
];
const SQUARES = 500;
const bgColor = "#1d1d1d";
const boxShadow = "0 0 2px #000000";

for (i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = bgColor;
  element.style.boxShadow = boxShadow;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
