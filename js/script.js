// Set the date we're counting down to
const countdownDate = new Date("April 29, 2025 23:30:00 GMT+0600").getTime(); // Ensure to use the correct timezone

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  const distance = countdownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the countdown element
  document.getElementById("countdown").innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
