"use strict";

// Rastgele bir sayı oluştur
const targetNumber = Math.floor(Math.random() * 10) + 1;

// Kullanıcının puanını ve kalan hakkını tutan değişkenler
let score = 0;
let attempts = 3;

// HTML elementlerine erişim
const guessInput = document.getElementById("guessInput");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("scoreValue");
const attemptsElement = document.getElementById("attemptsValue");

function checkGuess() {
    // Kullanıcının tahminini al
    const userGuess = parseInt(guessInput.value);

    // Geçerli bir sayı değilse uyarı ver
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        resultElement.textContent = "Lütfen 1 ile 10 arasında bir sayı girin.";
        return;
    }

    // Tahmin doğruysa
    if (userGuess === targetNumber) {
        resultElement.textContent = "Tebrikler! Doğru tahmin!";
        score += 10;
        resetGame();
    } else {
        // Tahmin yanlışsa
        resultElement.textContent = "Üzgünüm, yanlış tahmin. Tekrar deneyin.";
        attempts--;

        // Hakkı kalmadıysa oyunu sıfırla
        if (attempts === 0) {
            resultElement.textContent = `Oyun bitti. Doğru sayı ${targetNumber} idi.`;
            resetGame();
        }
    }

    // Puan ve hakkı güncelle
    scoreElement.textContent = score;
    attemptsElement.textContent = attempts;
}

function resetGame() {
    // Yeni bir sayı seç ve puanı ve hakları sıfırla
    targetNumber = Math.floor(Math.random() * 10) + 1;
    score = 0;
    attempts = 3;

    // Mesajı temizle
    resultElement.textContent = "";

    // Giriş kutusunu temizle
    guessInput.value = "";

    // Puan ve hakkı güncelle
    scoreElement.textContent = score;
    attemptsElement.textContent = attempts;
}