"use strict";

let slideIndex = 1;
showSlides(slideIndex);

// Önceki ve sonraki slaytları göster
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Belirli bir slaytı göster
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    // Slayt döngüsü
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Tüm slaytları gizle
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Belirtilen slaytı göster
    slides[slideIndex - 1].style.display = "block";
}