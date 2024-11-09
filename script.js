// Slideshow Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-play slides every 3 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}, 3000);

showSlide(currentSlide);


document.addEventListener('DOMContentLoaded', function() {
    const audioElement = document.querySelector('audio');
    if (audioElement) {
        audioElement.volume = 0.1; // Sets the volume to 50%
    }
});




// document.getElementById("rsvpForm")?.addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevents the default form submission behavior

//     // Collect form data
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const attending = document.getElementById("attending").value;
//     const adults = attending !== "not-attending" ? document.getElementById("adults").value : '';
//     const children = attending !== "not-attending" ? document.getElementById("children").value : '';

//     // Prepare data to send
//     const formData = {
//         name: name,
//         email: email,
//         attending: attending,
//         adults: adults,
//         children: children
//     };

//     // Send form data to the server
//     fetch('/submit-rsvp', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => {
//         // Check if the response is OK and valid JSON
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         document.getElementById("responseMessage").textContent = data.message;
//         console.log("SUCCESS!", data);
//         event.target.reset(); // Optionally reset the form after submission
//     })
//     .catch(error => {
//         document.getElementById("responseMessage").textContent = "Oops! Something went wrong. Please try again.";
//         console.error("FAILED...", error);
//     });
// });
