const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
const colorText = document.getElementById("color-text");
const copyBtn = document.getElementById("copy-btn")
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
  colorText.textContent = color;
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

  body.style.backgroundColor = "#f4f6f8";
  colorText.textContent = "#f4f6f8";

  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
});

// copy clipboard
let timeoutId;

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(colorText.textContent).then(() => {
    copyBtn.innerHTML = '<i class="fa-solid fa-check" style="color: #198754;"></i> copied!';

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
    }, 1500);
  });
});
