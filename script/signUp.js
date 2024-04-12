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

