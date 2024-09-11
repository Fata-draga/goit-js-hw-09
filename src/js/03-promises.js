import Notiflix from "notiflix";

// Select form elements
const form = document.querySelector(".form");

// Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Retrieve values from form inputs
  const firstDelay = Number(form.delay.value);
  const delayStep = Number(form.step.value);
  const amount = Number(form.amount.value);

  // Generate promises based on the inputs
  for (let i = 1; i <= amount; i++) {
    const delay = firstDelay + delayStep * (i - 1);
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});

// Function to create a promise
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
