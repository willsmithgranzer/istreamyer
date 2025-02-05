document.addEventListener("DOMContentLoaded", function () {
    var e = document.createElement('div');
    e.id = 'KQPgqSZstBRJ';
    e.style.display = 'none';

    if (document.body) {
        document.body.appendChild(e);
    } else {
        console.error("document.body is null; script executed too early.");
    }

    // Check for ad blocker after the element is appended
    setTimeout(() => {
        var adElement = document.getElementById('KQPgqSZstBRJ');
        
        // Log the detection result for debugging purposes
        console.log(adElement ? 'Ad blocker not detected.' : 'Ad blocker detected!');

        if (!adElement) {
            document.getElementById('adBlockPopup').style.display = 'block';
        }
    }, 1000); // Delay to ensure the element has time to be appended
});
