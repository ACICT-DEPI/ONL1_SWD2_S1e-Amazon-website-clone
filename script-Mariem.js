const imgs = document.querySelectorAll('.header-slider ul img');
let slideIndex = 0;
let intervalId = null;


document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
   
    if (imgs.length > 0) {
        
        imgs[slideIndex].classList.add("displaySlide");
       
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    // Loop back to the first slide if out of bounds
    if (index >= imgs.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = imgs.length - 1;
    }

    // Hide all slides
    imgs.forEach(img => {
        img.classList.remove("displaySlide");
    });
   
    imgs[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
   
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
   
    intervalId = setInterval(nextSlide, 5000);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

