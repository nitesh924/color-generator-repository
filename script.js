const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const colorCode = document.querySelector("#colorCode");
const body = document.body;

let timer = null;
let isRunning = false;

stop.disabled = true;
reset.disabled = true;

// Random color generate
function randomColor() {
  let color = `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")}`;
  return color;
}

// Background color change
function changeColor() {
  const color = randomColor();
  body.style.backgroundColor = color;
  colorCode.textContent = color;
}

// Start button
start.addEventListener("click", () => {
  if (isRunning) return;

  changeColor();
  timer = setInterval(changeColor, 1000);
  isRunning = true;

  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
});

// Stop button
stop.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  isRunning = false;

  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
});

// Reset button
reset.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  isRunning = false;

  body.style.backgroundColor = "";
  colorCode.textContent = "#FFFFFF";

  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
});
