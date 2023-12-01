"use strict";

let count = 0;
const counterElement = document.getElementById("counter");

function updateCounter() {
    counterElement.textContent = count;
}

function increaseCounter() {
    count++;
    updateCounter();
}

function decreaseCounter() {
    count--;
    updateCounter();
}

function resetCounter() {
    count = 0;
    updateCounter();
}

updateCounter(); // Sayfa yüklendiğinde sayacı göster