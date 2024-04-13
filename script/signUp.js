// let slides = document.querySelectorAll('.slide');
// slides.forEach(function(el,index){
//     el.style.left = `${index * 100}%`;
// })

// let currentIndex = 0;
// function slideImage() { 
    
//     currentIndex++;
//     if (currentIndex >= slides.length) {
//         currentIndex = 0; // Reset to the first slide if at the end
//     }
    
//     // Update positions of all slides based on currentIndex
//     slides.forEach(function(el, index) {
//         el.style.transition = 'left 1s ease'; // Add transition effect
//         el.style.left = `${(index - currentIndex) * 100}%`;
//     });
// }

// setInterval(slideImage, 3000);


// login----
// var modal = document.getElementById('id01');



let signIn = document.getElementById("id02")
window.onclick = function(event) {
    if (event.target == signIn) {
        signIn.style.display = "none";
    }
}


let signUp = document.getElementById("id01")
window.onclick = function(event) {
    if (event.target == signUp) {
        signUp.style.display = "none";
    }
}