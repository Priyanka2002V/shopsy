let slideIndex = 0;

function showSlides() {
    let slides = document.querySelector('.slides');
    let images = slides.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > images.length) {
        slideIndex = 1;
    }
    images[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();
