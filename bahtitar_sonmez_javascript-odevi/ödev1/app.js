"use strict";

function calculateTime() {
    const userInput = prompt("Lütfen bir sayı girin:");
    const seconds = userInput % 60;
    const minutes = Math.floor(userInput / 60); 
    const resultText = userInput + " saniye, " + minutes + " dakika ve " + seconds + " saniye.";
    document.getElementById("result").innerText = resultText;
}
