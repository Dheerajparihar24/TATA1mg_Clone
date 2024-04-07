let slides = document.querySelectorAll('.slide');
// console.log(slides);
slides.forEach(function(el,index){
    el.style.left = `${index * 100}%`;
})
let currentIndex = 0;
function slideImage() {
    // Move to the next slide
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Reset to the first slide if at the end
    }
    
    // Update positions of all slides based on currentIndex
    slides.forEach(function(el, index) {
        el.style.transition = 'left 1s ease'; // Add transition effect
        el.style.left = `${(index - currentIndex) * 100}%`;
    });
}

// Call slideImage() every 3 seconds
setInterval(slideImage, 3000);


        // Wait for the DOM content to load
        document.addEventListener('DOMContentLoaded', function () {
            // Get the sign-up button and sign-up popup container
            const signupBtn = document.getElementById('signup-btn');
            const signupPopup = document.getElementById('signup-popup');

            // Function to toggle the visibility of the sign-up popup
            function toggleSignupPopup() {
                signupPopup.classList.toggle('show');
            }

            // Event listener for sign-up button click
            signupBtn.addEventListener('click', toggleSignupPopup);

            // Close the sign-up popup when clicking outside of it
            window.addEventListener('click', function (event) {
                if (event.target === signupPopup) {
                    toggleSignupPopup();
                }
            });
        });

event.preventDefault()




