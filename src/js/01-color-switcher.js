// Select the buttons
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

let colorInterval = null;

// Function to generate a random hex color
function getRandomHexColor() {
  return "#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0' )}";
}

// Function to start changing the background color
startBtn.addEventListener("click", () => {
  // Disable start button to prevent multiple clicks
  startBtn.disabled = true;

  // Set interval to change the background color every second
  colorInterval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

// Function to stop changing the background color
stopBtn.addEventListener("click", () => {
  // Enable the start button again
  startBtn.disabled = false;

  // Clear the interval to stop the color change
  clearInterval(colorInterval);
});
