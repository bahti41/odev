"use strict";
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findPrimes() {
    const inputElement = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");

    const n = parseInt(inputElement.value);

    if (isNaN(n) || n < 1) {
        alert("Lütfen geçerli bir pozitif sayı girin.");
        return;
    }

    let primes = [];

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    resultElement.innerHTML = `Asal sayılar: ${primes.join(', ')}`;
}