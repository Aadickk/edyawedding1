// Set the date for the wedding
const weddingDate = new Date("December 14, 2024 18:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the appropriate elements
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is over, display a message
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("countdown-timer").innerHTML = "<p>The big day has arrived!</p>";
    }
}, 1000);
// RSVP Form Script for Conditional Display
// RSVP Form Script for Conditional Display
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('rsvpForm');

    form.addEventListener('change', function() {
        const pairOption = document.querySelector('input[name="attendance"][value="comingWithPair"]');
        const pairNameField = document.getElementById('pairNameField');

        if (pairOption.checked) {
            pairNameField.style.display = 'block'; // Show the name input field
        } else {
            pairNameField.style.display = 'none'; // Hide the name input field
        }
    });
});
