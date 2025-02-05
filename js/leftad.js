// This script is designed to check if an ad blocker is active
document.addEventListener("DOMContentLoaded", function () {
    // Create a hidden div element that ad blockers may block
    var adElement = document.createElement('div');
    adElement.id = 'KQPgqSZstBRJ';
    adElement.style.display = 'none';

    // Try to append the element to the body
    if (document.body) {
        document.body.appendChild(adElement);
    } else {
        console.error("document.body is null; script executed too early.");
    }
});
