"use strict";
function startPrompt() {
    let userInput;

    while (true) {
        userInput = prompt("Lütfen 100'den büyük bir sayı girin:");

        // Kullanıcının "İptal" düğmesine basması durumunda döngüden çık
        if (userInput === "iptal") {
            break;
        }
        // Kullanıcının boş bir giriş yapması durumunda uyarı ver ve tekrar giriş yapmasını iste
        if (userInput.trim() === "") {
            alert("Boş bir giriş yapamazsınız. Lütfen tekrar deneyin.");
            continue;
        }

        // Girilen değeri kontrol et
        if (isNaN(userInput) || parseInt(userInput) <= 100) {
            // Kullanıcı 100'den küçük veya sayısal olmayan bir değer girdiyse uyarı ver ve tekrar giriş yapmasını iste
            alert("Lütfen 100'den büyük bir sayı girin.");
        } else {
            // Kullanıcı 100'den büyük bir sayı girdiyse döngüden çık
            break;
        }
    }

    // Döngüden çıkıldığında ya da kullanıcı iptal düğmesine bastığında bu satır çalışır
    console.log("Giriş başarıyla tamamlandı.");
}