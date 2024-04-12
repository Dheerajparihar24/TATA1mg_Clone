let slides = document.querySelectorAll('.slide');
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
        el.style.left = `${(index - currentIndex) * 100}%`;
    });
}
setInterval(slideImage, 3000);

// ---------------------------------------------------------------------------------------------------------

// // prodect card slide-first
// const prevBtn = document.getElementById("left");
// const nextBtn = document.getElementById("right");
// const carousel = document.querySelector(".carousel");

// let translateValue = 0;
// const cardWidth = carousel.firstElementChild.offsetWidth + 10; // Adding gap
// const maxTranslate = -(carousel.scrollWidth - carousel.offsetWidth);

// // Hide the previous button initially since the carousel starts at the beginning
// prevBtn.style.display = 'none';

// // Event listener for previous button
// prevBtn.addEventListener("click", function() {
//   if (translateValue < 0) {
//     translateValue += cardWidth;
//     translateValue = Math.max(translateValue, 0); // Ensure translateValue doesn't go below 0
//     carousel.style.transform = `translateX(${translateValue}px)`;
//     updateButtonVisibility();
//   }
// });

// // Event listener for next button
// nextBtn.addEventListener("click", function() {
//   if (translateValue > maxTranslate) {
//     translateValue -= cardWidth;
//     translateValue = Math.min(translateValue, maxTranslate); // Ensure translateValue doesn't exceed maxTranslate
//     carousel.style.transform = `translateX(${translateValue}px)`;
//     updateButtonVisibility();
//   }
// });

// // Function to update button visibility
// function updateButtonVisibility() {
//   // Show/hide previous button based on translateValue
//   prevBtn.style.display = translateValue < 0 ? 'inline-block' : 'none';
//   // Show/hide next button based on translateValue
//   nextBtn.style.display = translateValue > maxTranslate ? 'inline-block' : 'none';
// }
// ------------------------------------------------------------------------------------------------



