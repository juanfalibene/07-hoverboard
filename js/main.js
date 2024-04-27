const container = document.getElementById("container");
const colors = ["#D97B8B", "#163964", "#26D29B", "#7873C3", "#C6CA66"];
const SQUARES = 500;

for (i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  container.appendChild(square);
}
