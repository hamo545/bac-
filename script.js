// Countdown Timer Logic
function updateCountdown() {
  const now = new Date().getTime();
  let targetDate = new Date(Date.UTC(new Date().getFullYear(), 6, 15, 0, 0, 0)).getTime(); // July 15 in UTC

  // If July 15th has already passed this year, set the target to next year
  if (now > targetDate) {
    targetDate = new Date(Date.UTC(new Date().getFullYear() + 1, 6, 15, 0, 0, 0)).getTime();
  }

  const timeLeft = targetDate - now;

  // Check if the target date has been reached
  if (timeLeft <= 0) {
    document.querySelector('.countdown').innerHTML = "<h2>The day has arrived!</h2>";
    return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Initialize the countdown timer
updateCountdown(); // Call immediately to avoid delay
setInterval(updateCountdown, 1000); // Update every second
