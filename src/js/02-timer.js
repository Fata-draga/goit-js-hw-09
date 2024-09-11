// Import Flatpickr and its CSS
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

// Selecting elements
const startBtn = document.querySelector("[data-start]");
const daysEl = document.querySelector("[data-days]");
const hoursEl = document.querySelector("[data-hours]");
const minutesEl = document.querySelector("[data-minutes]");
const secondsEl = document.querySelector("[data-seconds]");

let countdownInterval = null;
let selectedDate = null;

// Flatpickr options and initialization
const options = {
  enableTime: true,
  time_24hr: true,
  dateFormat: "Y-m-d H:i",
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      Notiflix.Notify.failure("Please choose a date in the future");
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

// Initialize Flatpickr
flatpickr("#datetime-picker", options);

// Event listener to start the countdown
startBtn.addEventListener("click", () => {
  startCountdown();
  startBtn.disabled = true;
});

// Function to start the countdown
function startCountdown() {
  countdownInterval = setInterval(() => {
    const now = new Date();
    const timeRemaining = selectedDate - now;

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      updateDisplay(0, 0, 0, 0);
      startBtn.disabled = false;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeRemaining);
    updateDisplay(days, hours, minutes, seconds);
  }, 1000);
}

// Function to update the display with days, hours, minutes, and seconds
function updateDisplay(days, hours, minutes, seconds) {
  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);
}

// Helper function to convert milliseconds into days, hours, minutes, and seconds
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Helper function to add a leading zero to single-digit numbers
function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}
