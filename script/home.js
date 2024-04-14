
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function startSlideshow() {
    setInterval(nextSlide, 2000); // Change image every 2 seconds
}

showSlide(currentIndex);
startSlideshow();


// ---------------------------------------------------------------------------------------------------------




