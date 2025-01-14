updateCountdown(); // Call immediately
setInterval(updateCountdown, 1000);
const targetDate = new Date(Date.UTC(new Date().getFullYear(), 6, 15, 0, 0, 0)).getTime();