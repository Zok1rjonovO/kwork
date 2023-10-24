let currentIndex = 0;
const imageContainer = document.getElementById('image-container');
const images = document.querySelectorAll('.carousel-image');

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarousel();
    }
}

function updateCarousel() {
    const translateValue = -currentIndex * 1280; // 1280px is the width of each image

    if (translateValue <= -5120) {
        return false
    }

    imageContainer.style.transform = `translateX(${translateValue}px)`;
}