const slideImage = document.querySelector(".slide-image");
const images = document.querySelectorAll(".slide-image img");

let currentIndex = 0;

function showNextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    slideImage.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextImage, 3000);
