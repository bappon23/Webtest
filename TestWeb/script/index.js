// Example script for additional JavaScript functionality
document.addEventListener("DOMContentLoaded", function() {
    const locationTimes = document.querySelectorAll('.location-time');

    locationTimes.forEach(item => {
        item.addEventListener('mouseover', function() {
            const tooltipText = item.getAttribute('data-tooltip');
            // Further JavaScript code to handle tooltip display if necessary
            console.log(tooltipText); // For demonstration purposes
        });
    });
});
